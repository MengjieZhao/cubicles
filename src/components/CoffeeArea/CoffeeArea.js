import React from 'react';
import './CoffeeArea.css';
import { Droppable } from 'react-beautiful-dnd';
import coffee from '../../statics/coffee.svg';
import { useGlobalState } from '../../contexts/globalState';
import User from '../User/User';

function CoffeeArea() {
  const [{ usersInBreak }] = useGlobalState();

  const UserList = React.memo(() => usersInBreak.map((user, index) => (
    // eslint-disable-next-line no-underscore-dangle
    <User user={user} index={index} key={user._id} />
  )));

  return (
    <div className="coffee">
      <img className="img" src={coffee} alt="coffee" />
      <h1 style={{ color: '#2E2E2E' }}>Coffee Area</h1>
      <Droppable droppableId="break">
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            <UserList users={usersInBreak} />
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
}

export default CoffeeArea;
