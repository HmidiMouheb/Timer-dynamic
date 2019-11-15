import React from 'react';
import './App.css';
import Timer from './components/Timer';

const MilliSeconds = 6318

function App() {
  return (
    <div className="App">
      <Timer MilliSeconds={MilliSeconds}/>

    </div>
  );
}

export default App;
