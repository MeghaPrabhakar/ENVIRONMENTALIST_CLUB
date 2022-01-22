import React from "react";
import ReactDOM from "react-dom";
import members from "./eventData.json"; // Practice data

// Take a look at what we imported
console.log(members);
// Extremely common pattern mapping array of info to array of JSX
let rows = members.map(function (u) {
  return (
    <tr key={u.name}>
      <td>{u.name}</td>
      <td>{u.dates}</td>
    </tr>
  );
});

let memberTable = (
  <table className="myTable">
    <thead>
      <tr>
        <th>Activity Name</th>
        <th>Activity Date</th>
      </tr>
    </thead>
    <tbody>{rows}</tbody>
  </table>
);

function Activities(){
  return <section>
  <h1>Our Coding Club!</h1>
    {memberTable}
  </section>;
}

export default Activities;