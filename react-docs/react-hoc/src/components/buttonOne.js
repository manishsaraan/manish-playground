import React from 'react';
import stylesWrapper from '../HOC/stylesWrapper';
console.log('----------stylesdcomp', stylesWrapper)
const ButtonOne = (props) => {
     console.log('-----button',props);
    return (<button style={props.styles}>I am a button 1</button>);
}

export default stylesWrapper(ButtonOne);
