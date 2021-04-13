import React, { Component } from 'react';
import './App.css';

class Image extends Component {
  constructor(props){
    super(props);


  }

  render(){
    return (
      <div className="App">
        <img src={this.props.url} alt='cougar' />
      </div>
    );
  }
}

export default Image;
