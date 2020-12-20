import './App.css';
import React from 'react';
import Office from '../Office/Office';
import Menu from '../Menu/Menu';
import { GlobalStateProvider } from '../../contexts/globalState';

function App() {
  return (
    <GlobalStateProvider>
      <div className="App">
        <Menu />
        <Office />
      </div>
    </GlobalStateProvider>
  );
}

export default App;
