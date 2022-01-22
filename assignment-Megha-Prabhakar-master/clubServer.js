const express = require('express');
const Datastore = require('nedb-promises');
const path = require('path');
const bodyParser = require('body-parser');
const hashUsers = require('./hashUsers.json');
const events = require('./activities.json');
const bcrypt = require('bcryptjs')
const session = require('express-session');
const cookieName = "CLUBServer";
const test = require('./testFile')

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



app.use(session({
    secret: 'My Personal Secret',
    resave: false,
    saveUninitialized: false,
    name: cookieName // Sets the name of the cookie used by the session middleware
}));

const setUpSessionMiddleware = function (req, res, next) {
    console.log(`session object: ${JSON.stringify(req.session)}`);
    console.log(`session id: ${req.session.id}`);
    if (!req.session.user) {
        req.session.user = {role: "guest"};
    };
    next();
};

app.use(setUpSessionMiddleware);

const checkCustomerMiddleware = function (req, res, next) {
    if (req.session.user.role === "guest") {
        res.status(401).json({error: "Not permitted"});
        } else {
        console.log(`Session info: ${JSON.stringify(req.session)} \n`);
        next();
    }
};

const checkAdminMiddleware = function (req, res, next) {
    
    if (req.session.user.role !== "admin") {
        res.status(401).json({error: "Not permitted"});
    } else {
        next();
    }
};


const activities = new Datastore('activities.db');
const users = new Datastore('users.db');
activities.load().then(()=>console.log('Activiteis database connected')).catch(err => console.log(err));
users.load().then(()=>console.log('Users database connected')).catch(err => console.log(err));

app.get('/', (req, res) => {
    res.send('Hello World!')
})


app.get('/info', (req, res) => {
    let a =  {"clubName": "Green hands Garden Club",
        "ownerName": "Megha Prabhakar",
        "ownerNetId": "re9784"
    } 
    res.json(a)
})

app.get('/activities', (req, res) =>  {

    activities.find({}).then((data) => {
        res.send([data])
    }).catch((err) => console.log(err))

    
});

app.post('/activities',checkCustomerMiddleware, (req, res) => { 
    let {name, date} = req.body;
    let errors = [];
    if(!name){
        errors.push('Name');
    }
    if(!date){
        errors.push('Date');
    }   
    if(errors.length > 0){
        errors = errors.join(',');
        return res.json({
            message: `These are required fields: ${errors}.`,
            status: false
        })
    }
    let data = {
        name:name,
        date: date
    }
    activities.insert(data).then((data) => {
        res.json({'msg':'New Activity Stored', 'activity':data})
    })
    
});


//question 3a
app.delete('/activity/:name',checkCustomerMiddleware, (req, res) =>  {

    let name = req.params.name;

    activities.remove({name:name},{}).then(() => {
        res.send('Activity Removed')
    }).catch((err) =>console.log(err))

});

//question 3c
app.get('/member/all', (req, res) =>  {
    users.find({}).then((data) => {
        res.send([data])
    }).catch((err) => console.log(err))
});

//question 3d
app.post('/member',checkAdminMiddleware, async (req, res) =>  {

    let {firstName, lastName, email, password, role} = req.body;
    let errors = [];
    if(!firstName){
        errors.push('First Name');
    }
    if(!lastName){
        errors.push('Last Name');
    }
    if(!email){
        errors.push('Email');
    }   
    if(!password){
        errors.push('Password');
    }
    if(!role){
        errors.push('Role');
    }
    if(errors.length > 0){
        errors = errors.join(',');
        return res.json({
            message: `These are required fields: ${errors}.`,
            status: false
        })
    }

    let data = {
        firstName:firstName,
        lastName:lastName,
        email:email,
        password:password,
        role:role
    }
    let salt = await bcrypt.genSalt(10);
    data.password = await bcrypt.hash(password, salt);
    users.insert(data).then((data) => {
        res.json({'msg':'New Member Stored', 'activity':data})
    })

});


//question 3e
app.delete('/member/:name',checkAdminMiddleware, (req, res) =>  {
    let name = req.params.name;

    users.remove({firstName:name}).then(() => {
        res.send('User Removed')
    }).catch((err) =>console.log(err))

});

// question 4 
app.post('/login', async (req, res) =>  {
    
    let {email, password} = req.body;
    let errors =[]
    if(!email){
        errors.push('Name');
    }
    if(!password){
        errors.push('Email');
    }  

    if(errors.length > 0){
        errors = errors.join(',');
        return res.json({
            message: `These are required fields: ${errors}.`,
            status: false
        })
    }

    let user = await users.findOne({email})
    
    if(!user){
        return res.status(400).json({msg: 'Invalid Credentials'})
    }
    
    const isMatch = await bcrypt.compare(password, user.password)
    
    if(isMatch){
        let oldInfo = req.session.user;
        req.session.regenerate(function (err) {
            
            if (err) {console.log(err);}
            let newUserInfo = Object.assign(oldInfo, user);
            delete newUserInfo.password;
            req.session.user = newUserInfo;
            console.log('kkk')
            res.json(newUserInfo);
            
        });
        
    }else{
        res.status(401).json({error: true, message: "User/Password error"});
    }
    
    
});

app.get('/logout', function (req, res) {
    let options = req.session.cookie;
    req.session.destroy(function (err) {
        if (err) {
            console.log(err);
        }
        res.clearCookie(cookieName, options); // the cookie name and options
        res.json({message: "Goodbye"});
    })
});


app.listen(3000, () => console.log('Server Started at at 3000'));