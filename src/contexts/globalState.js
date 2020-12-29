import React, {
  createContext, useReducer, useContext,
} from 'react';
import PropTypes from 'prop-types';

const initialState = {
  usersAtWork: [],
  usersInMeeting: [],
  usersInBreak: [],
};
const GlobalStateContext = createContext(initialState);
const { Provider } = GlobalStateContext;

export const ACTIONS = {
  SET_USERS: 'SET_USERS',
  UPDATE_USERS_ODER: 'UPDATE_USERS_ODER',
};

export const GlobalStateProvider = ({ children }) => {
  const [currentState, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case ACTIONS.SET_USERS:
        // eslint-disable-next-line no-case-declarations
        const { usersInMeeting, usersInBreak, usersAtWork } = action;
        return {
          ...state, usersInMeeting, usersInBreak, usersAtWork,
        };
      case ACTIONS.UPDATE_USERS_ODER:
        // if (action.droppableId === 'meeting') {
        //   return {
        //     ...state,
        //     usersInMeeting: action.newUsers,
        //   };
        // }
        // if (action.droppableId === 'break') {
        //   return {
        //     ...state,
        //     usersInBreak: action.newUsers,
        //   };
        // }
        // if (action.droppableId.includes('work')) {
        //   const index = action.droppableId.split('_')[1];
        //   return {
        //     ...state,
        //     usersAtWork: { ...state.usersAtWork, [index]: action.newUsers },
        //   };
        // }
        return state;
      default:
        throw new Error('globalState: unknown action type');
    }
  }, initialState);

  return <Provider value={[currentState, dispatch]}>{children}</Provider>;
};

export const useGlobalState = () => useContext(GlobalStateContext);

GlobalStateProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
