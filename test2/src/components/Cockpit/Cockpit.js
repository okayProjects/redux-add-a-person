import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
    const classesAssigned = [];
    let btnClass = classes.toggle;

    if (props.showList) {
        btnClass = classes.red;
    }

    if (props.persons <= 2) {
        classesAssigned.push(classes.red)
    }
    if (props.persons <= 1) {
        classesAssigned.push(classes.bold)
    }
    if (!props.showList) {
        classesAssigned.push(classes.none)
    }

    return (<div className={classes.Cockpit}>
        <h1>My Family List</h1>
        <p className={classesAssigned.join(' ')}>My family contains {props.persons} members</p>
        <button className={btnClass} onClick={props.clicked}>Toggle Name List.
        </button>
    </div>

    )
}

export default cockpit;