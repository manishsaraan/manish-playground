import React, { Component } from 'react';

class BuggyCounter extends Component {
   state = {
       couter: 0
   }

   handleClick = () => {
       this.setState({couter: this.state.couter + 1});
   }

   render(){
    //    if(this.state.couter ===5){
          return ({sdfsdfsdf})
    //    }
    //    return(
    //        <h1 onClick={this.handleClick}>{this.state.couter}</h1>
    //    );
   }
}

export default BuggyCounter;