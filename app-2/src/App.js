import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      data:['hello','this', 'is','a','list'],
    }
  }



  render() {
    let displayList = this.state.data.map((element) => {
      return <h2>{element}</h2>;
    });

    return <div className="App">{displayList}</div>;
  }
}

export default App;
