import React, { createContext, useContext, useCallback } from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line no-unused-vars
import { ACTIONS, useGlobalState } from './globalState';

const { REACT_APP_API_BASE_URL } = process.env;
const ApiServiceContext = createContext(null);

export const ApiServiceProvider = ({ children }) => {
  const [, dispatch] = useGlobalState();

  const makeApiRequest = useCallback(async (endpoint, method = 'GET', body = null) => {
    const headers = {
      'Content-Type': 'application/json',
    };

    const url = `${REACT_APP_API_BASE_URL}${endpoint}`;
    const response = await fetch(url, {
      method,
      headers,
      body: body && JSON.stringify(body),
    });
    if (!response.ok) {
      return response.text();
    }
    return response.json();
  }, []);

  const getUsers = useCallback(async () => {
    const response = await makeApiRequest('/get_users', 'GET', null);
    const { usersInMeeting, usersInBreak, usersAtWork } = response;
    dispatch({
      type: ACTIONS.SET_USERS, usersInMeeting, usersInBreak, usersAtWork,
    });
    console.log('usersAtWork', usersAtWork);
  }, [makeApiRequest, dispatch]);

  const value = {
    getUsers,
  };

  return (
    <ApiServiceContext.Provider value={value}>
      {children}
    </ApiServiceContext.Provider>
  );
};

export const useApiService = () => useContext(ApiServiceContext);

ApiServiceProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
