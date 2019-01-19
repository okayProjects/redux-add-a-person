import React from 'react';
import Person from './Person/Person';

const persons = (props) => props.persons.map((person, index) => {
    return <Person
        name={person.name}
        age={person.age}
        key={person.key}
        deleteClick={() => props.deleted(index)}
        typeInput={(e) => { props.changed(e, person.key) }} />
})

export default persons;