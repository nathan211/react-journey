import React from 'react';
import './App.css';
import TrafficLight from './components/TrafficLight';
import { Component } from 'react'

const RED = 0;
const ORANGE = 1;
const GREEN = 2;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        currentColor: GREEN
    };
    setInterval(() => {
        this.setState({
            currentColor: this.getNextColor(this.state.currentColor)
        });
    }, 1000);
  }

  getNextColor(color){
    switch(color){
        case RED:
            return ORANGE;
        case ORANGE:
            return GREEN;
        default:
            return RED;
    }
  }

  render() {
    return (
      <div>
        <TrafficLight currentColor={this.state.currentColor}/>
      </div>
    )
  }
}


export default App;
