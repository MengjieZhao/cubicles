import React from 'react';
import './Desk.css';
import Employee from "../Employee/Employee";


function Desk({id}){
  return(
    <div className="desk" >
      <h1>My workspace</h1>
        <Employee id={id}/>
    </div>

  )
}

export default Desk;