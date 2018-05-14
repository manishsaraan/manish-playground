import React from 'react';
import PropTypes from 'prop-types';

export default class Email extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      init: 'test',
    };
  }

  static propTypes = {
    handleEmailChange: PropTypes.func,
    fetchGravatar: PropTypes.func,
  };

  checkBoxChecked() {
    return true;
  }

  render() {
    return (
      <div className="form-group">
        <div id="email-text">Enter Email</div>
        <input
          onChange={ this.props.handleEmailChange }
          className="form-control"
          style={ {
            width: 200,
          } }
          type="text"
        />
        <button onClick={ this.props.fetchGravatar } className="btn-success btn ">Fetch</button>
      </div>
    );
  }
}
