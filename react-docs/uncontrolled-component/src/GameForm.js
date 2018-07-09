import React, { Component } from 'react';

class GameForm extends Component {
    constructor(props){
        super(props);
        this.title = React.createRef();
        this.own = React.createRef();
    }

    handleSubmit = (event) => {
       event.preventDefault();
       console.log(this.title.current.value);
       console.log(this.own.current.checked);
    }

    render(){
        return(
          <div>
              <form onSubmit={this.handleSubmit}>
                  <input
                    placeholder="title"
                    ref={this.title}
                  />
                  <label>
                    <input
                    type="checkbox"
                    ref={this.own}
                    />
                  </label>
                  <button type="submit">Save</button>
              </form>
          </div>
        );
    }
}

export default GameForm;