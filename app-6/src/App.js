import React, { Component } from 'react';
import Todo from './Todo'
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      todoList: [],
      todoItem : ''
    }
  }

  todoItemFn = (val) =>{
    this.setState({todoItem: val})
  }

  addFn = (newItem) =>{
    this.setState({
      todoList: [...this.state.todoList, newItem],
      todoItem: ''
    });
  }



  render(){
    return (
      <div className="App">

        <input placeholder='todo item' onChange={(e) => this.todoItemFn(e.target.value) } />

        <button onClick={() => this.addFn(this.state.todoItem)} >Add to list</button>

        <Todo todo={this.state.todoList} />
      </div>
    );
  }
}

export default App;
