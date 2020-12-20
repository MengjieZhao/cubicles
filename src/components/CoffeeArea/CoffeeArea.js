import React from 'react';
import './CoffeeArea.css';
import { Droppable } from 'react-beautiful-dnd';
import coffee from '../../statics/coffee.svg';
import { useGlobalState } from '../../contexts/globalState';
import User from '../User/User';

function CoffeeArea() {
  const [{ usersInCoffeeBreak }] = useGlobalState();
  console.log('usersInCoffeeBreak', usersInCoffeeBreak);

  const UserList = React.memo(() => usersInCoffeeBreak.map((user, index) => (
    <User user={user} index={index} key={user.id} />
  )));

  return (
    <div className="coffee">
      <img className="img" src={coffee} alt="coffee" />
      <h1 style={{ color: '#2E2E2E' }}>Coffee Area</h1>
      <Droppable droppableId="coffee">
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            <UserList users={usersInCoffeeBreak} />
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
}

export default CoffeeArea;
