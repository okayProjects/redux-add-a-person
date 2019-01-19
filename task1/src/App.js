import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';


class App extends Component {
  state = {
    userName: 'Kris'
  }

  nameChange = (e) => {
    this.setState({
      userName: e.target.value
    })
  }


  render() {
    return (
      <div className="App">
        <UserInput nameChanged={this.nameChange} currentName={this.state.userName}></UserInput>
        <UserOutput userName={this.state.userName}></UserOutput>
        <UserOutput userName={this.state.userName}></UserOutput>
        <UserOutput userName={this.state.userName}></UserOutput>
        <UserOutput userName={this.state.userName}></UserOutput>

      </div>
    );
  }
}

export default App;
