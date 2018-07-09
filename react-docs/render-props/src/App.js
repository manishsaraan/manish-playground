import React, { Component, Fragment } from 'react';
import ToggleRPC from './toggleRPC';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <ToggleRPC>
         {
           ({on, toggle}) => (
              <Fragment>
                <h1>{ on && <h1>Hello there!!!</h1>}</h1>
                <button onClick={toggle}>show/hide</button>
              </Fragment>
           )
         }
       </ToggleRPC>
      </div>
    );
  }
}

export default App;
