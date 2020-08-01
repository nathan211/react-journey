import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

function One() {
  return (
    <div>
      <h1>My first react app</h1>
    </div>
  );
}

var Two = function () {
  return (
    <div>
      <h3>Hello 3</h3>
    </div>
  );
}

var Three = () => (
  <div>
    <h4>Hello 4</h4>
  </div>
);

class Four extends Component {
  render() {
    return (
      <div>
        <button>this is a button</button>
      </div>
    );
  }
}

function NumberOne(props){
  return (
      <div className="col-sm-3">
        <div className="card">
          <img className="card-img-top" src="https://via.placeholder.com/900x350" alt="Card image cap"/>
          <div className="card-body">
            <h5 className="card-title">{ props.title }</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
  );
}

class NumberTwo extends Component {
  render() {
    return (
      <div className="col-sm-4">
        <button className="btn btn-success">{ this.props.name }</button>
      </div>
    );
  }
}


function App() {
  return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <One />

            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
          <div className="container">
            <div className="row my-4">
              <NumberOne title="product 1" />
              <NumberOne title="product 2" />
              <NumberOne title="product 3" />
              <NumberOne title="product 4" />
            </div>
            <div className="row mb-4">
              <NumberTwo name="button 1" />
              <NumberTwo name="button 2" />
              <NumberTwo name="button 3" />
            </div>
          </div>
        </div>
  );
}

export default App;
