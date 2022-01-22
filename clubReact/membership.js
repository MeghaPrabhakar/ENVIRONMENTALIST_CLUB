import React from "react";
import { render } from "react-dom";

function Membership() {
  let div_1 = (
    
      <form className="myForm">
        <label>NAME:</label>
        <input type="text" />
        <br />
        <br />
        <label>EMAIL:</label>
        <input type="email" />
        <br />
        <br />
        <label>PASSWORD:</label>
        <input type="password" />
        <br />
        <br />
        <label>LEVEL:</label>
        <input type="password" />
        <br />
        <br />
        <label>COMMENTS:</label>
        <input type="password" />
        <br />
        <br />

        <p>Choose your level of expertise in gardening:</p>
        <select name="Gardening" id="Levels">
          <option value="Beginer">Beginer</option>
          <option value="Mid-Level">Mid-Level</option>
          <option value="Expert">Expert</option>
          <option value="Recreation">Recreation</option>
        </select>
        <br />
        <br />
        <button type="submit" value="Submit">
          Submit
        </button>
      </form>
  
  );
    return <div className="grid-item1">{div_1}</div>

}
export default Membership;
