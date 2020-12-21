import React from 'react';
import './Desk.css';
import PropTypes from 'prop-types';
import { Droppable } from 'react-beautiful-dnd';
import desktop from '../../statics/desktop.svg';
import { useGlobalState } from '../../contexts/globalState';
import User from '../User/User';

function Desk({ id }) {
  const [{ usersAtWork }] = useGlobalState();
  // eslint-disable-next-line no-unused-vars
  const usersAtDesk = usersAtWork[id] || [];
  console.log(id, usersAtDesk.length);
  const UserList = React.memo(() => usersAtDesk.map((user, index) => (
    <User user={user} index={index} key={user.id} />
  )));

  return (
    <div className="desk">
      {usersAtDesk.length < 2 && <img className="desk_img" src={desktop} alt="desk" />}
      <Droppable droppableId={`work_${id}`}>
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            <UserList users={usersAtDesk} />
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>

  );
}

Desk.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Desk;
