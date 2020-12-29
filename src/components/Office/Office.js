import React, { useCallback, useState, useEffect } from 'react';
import './Office.css';
import { DragDropContext } from 'react-beautiful-dnd';
import MeetingArea from '../MeetingArea/MeetingArea';
import CoffeeArea from '../CoffeeArea/CoffeeArea';
import WorkingArea from '../WorkingArea/WorkingArea';
// eslint-disable-next-line no-unused-vars
import { ACTIONS, useGlobalState } from '../../contexts/globalState';
import { useApiService } from '../../contexts/apiService';

function Office() {
  // eslint-disable-next-line no-unused-vars
  const [{ usersAtWork, usersInMeeting, usersInBreak }, dispatch] = useGlobalState();
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(false);
  const { getUsers } = useApiService();

  const loadUsers = useCallback(async () => {
    setLoading(true);
    try {
      await getUsers();
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }, [getUsers]);

  useEffect(() => {
    (async () => {
      await loadUsers();
    })();
  }, [loadUsers]);

  const getList = (id) => {
    if (id === 'meeting') { return usersInMeeting; }
    if (id === 'break') { return usersInBreak; }
    if (id.includes('work')) {
      const index = id.split('_')[1];
      return usersAtWork[index] || [];
    }
    return undefined;
  };

  const reorder = (list, startIndex, endIndex) => {
    const newOrder = Array.from(list);
    const [removed] = newOrder.splice(startIndex, 1);
    newOrder.splice(endIndex, 0, removed);
    return newOrder;
  };

  const move = (source, destination, droppableSource, droppableDestination) => {
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const [removed] = sourceClone.splice(droppableSource.index, 1);

    destClone.splice(droppableDestination.index, 0, removed);

    const result = {};
    result[droppableSource.droppableId] = sourceClone;
    result[droppableDestination.droppableId] = destClone;

    return result;
  };

  const onDragEnd = (result) => {
    const { source, destination } = result;
    // dropped outside the list
    if (!destination) {
      return;
    }

    if (source.droppableId === destination.droppableId) {
      // eslint-disable-next-line no-unused-vars
      const newOrder = reorder(
        getList(source.droppableId),
        source.index,
        destination.index,
      );
      // dispatch({
      //   type: ACTIONS.UPDATE_USERS_ODER,
      //   droppableId: source.droppableId,
      //   newUsers: newOrder,
      // });
    //
    } else {
      const afterMove = move(
        getList(source.droppableId),
        getList(destination.droppableId),
        source,
        destination,
      );
      // eslint-disable-next-line no-unused-vars
      Object.keys(afterMove).forEach((state) => {
        // dispatch({
        //   type: ACTIONS.UPDATE_USERS_ODER,
        //   droppableId: state,
        //   newUsers: afterMove[state],
        // });
      });
    }
  };

  return (
    <div className="office">
      <DragDropContext onDragEnd={onDragEnd}>
        <CoffeeArea />
        <WorkingArea />
        <MeetingArea />
      </DragDropContext>
    </div>
  );
}

export default Office;
