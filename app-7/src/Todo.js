import React, { Component } from 'react';
import './App.css';

class Todo extends Component {
  constructor(props){
    super(props); 
  }

  render() {
    return <h4>{this.props.listItem}</h4>;
  }
}

export default Todo;

// import React, {Component} from 'react';

// export default class Todo extends Component {
//   render() {
//     return <p>{this.props.task}</p>;
//   }
// }