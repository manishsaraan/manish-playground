import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.input = React.createRef();
  }

  handleSubmit = () => {
    console.log(this.input.current.value);
  }
  render() {
    return (
      React.createElement('div',
      { className: 'App', style: { color: 'red'} },
       React.createElement(
         'header',
         { className: 'App-header' },
          React.createElement(
            'img',
            {src: logo, className: 'App-logo', alt: 'logo'},
            null
          ),
          React.createElement(
            'h1',
            {className:'App-title'},
            'Welcome to React'
          )
       ),
       React.createElement(
         'p',
         {className: 'App-intro'},
         `To get Started, edit <code>src/App.js</code> and save to reload`
       ),
       React.createElement(
         'form',
         null,
         React.createElement(
           'input',
           {type:'text', placeholder: 'hello world', ref:  this.input },
           null),
         React.createElement(
           'button',
           {type:'button', onClick: this.handleSubmit},
           'Submit'
         )
       )
      )
    );
  }
}

export default App;
