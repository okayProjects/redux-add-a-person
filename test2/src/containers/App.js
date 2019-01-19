import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

// import Radium, { StyleRoot } from 'radium';

class App extends Component {
  state = {
    persons: [
      { key: 'ujm', name: 'Kris', age: 43 },
      { key: 'tgb', name: 'Aneta', age: 43.5 },
      { key: 'edc', name: 'Franciszek', age: 13 },
      { key: 'plc', name: 'Iga', age: 7 }
    ],
    showList: false,
    toggleClicked: 0
  }

  showNameListHandler = () => {
    const listShown = this.state.showList;
    this.setState((prevState, props) => {
      return {
        showList: !listShown,
        toggleClicked: prevState.toggleClicked + 1
      }
    })
  }


  deletePersonHandler = (index) => {
    const persons = [...this.state.persons];
    persons.splice(index, 1)
    this.setState({
      persons: persons
    })
  }

  // changeNameInputHandler = (e, index) => {
  //   const persons = [...this.state.persons];
  //   persons[index].name = e.target.value;
  //   this.setState({ persons: persons })
  // }

  changeNameInputHandler = (e, id) => {
    const inputId = this.state.persons.findIndex(p => p.key === id);
    const persons = [...this.state.persons];
    persons[inputId].name = e.target.value;
    this.setState({
      persons: persons
    })
  }

  render() {

    let persons = null;
    if (this.state.showList) {
      persons = <Persons
        persons={this.state.persons}
        deleted={this.deletePersonHandler}
        changed={this.changeNameInputHandler} />
    }
    return (
      <div className={classes.App}>
        <Cockpit persons={this.state.persons.length}
          showList={this.state.showList}
          clicked={this.showNameListHandler}
        />
        {persons}

      </div>
    )
  }
}

export default App;
