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
    this.setState({newItem: val})
  }


  render(){
    return (
      <div className="App">
        <input value={this.state.newItem} placeholder='New Item' onChange={(e) => this.setInput(e.target.value) } />
        <button onClick={() => this.props.addFn(this.state.newItem)} >Add Item To List</button>
      </div>
    );
  }
}

export default NewTask;
