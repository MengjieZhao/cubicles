import React from 'react';
import './Office.css';
import Desk from '../Desk/Desk';
import MeetingArea from '../MeetingArea/MeetingArea';
import CoffeeArea from '../CoffeeArea/CoffeeArea';

function Office(){
  return(
      <div className="office" >
        <CoffeeArea/>
        <div className="desks">
          <Desk id="MJ"/>
          <Desk id="Jenni"/>
          <Desk id="Raffi"/>
          <Desk id="Max"/>
        </div>
        <MeetingArea/>
      </div>
  )
}

export default Office;