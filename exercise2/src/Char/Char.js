import React from 'react';

const char = (props) => {
    const style = {
        padding: '16px',
        display: 'inline-block',
        margin: '16px',
        border: '2px solid grey',
        cursor: 'pointer'
    }
    return (<div style={style} onClick={props.delete}>
        <p>{props.letter}</p>
    </div>)
}

export default char;