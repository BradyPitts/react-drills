import React , {Component} from 'react';
import './App.css';



class App extends Component {
  constructor(){
    super();

    this.state = {
      userInput: '',
    }
  }

  readInput(val){
    this.setState({userInput: val})
  }

  render(){
    return (
      <div className="App">
        <input onChange={ (e) => this.readInput(e.target.value)} />
        {/* <button onClick={readInput} /> */}
        <span>{JSON.stringify(this.state.userInput)}</span> 
      </div>
    );
  }
}

export default App;
