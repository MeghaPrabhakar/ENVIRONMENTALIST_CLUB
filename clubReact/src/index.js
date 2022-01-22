import React from 'react';
import ReactDOM from 'react-dom';
// import menuitems from "./eventData.json";
import events from './eventData.json';
import Menu from './menu';
import Home from './home';
import Activities from './activities';
import Login from './login';
import Membership from './membership';
import AdminActivities from './AdminActivities';
import { BrowserRouter, Route } from 'react-router-dom'; 

class App extends React.Component 
{
  constructor(props) 
      {
          super(props); 
          this.state = {role:"guest", show:"home", user: "guest"};
          this.buttonsfunction = this.buttonsfunction.bind(this);
		  this.changeState = this.changeState.bind(this);
      }
  showData()
      {
        if(this.state.show == 'home') return <Home user={this.state.user} role={this.state.role}/>;
        else if(this.state.show == 'activities') return <Activities events={events} user={this.state.user} role={this.state.role}/>;
      
       else  if(this.state.show == 'membership') return <Membership/>;
        else if(this.state.show == 'login') return <Login action={this.changeState}/>;
        else if(this.state.show=='AdminActivities') return <AdminActivities/>
      }
	logout = async (e) => {
		fetch( "http://localhost:3051/logout", {
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			}
		})        
		.then(response =>  response.json())
		.then((data) => {
			this.buttonsfunction("login")
			
		}).catch((err)=> {console.log("something went wrong")})
		
	};
   buttonsfunction(showValue)
      {
        if(showValue == "logout") {
			this.logout();
		} else {
			this.setState({show:showValue })
		}
      }
   changeState(role, show, user) {
	   this.setState({role: role, show: show, user: user});
   }
  render() 
      {
          
        return (
          <div>
		  {(this.state.show != 'login') ?<Menu role={this.state.role} show={this.state.show} buttonsfunction={this.buttonsfunction}/>: ""}
          {this.showData()}
          
          </div>);

      }
}

ReactDOM.render(<App />, document.getElementById("root"));




