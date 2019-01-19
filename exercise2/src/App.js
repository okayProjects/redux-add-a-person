import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {
  state = ({ userInput: '' });

  inputChangeHandler = (e) => {
    this.setState({ userInput: e.target.value })
  }

  deleteLetterHandler = (index) => {
    const letters = this.state.userInput.split('');
    letters.splice(index, 1);
    const updatedLetters = letters.join('');
    this.setState({
      userInput: updatedLetters
    })
  }

  render() {
    const charList = this.state.userInput.split('').map((char, index) => {
      return <Char
        letter={char}
        key={index}
        delete={this.deleteLetterHandler.bind(this, index)} />
    })
    return (
      <div className="App">
        <hr />
        <hr />
        <hr />
        <input type='text' onChange={this.inputChangeHandler} value={this.state.userInput}></input>
        <p>{this.state.userInput}</p>
        <Validation inputLength={this.state.userInput.length} />
        {charList}
      </div>
    );
  }
}

export default App;
