import React, {
  createContext, useReducer, useContext,
} from 'react';
import PropTypes from 'prop-types';

const initialState = {
  users: [],
  usersInMeeting: [{ id: '1', name: 'Monmon' }, { id: '2', name: 'Jenni' }],
  usersInCoffeeBreak: [{ id: '3', name: 'Ninah' }, { id: '4', name: 'Raffi' }],
};
const GlobalStateContext = createContext(initialState);
const { Provider } = GlobalStateContext;

export const ACTIONS = {
  ADD_USERS: 'ADD_USERS',
};

export const GlobalStateProvider = ({ children }) => {
  const [currentState, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case ACTIONS.ADD_USERS:
        return {
          ...state,
          users: [state.users, ...action.user],
        };
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
