import React from 'react';
import '../App.css';
import Header from './Header';
import SearchBox from './SearchBox';
import TableData from './TableData';
import AddUser from './AddUser';
import Footer from './Footer';
import { Component } from 'react';
import Data from './data.json';
import { v4 as uuidv4 } from 'uuid';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      displayForm: false,
      data: Data,
      searchText: '',
      displayEditForm: false,
      userEditObject: {}
    }
  }
  
  changeStatus = () => {
    this.setState({
      displayForm: !this.state.displayForm
    });
  }

  getSearchText = (text) => {
    this.setState({
      searchText: text
    })
  }

  getNewUserData = (name, tel, permission) => {
    var user = {};
    user.id = uuidv4();
    user.name = name;
    user.tel = tel;
    user.permission = permission;

    var users = this.state.data;
    users.push(user);
    this.setState({
      data: users
    });

    console.log(users);
  }

  editUser = (user) => {
    this.changeEditStatus();
    this.setState({
      userEditObject: user
    })
  }

  changeEditStatus = () => {
    this.setState({
      displayEditForm: !this.state.displayEditForm
    })
  }

  getUserEditObj = (user) => {
    console.log('edited: ' + user.name);
    this.state.data.forEach((value, key) => {
      if(value.id === user.id){
        value.name = user.name;
        value.tel = user.tel;
        value.permission = user.permission;
      }
    });
  }

  deleteUser = (userId) => {
    var tempData = this.state.data.filter(item => item.id !== userId);
    this.setState({
      data: tempData
    });
  }

  render() {
    var res = [];
    this.state.data.forEach((item) => {
      if(item.name.indexOf(this.state.searchText) !== -1){
        res.push(item);
      }
    });

    return (
      <div>
        <Header/>
        <div className="container">
          <SearchBox getUserEditObj={(user) => { this.getUserEditObj(user) } } userEditObject={ this.state.userEditObject } changeStatus={ () => { this.changeEditStatus() } } displayEditForm={ this.state.displayEditForm } checkConnectProps={ (text) => this.getSearchText(text) } change={ () => this.changeStatus() } status={ this.state.displayForm }/>
          <div className="row">
            <TableData deleteUser={ (userId) => { this.deleteUser(userId) } }  edit={ (user) => { this.editUser(user) } } dataUser={ res }/>
            <AddUser add={ (name, tel, permission) => this.getNewUserData(name, tel, permission) } displayForm={ this.state.displayForm }/>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;