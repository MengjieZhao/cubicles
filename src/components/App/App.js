import './App.css';
import React from 'react';
import Office from '../Office/Office';
import Menu from '../Menu/Menu';
import { GlobalStateProvider } from '../../contexts/globalState';
import { ApiServiceProvider } from '../../contexts/apiService';

function App() {
  return (
    <GlobalStateProvider>
      <ApiServiceProvider>
        <div className="App">
          <Menu />
          <Office />
        </div>
      </ApiServiceProvider>
    </GlobalStateProvider>
  );
}

export default App;
