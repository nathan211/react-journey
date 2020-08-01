import React from 'react';
import { Component } from 'react';
import './App.css';
import Content from './Content';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      status: "init",
      status2: "This is a title"
    }
  }

  componentWillMount() {
    console.log('cwm is running...');
  }

  componentDidMount() {
    console.log('cdm is running...');
  }
  
  shouldComponentUpdate(nextProps, nextState) {
    console.log('scup is running...');
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('cwup is running...');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('cdup is running...');
  }
  
  updateState = () => {
    this.setState({
      status: "Status is updated"
    });
  }
  

  render() {
    console.log('render is running...');
    console.log(this.state.status);
    return (
      <div className="App">
        <Content title={ this.state.status2 } />
        <button onClick={ () => { this.updateState() } }>Click me!</button>
      </div>
    );
  }
}


export default App;
