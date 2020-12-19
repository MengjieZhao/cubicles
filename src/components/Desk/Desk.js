import React from 'react';
import './Desk.css';
import Employee from "../Employee/Employee";
import desktop from "../../statics/desktop.svg";

function Desk({id}){
  return(
    <div className="desk" >
      <img className="desk_img" src={desktop}/>
      <Employee id={id}/>
    </div>

  )
}

export default Desk;