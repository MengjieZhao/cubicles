import React from 'react';
import './Office.css';
import Desk from '../Desk/Desk';
import MeetingArea from '../CoffeeArea/MeetingArea';


function Office(){
  return(
    <div className="office" >
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