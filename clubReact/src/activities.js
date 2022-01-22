import React, {Component, useState, useEffect} from 'react'
import ReactDOM from "react-dom";
import Constants from "./constant";

const Activities=(props) =>
{
	let user = props.user;
	let role = props.role;
	const [members, setMembers] = useState([]);
	const getActivity = async (e) => {
		fetch( Constants.api().activities, {
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			},
		})        
		.then(response =>  response.json())
		.then((data) => {
			console.log(data)
			if(data.length> 0) {
				setMembers(data[0]);
			}
		}).catch((err)=> {console.log("something went wrong")})
		
	};
	let rows = members.map(function (u) {
		
	  return (
		<tr key={u.name}>
		  <td>{u.name}</td>
		  <td>{u.date}</td>
		</tr>
	  );
	});

	useEffect(() => {
		getActivity();
		
	},[]);
  
  return <section className="margin-top-150">
  <div><p>User: {user}, role: {role}</p></div>
  <h1>Our Coding Club!</h1>
    <table className="myTable">
		<thead>
		  <tr>
			<th>Activity Name</th>
			<th>Activity Date(s)</th>
		  </tr>
		</thead>
		<tbody>{rows}</tbody>
	  </table>
  </section>;
}

export default Activities;