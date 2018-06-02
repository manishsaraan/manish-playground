import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  componentWillMount(){
    console.log('componentwillmout exicuted.');
  }

  componentDidMount(){
    console.log('componentdidmount');
  }

  componentWillReceiveProps(nextProps){
    console.log('componetwillrecieveprops',nextProps);
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log('should component updated', nextProps,nextState);
  }

  componentWillUpdate(nextProps, state){
    console.log('compnentwillupdate', nextProps, state);
  }

  componentDidUpdate(prevProps, prevState){
    console.log('componentdidUPdate', prevState, prevState);
  }

  componentWillUnmount(){
    console.log('component will unmount')
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
