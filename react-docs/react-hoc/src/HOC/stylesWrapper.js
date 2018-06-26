import React from 'react';
import commonStyles from '../styles/commonStyles';

const translateProps =  (props) => {
    console.log('---------propsin styels', props);
  let _styles = { ...commonStyles.default };

    if(props.disable){
        _styles = { ..._styles, ...commonStyles.disable };
    }

    const newProps = { ...props, styles: _styles };
    return newProps;
}

export default (wrappedComponent) => {
    console.log('--------wrappedComponent----------',wrappedComponent);
    return function dsfdsfsdfdf(args){
        return wrappedComponent(translateProps(args));
    }
}
