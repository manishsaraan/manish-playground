import React, { Component, Fragment } from 'react';
import ToggleRPS from './ToggleRPS';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <ToggleRPS render={({on, toggle}) => (
         <Fragment>
          <h1>{ on && <h1>Hello there!!!</h1>}</h1>
          <button onClick={toggle}>show/hide</button>
         </Fragment>
         )} />
         <ToggleRPS render={({on, toggle}) => (
            <Fragment>
              <h1>{ on && <nav>navi</nav>}</h1>
              <button onClick={toggle}>menu</button>
            </Fragment>
         )} />
      </div>
    );
  }
}

export default App;
