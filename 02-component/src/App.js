import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TopMenu from './Components/TopMenu/TopMenu';
import Header from './Components/Header/Header';
import Content from './Components/Content/Content';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="container-fuild">
      <TopMenu/>
      <Header/>
      <Content title="This is content 1" pos="order-lg-1" image="img/01.jpg"/>
      <Content title="This is content 2" image="img/02.jpg"/>
      <Content title="This is content 3" pos="order-lg-1" image="img/03.jpg"/>
      <Footer/>
    </div>
  );
}

export default App;
