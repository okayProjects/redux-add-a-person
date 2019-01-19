import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {
  state = {
    persons: [{ id: 'eduoo', name: 'Kris', age: 43 },
    { id: 'fsdfd', name: 'Aneta', age: 44 },
    { id: 'trery', name: 'Franciszek', age: 13 },
    { id: 'mnkio', name: 'Iga', age: 7 }],

    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons;
    persons.splice(personIndex, 1);
    this.setState({
      persons: persons
    });
  }

  inputNameHandler = (e, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = e.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    });
  }

  togglePersonsHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    })
  }

  render() {
    const style = {
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      backgroundColor: 'white',
      cursor: 'pointer'
    }

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {
            this.state.persons.map((person, index) => {
              return <Person
                click={this.deletePersonHandler.bind(this, index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(e) => this.inputNameHandler(e, person.id)}
              />
            })
          }
        </div>)
    }
    return (
      <div className="App">
        <h1>Hello world</h1>
        <h2>I'm a React app</h2>
        <button style={style}
          onClick={this.togglePersonsHandler}>Toggle name list</button>
        {persons}
        {/* {this.state.showPersons ? <div>
          <Person name={this.state.persons[0].name} age={this.state.persons[0].age} changed={this.inputNameHandler}>My hobby is coding</Person>
          <Person name={this.state.persons[1].name} age={this.state.persons[1].age}></Person>
          <Person name={this.state.persons[2].name} age={this.state.persons[2].age}></Person>
          <Person name={this.state.persons[3].name} age={this.state.persons[3].age} click={() => this.changeNameHandler('Kristof')}></Person>
        </div> : null} */}
      </div>
    );
  }
}

export default App;
