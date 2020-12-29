import React from 'react';
import './Meeting.css';
import { Droppable } from 'react-beautiful-dnd';
import meeting from '../../statics/meeting.svg';
import User from '../User/User';
import { useGlobalState } from '../../contexts/globalState';

function MeetingArea() {
  const [{ usersInMeeting }] = useGlobalState();

  const UserList = React.memo(() => usersInMeeting.map((user, index) => (
    // eslint-disable-next-line no-underscore-dangle
    <User user={user} index={index} key={user._id} />
  )));

  return (
    <div className="meeting">
      <img className="meeting_img" src={meeting} alt="meeting_img" />
      <h1 style={{ color: '#2E2E2E' }}>Meeting Area</h1>
      <Droppable droppableId="meeting">
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            <UserList users={usersInMeeting} />
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
}

export default MeetingArea;
