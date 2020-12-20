import React from 'react';
import './Office.css';
import { DragDropContext } from 'react-beautiful-dnd';
import MeetingArea from '../MeetingArea/MeetingArea';
import CoffeeArea from '../CoffeeArea/CoffeeArea';
import WorkingArea from '../WorkingArea/WorkingArea';

function Office() {
  return (
    <div className="office">
      <DragDropContext>
        <CoffeeArea />
        <WorkingArea />
        <MeetingArea />
      </DragDropContext>
    </div>
  );
}

export default Office;
