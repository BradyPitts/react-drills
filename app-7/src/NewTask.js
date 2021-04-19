import React, {Component} from 'react';
import './App.css';

class NewTask extends Component {
  constructor(){
    super();

    this.state ={
      newItem: '',
    }
  }

  setInput = (val) =>{
    console.log(val)
    this.setState({newItem: val})
  }

  add = () =>{
    this.props.addFn(this.state.newItem)
    this.setState({newItem: ''})
  }

  render(){
    return (
      <div>
        <input value={this.state.newItem} placeholder='New Item' onChange={(e) => this.setInput(e.target.value) } />
        <button onClick={this.add} >Add Item To List</button>
      </div>
    );
  }
}

export default NewTask;


// import React, { Component } from "react";

// class NewTask extends Component {
//   constructor() {
//     super();

//     this.state = {
//       input: ""
//     };

//     this.handleAdd = this.handleAdd.bind(this);
//   }

//   handleInputChange(value) {
//     this.setState({ input: value });
//   }

//   handleAdd() {
//     this.props.add(this.state.input);
//     this.setState({ input: "" });
//   }

//   render() {
//     return (
//       <div>
//         <input
//           value={this.state.input}
//           placeholder="Enter new task"
//           onChange={e => this.handleInputChange(e.target.value)}
//         />

//         <button onClick={this.handleAdd}>Add</button>
//       </div>
//     );
//   }
// }

// export default NewTask;