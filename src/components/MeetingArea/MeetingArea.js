import React from 'react';
import './Meeting.css';
import meeting from '../../statics/meeting.svg';

function MeetingArea() {
  return(
      <div className="meeting" >
        <img className="meeting_img" src={meeting} alt='meeting_img'/>
        <h1 style={{ color: '#2E2E2E' }}>Meeting Area</h1>
      </div>
  )
}


export default MeetingArea;