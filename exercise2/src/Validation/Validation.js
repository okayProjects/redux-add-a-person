import React from 'react';

const validation = (props) => {
    let text = null
    if (props.inputLength > 5) {
        text = 'Text long enough'
    } else if (props.inputLength > 0) {
        text = 'Text too short'
    }
    return (
        <p>{text}</p>
    )
}


export default validation;