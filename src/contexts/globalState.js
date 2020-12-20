import React, {
  createContext, useReducer, useContext,
} from 'react';
import PropTypes from 'prop-types';

const initialState = {
  usersAtWork: { 1: [{ id: '0', name: 'Raffi' }] },
  usersInMeeting: [{ id: '1', name: 'Monmon' }, { id: '2', name: 'Jenni' }],
  usersInBreak: [{ id: '3', name: 'Ninah' }, { id: '4', name: 'Felix' }, { id: '5', name: 'Sophie' }],
};
const GlobalStateContext = createContext(initialState);
const { Provider } = GlobalStateContext;

export const ACTIONS = {
  ADD_USERS: 'ADD_USERS',
  UPDATE_USERS_ODER: 'UPDATE_USERS_ODER',
};

export const GlobalStateProvider = ({ children }) => {
  const [currentState, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case ACTIONS.ADD_USERS:
        return {
          ...state,
          users: [state.users, ...action.user],
        };
      case ACTIONS.UPDATE_USERS_ODER:
        if (action.droppableId === 'meeting') {
          return {
            ...state,
            usersInMeeting: action.newUsers,
          };
        }
        if (action.droppableId === 'break') {
          return {
            ...state,
            usersInBreak: action.newUsers,
          };
        }
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
