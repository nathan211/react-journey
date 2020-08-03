import React from 'react';
import './App.css';
import TodoItem from './components/TodoItem';
import { Component } from 'react';
import checkAll from './img/tickAll.svg';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      newItem: '',
      todoItems: [
        { title: 'item 1', isComplete: false },
        { title: 'item 2', isComplete: true },
        { title: 'item 3', isComplete: false }
      ]
    };
    this.onKeyUp = this.onKeyUp.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onItemClicked(item) {
    return () => {
      const isComplete = item.isComplete;
      const { todoItems } = this.state;
      const index = todoItems.indexOf(item);

      this.setState({
        todoItems: [
          ...todoItems.slice(0, index),
          {
            ...item,
            isComplete: !isComplete
          },
          ...todoItems.slice(index + 1)
        ]
      });
    };
  }

  onKeyUp(event){
    if(event.keyCode === 13){ // enter key
      let text = event.target.value;

      if(!text){ return; }
      text = text.trim();
      if(!text){ return; }
      
      this.setState({
        todoItems: [
          {
            title: text,
            isComplete: false
          },
          ...this.state.todoItems
        ],
        newItem: ''
      });
    }
  }

  onChange(event){
    this.setState({
      newItem: event.target.value
    });
  }

  render() {
    const { todoItems, newItem } = this.state;
    if (todoItems.length <= 0) {
      return <div className="App">Nothing here.</div>;
    }
    return (
      <div className="App">
        <h1>
          Todos
        </h1>
        <div className="Header"> 
          <img src={checkAll} width={30} height={30} alt="check all"/>
          <input 
            type="text" 
            placeholder="Add a new item" 
            onKeyUp={this.onKeyUp}
            value={newItem}
            onChange={this.onChange}
          />
        </div>
        {
          todoItems.map((item, index) => {
            return <TodoItem onClick={this.onItemClicked(item)} item={item} key={index} />
          })
        }
      </div>
    )
  }
}

export default App;
