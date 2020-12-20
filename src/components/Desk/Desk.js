import React from 'react';
import './Desk.css';
import desktop from "../../statics/desktop.svg";

function Desk({id}){
  return(
    <div className="desk" >
      <img className="desk_img" src={desktop} alt="desk"/>
    </div>

  )
}

export default Desk;