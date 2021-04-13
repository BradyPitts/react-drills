import React, { Component } from 'react';
import './App.css';

class Todo extends Component {
  constructor(props){
    super(props);

    
  }



  render() {
    let displayList = this.props.todo.map((ndx) => {
      return <h2>{ndx}</h2>
    });

    return <div>{displayList}</div>;
  }
}

export default Todo;