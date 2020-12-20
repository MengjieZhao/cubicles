import React from 'react';
import './WorkingArea.css';
import Desk from '../Desk/Desk';

function WorkingArea() {
  return (
    <div className="desks">
      <Desk id="1" />
      <Desk id="2" />
      <Desk id="3" />
      <Desk id="4" />
      <Desk id="5" />
      <Desk id="6" />
    </div>
  );
}

export default WorkingArea;
