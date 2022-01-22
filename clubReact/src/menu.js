import React from 'react';
import ReactDOM from 'react-dom';

function Menu(props)
{

let guest=(show,buttonsfunction) => {
  return (<ul>
<li onClick={()=>buttonsfunction('home')} className={show=='home'?'active':''} >HOME</li>
<li onClick={()=>buttonsfunction('activities')} className={show=='activities'?'active':''} >ACTIVITIES</li>
<li onClick={()=>buttonsfunction('login')} className={show=='login'?'active':''} >LOGIN</li>
<li onClick={()=>buttonsfunction('membership')}  className={show=='membership'?'active':''} >MEMBERSHIP</li>

</ul>);
}
let user=(show,buttonsfunction) => {
  return (<ul>
    <li onClick={()=>buttonsfunction('home')} className={show=='home'?'active':''} >HOME</li>
    <li onClick={()=>buttonsfunction('activities')} className={show=='activities'?'active':''} >ACTIVITIES</li>
	<li onClick={()=>buttonsfunction('membership')}  className={show=='membership'?'active':''} >MEMBERSHIP</li>
    <li onClick={()=>buttonsfunction('logout')} className={show=='logout'?'active':''} >LOGOUT</li>
    </ul>);
}
function admin(show,buttonsfunction) {
  return (<ul>
    <li onClick={()=>buttonsfunction('home')} className={show=='home'?'active':''} >HOME</li>
    {/*}<li onClick={()=>buttonsfunction('membership')}  className={show=='membership'?'active':''} >MEMBERSHIP</li>{*/}
    <li onClick={()=>buttonsfunction('AdminActivities')} className={show=='AdminActivities'?'active':''} >MANAGE ACTIVITIES</li>
    <li  onClick={()=>buttonsfunction('activities')}className={show=='activities'?'active':''} >ACTIVITIES</li>
    <li onClick={()=>buttonsfunction('logout')} className={show=='logout'?'active':''} >LOGOUT</li>
    </ul>);
}

      
      let menu;
      if(props.role=='guest') menu = guest(props.show,props.buttonsfunction);
      else
      if(props.role=='member') menu = user(props.show,props.buttonsfunction);
      else
      if(props.role=='admin') menu = admin(props.show,props.buttonsfunction);
     

      return( <nav className="box">{menu}</nav>);
      
}

export default Menu;