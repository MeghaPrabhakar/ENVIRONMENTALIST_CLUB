import React from "react";
import ReactDOM, { render } from "react-dom";
import Activities from "./activities";
import Constants from "./constant";

class AdminActivities extends React.Component{
    constructor(props) {
		super(props);
		this.state = {
			addName: "",
			addDate: "",
			activities: []
		};

		this.delActivity = this.delActivity.bind(this);
		this.getActivity = this.getActivity.bind(this);
	}
	nameHandler(event) {

		this.setState({
			addName: event.target.value
		});
	}
	dateHandler(event) {
		this.setState({
			addDate: event.target.value
		});
	}
	getActivity() {
		fetch( Constants.api().activities, {
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			},
		})        
		.then(response =>  response.json())
		.then((data) => {
			if(data.length> 0) {
				this.setState({activities: data[0]});
			}
		}).catch((err)=> {console.log("something went wrong")})
	}
	addActivity() {
		let data = {name: this.state.addName, date: this.state.addDate}
		fetch( Constants.api().activities, {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(data)
		})        
		.then(response =>  response.json())
		.then((data) => {
			this.getActivity()
		}).catch((err)=> {console.log("something went wrong")})
		/*let act = {
			name: this.state.addName,
			dates: this.state.addDate
		};
		this.setState({
			activities: this.state.activities.concat(act)
		});*/
	}
	componentDidMount () {
		this.getActivity();
	}

	delActivity(act) {
		fetch( Constants.api().deleteActivities +act.name , {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json"
			},
		})        
		.then((data) => {
			this.getActivity();
		}).catch((err)=> {console.log("something went wrong")})
		/*let updateActivities = this.state.activities.filter((act, i) => e !== i);
		this.setState({
			activities: updateActivities
		});*/

	}
	  render() {
		return (
		 <div>
		   <div className="addActivityGrid">
			  <table className="activity-form" >
				 <thead>
					<tr>
					   <th></th>
					   <th></th>
					</tr>
				 </thead>
				 <tbody>
					<tr>
					   <td>              <label>Name</label></td>
					   <td>                        <input type="text"
						  onChange={this.nameHandler.bind(this)}
						  value={this.state.addName}/></td>
					</tr>
					<tr>
					   <td>                        <label>Date(s)</label></td>
					   <td>
						  <input type="text" value={this.state.addDate}
							 onChange={this.dateHandler.bind(this)}
							 />
					   </td>
					</tr>
					<tr>
					   <td>                      </td>
					   <td>
						  <button onClick={this.addActivity.bind(this)}>Add</button>
					   </td>
					</tr>
				 </tbody>
			  </table>
		   </div>
		   <table >
			  <tr>
				 <th></th>
				 <th>Name </th>
				 <th>Date(s)</th>
			  </tr>
			  {this.state.activities.map((act, i) => (
			  <tr key={"act" + i}>
				 <td>
					<button onClick={this.delActivity.bind(this, act)} >Delete</button>
				 </td>
				 <td>{act.name}</td>
				 <td>{act.date}</td>
			  </tr>
			  ))}
		   </table>
		   <footer>&copy; 2020 GREEN-HANDS-CLUB</footer>
		</div>
		);
    }
}

export default AdminActivities;