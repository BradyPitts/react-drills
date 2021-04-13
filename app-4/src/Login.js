import React, { Component } from 'react';
import './App.css';

class Login extends Component {
  constructor(){
    super();

    this.state = {
      userName: '',
      passWord: '',
      
    }
  }

  readUsername = (name) =>{
    this.setState({userName: name})
    console.log(`${this.state.userName}`)
  }

  readPassword = (word) =>{
    this.setState({passWord: word})
    console.log(`${this.state.passWord}`)
  }

  logIn = (userName, passWord) =>{
    console.log('ive been clicked')
    alert(
      `User Name ${userName} \nPassword ${passWord}`
    )
  }

  render(){
    return (
      <div className="App">
        <input type='text' placeholder='user name' onChange={(e) => this.readUsername(e.target.value)} />
        <br />
        <input type='text' placeholder='password' onChange={(e) => this.readPassword(e.target.value)} />
        <br />
        <button onClick={() => {this.logIn(this.state.userName, this.state.passWord)}}>Log In</button>
      </div>
    );
  }
}

export default Login;
