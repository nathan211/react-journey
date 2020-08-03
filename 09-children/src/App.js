import React from 'react';
import logo from './logo.svg';
import './App.css';
import Accordion from './components/Accordion';

function App() {
  return (
    <div className="App">
      <Accordion heading="Heading">
        Demo children
      </Accordion>
    </div>
  );
}

export default App;
