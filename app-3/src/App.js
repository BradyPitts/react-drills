import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      data:['food','apple','banana','peach','utensil','fork','spoon','spork','knife'],
      searchInput: ''
    }
  }


  search(input){
    this.setState({searchInput: input})
  }


  render(){
    let searchDisplay = this.state.data.filter((key) => {
      return key.includes(this.state.searchInput)
    })
    .map ((key, ndx) =>{
      return <h2 key={ndx}>{key}</h2>;
    })
    return (
      <div className="App">
        <input onChange={(e) => this.search(e.target.value)} />
       {searchDisplay}
      </div>
    );
  }
}

export default App;