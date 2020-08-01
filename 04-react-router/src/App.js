import React from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './Components/Menu';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Contact from './Components/Contact';
import RouteURL from './RouteURL';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Menu/>
        <RouteURL/>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
