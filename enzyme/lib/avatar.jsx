import React from 'react';
import PropTypes from 'prop-types';

export default class Avatar extends React.PureComponent {
  static propTypes = {
    email: PropTypes.string,
    src: PropTypes.string,
  };

  render() {
    return (
      <div className="avatar">
        <p>
          <em>{this.props.email}</em>
        </p>
        <img src={ this.props.src } className="img-rounded" />
      </div>
    );
  }
}
