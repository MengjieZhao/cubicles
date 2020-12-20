import React from 'react';
import './Office.css';
import MeetingArea from '../MeetingArea/MeetingArea';
import CoffeeArea from '../CoffeeArea/CoffeeArea';
import WorkingArea from "../WorkingArea/WorkingArea";

function Office(){
  return(
      <div className="office" >
        <CoffeeArea/>
        <WorkingArea/>
        <MeetingArea/>
      </div>
  )
}

export default Office;