import React, { Component } from 'react';


function Login()
{
  let main_1 = (
  <div>
  
  <form><label>USER ID:</label><input type="text" />
        <label>PASSWORD:</label><input type="password" />
   </form><button type="submit" value="Submit">Submit</button>
  </div>
);

let main =<main>{main_1}</main>;
return <div>
  
  {main}
  
  </div>
  }
  export default Login;