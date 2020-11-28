import React from 'react';
import './Office.css';
import Desk from '../Desk/Desk';
import MeetingArea from '../MeetingArea/MeetingArea';
import CoffeeArea from '../CoffeeArea/CoffeeArea';


function Office(){
  return(
    <div className="office" >
      <CoffeeArea/>
      <div className="two_desk">
        <Desk id="A"/>
        <Desk id="B"/>
      </div>
      <div className="two_desk">
        <Desk id="C"/>
        <Desk id="D"/>
      </div>
      <MeetingArea/>
    </div>
  )
}

export default Office;