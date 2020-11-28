import React from 'react';
import './Office.css';
import Desk from '../Desk/Desk';


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
    </div>
  )
}

export default Office;