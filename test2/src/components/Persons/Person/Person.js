import React from 'react';
import PropTypes from 'prop-types';
import classes from './Person.css';
// import Radium from 'radium';

const person = (props) => {

    // const style = {
    //     '@media (min-width: 500px)': {
    //         width: '450px'
    //     }
    // }

    return (
        <div className={classes.Person} >
            <p>My name is {props.name} and I am {props.age} years old</p>
            <input type='text' onChange={props.typeInput} value={props.name}></input>
            <button onClick={props.deleteClick} className={classes.Button} >Delete</button>
        </div>

    )
}

person.propTypes = {
    typeInput: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    deleteClick: PropTypes.func
}

export default person;