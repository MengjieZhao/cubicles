import React from 'react';
import './Meeting.css';
import meeting from '../../statics/meeting.svg';

function MeetingArea() {
  return(
    <div className="meeting" >
      <img className="meeting_img" src={meeting}/>
      <h1>Meeting Area</h1>
    </div>
  )
}


export default MeetingArea;