import React, { Component, Fragment } from 'react';
import ToggleRPC from './toggleRPC';
import Portal from './Portal';
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
                { on && <Portal> <p>hi  i a m a</p> </Portal> }
              </Fragment>
           )
         }
       </ToggleRPC>
      </div>
    );
  }
}

export default App;
