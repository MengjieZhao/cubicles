import React from 'react';
import './Office.css';
import Desk from '../Desk/Desk';
import CoffeeArea from '../CoffeeArea/CoffeeArea';


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
      <CoffeeArea/>
    </div>
  )
}

export default Office;