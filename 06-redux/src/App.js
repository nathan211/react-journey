import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { Component } from 'react'
import News from './News';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>
          this is a title
        </h1>
        {this.props.data}
        <News></News>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    data: state.num
  }
}

export default connect(mapStateToProps)(App);
