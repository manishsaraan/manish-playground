//@flow
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

type funcComponentProps = {
  str: string,
}

const funcComponent = (props: funcComponentProps) => {
  return (<div>props.str</div>)
}


type TestProps = {
  str: string,
  num?: number,
  ary: Array<number>
};

type TestState = {
  message: string,
}

class Test extends Component<TestProps, TestState> {
  state = {
    message: 'hi'
  }

  static defaultProps = {
    str: 'tech'
  }
  h1:?HTMLHeadingElement;

  render() {
    return (
      <div>
       <h1>{ this.props.str }</h1>
       <h1>{ this.props.ary.map(val => val) }</h1>
       <h1 ref={ h1 => this.h1 = h1}>{ this.state.message }</h1>
       <funcComponent  str="test" />
      </div>
    );
  }
}

class App extends Component<{}> {
  render() {
    return (
      <div className="App">
       <Test
         str={'test'}
         ary={[1, 2, 3]}
       />
      </div>
    );
  }
}

export default App;
