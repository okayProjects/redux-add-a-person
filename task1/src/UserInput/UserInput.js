import React from 'react';


const userInput = (props) => {
    const style = {
        border: '2px solid blue',
        marginTop: '50px',
        padding: '10px',
        textAlign: 'center',
        fontSize: '20px',
        color: 'blue'
    }
    return <input type='text' style={style}
        onChange={props.nameChanged}
        value={props.currentName} />
}

export default userInput;