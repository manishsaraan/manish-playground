import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Wrapper, Consumer } from './MyContext';

const Nav = () => (<LoginForm />);

class LoginForm extends Component {
  render(){
     return <Consumer>
            {(value) => {
              const { viewer, logIn, LogOut } = value;
              return viewer ?
                      (
                        <React.Fragment>
                                    <h3>Logged in as : { viewer}</h3>
                                    <button type="button" onClick={LogOut}>LogOut</button>
                        </React.Fragment>

                      ):
                      (
                        <React.Fragment>
                          <input placeholder="Name Please"  ref={r => this.inputRef = r}/>
                          <button type="submit" onClick={ () => {
                            logIn(this.inputRef.value)
                            } }>Log in</button>
                        </React.Fragment>
                      )
            }}
            </Consumer>

  }
}

class App extends Component {

  render() {
    return (
      <Wrapper>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <Consumer>
              {({viewer}) => (
                    <h1 className="App-title">{ viewer ? `Welcome ${viewer}`: `Please Login`}</h1>
              )}
            </Consumer>
          </header>
          <p className="App-intro">
            <Nav/>
          </p>
        </div>
      </Wrapper>
    );
  }
}

export default App;
