import React, { Component } from 'react';

export default class ToggleRPC extends Component {
  state = {
      on: false,
  }

  callback = (err, data) => {
      console.log(err,'-----------slack invitation---------',data);

  }
  toggle = () =>   this.setState({on: !this.state.on});

  render(){
      const { children } = this.props;

      return children({
                  on: this.state.on,
                  toggle: this.toggle,
      })
  }
}
