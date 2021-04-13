import React, {Component} from 'react';
import NewTask from './NewTask';
import List from './List';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state ={
      todolist: []
    }
  }

  addFn = (newItem) =>{
    this.setState({
      todoList: [...this.state.todolist, newItem],

    })
  }


  render(){
    return (
      <div className="App">
        <NewTask addFn={this.state.addFn}/>
        <List todo={this.state.todoList}/>
      </div>
    );
  }
}

export default App;
