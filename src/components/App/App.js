import React from 'react';
import './App.css';
import Case from '../Case/Case';
import Display from '../Display/Display';
import Buttons from '../Buttons/Buttons';

function App() {
  return (
    <div className="page">
      <Case>
        <Display />
        <Buttons />
      </Case>
    </div>
  );
}

export default App;
