import React, {Component, useState, useEffect} from 'react'

const Login=(props) =>
{
	const [email, setEmail] = useState({});
	const [password, setPassword] = useState({});
	const login = async (e) => {
		let data = {email: email, password: password}
		fetch( "http://localhost:3051/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(data)
		})        
		.then(response =>  response.json())
		.then((data) => {
			if(data._id) {
				let user = data.firstName + " " + data.lastName; 
				props.action(data.role, "home", user);
			} else {
				alert("incorrect email and password")
			}
		}).catch((err)=> {console.log("something went wrong")})
	};
	const updateData =(e, type)=>{
		if(e.target.value !== undefined && e.target.value !== '' && e.target.value !== ' ')
		{
			if(type=="email") {
				setEmail(e.target.value);
			} else {
				setPassword(e.target.value);
			}
		}
	}

return <div>
	<main>
	  <form>
			<label>USER ID:</label><input type="text" onChange={(e) => {updateData(e, 'email')}}/>
			<label>PASSWORD:</label><input type="password" onChange={(e) => {updateData(e, 'password')}}/>
	   </form><button type="submit" value="Submit" onClick={(e)=>{login()}}>Submit</button>
	  </main>
  </div>
  }
  export default Login;