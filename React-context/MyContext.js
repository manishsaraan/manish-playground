import React, { Component } from 'react';
const MyContext = React.createContext();
export class Wrapper extends Component {
  state = {
    viewer: null,
  }
  logIn = (viewer) => {
    this.setState({viewer});
  }
  LogOut = () => this.setState({ viewer: null });

  render(){
    return (
       <MyContext.Provider value={{
           viewer: this.state.viewer,
           logIn: this.logIn,
           LogOut: this.LogOut,
         }}>
        { this.props.children}
       </MyContext.Provider>
    );
  }
}

export const Consumer = MyContext.Consumer;
