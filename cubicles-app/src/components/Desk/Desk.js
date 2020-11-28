import React from 'react';
import './Desk.css';
import Employee from "../Employee/Employee";


function Desk(){
  return(
    <div className="desk" >
      <h1>My workspace</h1>
        <Employee/>
    </div>

  )
}

export default Desk;