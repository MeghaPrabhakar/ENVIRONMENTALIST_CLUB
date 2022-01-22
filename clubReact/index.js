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
          this.state = {role:"admin", show:"home"};
          this.buttonsfunction = this.buttonsfunction.bind(this);
      }
	const logout = async (e) => {
		fetch( "http://localhost:3051/logout", {
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			}
		})        
		.then(response =>  response.json())
		.then((data) => {
			buttonsfunction("login")
			
		}).catch((err)=> {console.log("something went wrong")})
		
	};
  showData()
      {
        if(this.state.show == 'home') return <Home/>;
        else if(this.state.show == 'activities') return <Activities events={events}/>;
      
       else  if(this.state.show == 'membership') return <Membership/>;
        else if(this.state.show == 'login') return <Login/>;
        else if(this.state.show=='AdminActivities') return <AdminActivities/>
      }
      buttonsfunction(showValue)
      {
		if(showValue == "logout") {
			logout()
			//this.setState({show:showValue })  
		} else {
			this.setState({show:showValue })
		}
        
      }
  render() 
      {
          
        return (
          <div>
           <Menu role={this.state.role} show={this.state.show} buttonsfunction={this.buttonsfunction}/>
          {this.showData()}
          
          </div>);

      }
}

ReactDOM.render(<App />, document.getElementById("root"));




