import React from 'react';
import './Office.css';
import Desk from '../Desk/Desk';
import MeetingArea from '../MeetingArea/MeetingArea';
import CoffeeArea from '../CoffeeArea/CoffeeArea';
import Employee from '../Employee/Employee';


function Office(){
  return(
    <div className="office" >
      <CoffeeArea/>
      <div className="two_desk">
        <Desk/>
        <Desk/>
      </div>
      <div className="two_desk">
        <Desk/>
        <Desk/>
      </div>
      <MeetingArea/>
    </div>
  )
}

export default Office;