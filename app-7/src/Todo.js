import React, { Component } from 'react';
import './App.css';

class Todo extends Component {
  constructor(props){
    super(props); 
  }

  render() {
    return <h4>{this.props.displayList}</h4>;
  }
}

export default Todo;