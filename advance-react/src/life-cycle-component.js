import React, { Component } from 'react';

class LifeCycleMethods extends Component {
    componentWillMount() {
        console.log('componentwillmout1234 exicuted.');
    }

    componentDidMount() {
        console.log('componentdidmount');
    }

    componentWillReceiveProps(nextProps) {
        console.log('componetwillrecieveprops', nextProps);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('should component updated', nextProps, nextState);
        return true;
    }

    componentWillUpdate(nextProps, state) {
        console.log('compnentwillupdate', nextProps, state);
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentdidUPdate', prevState, prevState);
    }

    componentWillUnmount() {
        console.log('component will unmount')
    }
  render(){
      return(
          <div>Total Clicks : {this.props.clicks}</div>
      );
  }
}

export default LifeCycleMethods;