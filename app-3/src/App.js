import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      data:[
        {
          type: 'food',
          name: 'apple'
        },
        {
          type: 'food',
          name: 'banana'
        },
        {
          type: 'food',
          name: 'peach'
        },
        {
          type: 'utensil',
          name: 'fork'
        },
        {
          type: 'utensil',
          name: 'spoon'
        },
        {
          type: 'utensil',
          name: 'knife'
        }
      ]
    }
  }


  search(arr){
    
  }


  render(){
    return (
      <div className="App">
       
      </div>
    );
  }
}

export default App;
