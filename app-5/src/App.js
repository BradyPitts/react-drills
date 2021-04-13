import React, { Component } from 'react';
import Image from './Image';
import './App.css';

class App extends Component {
  constructor(){
    super();

  }

  render(){
    return (
      <div className="App">
        <Image url='https://static.wikia.nocookie.net/wildlifepedia/images/e/ee/Couger.jpg/revision/latest/scale-to-width-down/220?cb=20120310030833'/>
      </div>
    );
  }
}

export default App;
