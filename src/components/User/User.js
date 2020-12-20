import React from 'react';
import './User.css';
import { Draggable } from 'react-beautiful-dnd';
import PropTypes from 'prop-types';

const UserItem = ({ name }) => (
  <div className="user">{ name }</div>
);

function User({ user, index }) {
  return (
    <Draggable draggableId={user.id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <UserItem name={user.name} />
        </div>
      )}
    </Draggable>
  );
}

UserItem.propTypes = {
  name: PropTypes.string.isRequired,
};

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.string.isRequired,
};

export default User;
