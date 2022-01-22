/* Testing the POST /tours/add API */
const rp = require('request-promise-native');

let cookiejar = rp.jar(); // Use this to store cookies in between sessions.

let addMember = {
    uri: 'http://127.0.0.1:3000/member',
    json: true,
    method: "POST",
    body: {
        firstName: "Mars",
        lastName:"Potter",
        email: "mars@gmail.com",
        password:"12345",
        role:'member'
    },
    jar: true
};

let loginOptions = {
    uri: 'http://127.0.0.1:3000/login',
    json: true,
    method: "POST",
    body: { // admin user, see users.json file
        "email": "ryan@gmail.com",
        "password": "12345"
    },
    jar: true
}

let loginCust = {
    uri: 'http://127.0.0.1:3000/login',
    json: true,
    method: "POST",
    body: { // admin user, see users.json file
        "email": "chihuahua1899@gmail.com",
        "password": "'E`Gj3iJ"
    },
    jar: true
}

async function someTests() {
    console.log("Try adding Member without logging in");
    try {
        let res1 = await rp(addMember);
        console.log(`Add Tour result: ${JSON.stringify(response)}`);
    } catch (e) {
        console.log(`Error: ${e}\n`);
    }

    console.log("Login as admin, then adding member")
    try {
        let res2 = await rp(loginOptions);
        console.log(`login results: ${JSON.stringify(res2)}`);
        console.log(`Cookie: ${JSON.stringify(cookiejar.cookies)}`);
        
        let res3 = await rp(addMember);
        console.log(`Add Member result: ${JSON.stringify(res3)}\n`);
    } catch (e) {
        console.log(`Error: ${e}\n`);
    }

    console.log("Login as customer, then try adding Member")
    try {
        let res4 = await rp(loginCust);
        console.log(`login results: ${JSON.stringify(res4)}`);
        //console.log(`Cookie: ${JSON.stringify(cookiejar.cookies)}`);
        let res5 = await rp(addMember);
        console.log(`Add Member result: ${JSON.stringify(res5)}\n`);
    } catch (e) {
        console.log(`Error: ${e}\n`);
    }
}

someTests();