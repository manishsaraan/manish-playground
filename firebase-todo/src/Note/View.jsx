import React, { Component } from 'react';
import './Note.css';
import PropTypes from 'prop-types';

class ViewNote extends React.PureComponent {
  render(){
      return(
          <div>{this.props.note.noteContent}</div>
      );
  }
}

export default ViewNote;
