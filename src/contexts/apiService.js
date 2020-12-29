import React, { createContext, useContext, useCallback } from 'react';
import PropTypes from 'prop-types';

const { REACT_APP_API_BASE_URL } = process.env;
const ApiServiceContext = createContext(null);

export const ApiServiceProvider = ({ children }) => {
  const makeApiRequest = useCallback(async (endpoint, method = 'GET', body = null) => {
    const headers = {
      'Content-Type': 'application/json',
    };

    const url = `${REACT_APP_API_BASE_URL}${endpoint}`;
    console.log('url', url);

    const response = await fetch(url, {
      method,
      headers,
      mode: 'no-cors',
      body: body && JSON.stringify(body),
    });
    console.log('response', response);
    return response.json();
  }, []);

  const getUsersInMeeting = useCallback(async () => {
    const response = await makeApiRequest('/get_users_in_meeting', 'GET', null);
    console.log(response);
    const { usersInMeeting } = response;
    return usersInMeeting;
  }, [makeApiRequest]);

  const value = {
    getUsersInMeeting,
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
