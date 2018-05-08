import React from 'react';
import md5 from 'md5';
import Avatar from './avatar';
import Email from './email';
import List from './list';

const Test = () => (<li>Hellow</li>);

export default class Gravatar extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      email: 'someone@example.com',
      src: 'http://placehold.it/200x200',
    };
  }

  updateGravatar() {
    this.setState({
      src: `http://gravatar.com/avatar/${md5(this.state.email)}?s=200`,
    });
  }

  updateEmail(event) {
    this.setState({ email: event.target.value });
  }

  render() {
    const { email, src } = this.state;
    const staticData = [ {
      component: <Test />,
    },
    {
      component: <Test />,
    }
  ];

    return (
      <div className="react-gravatar">
        <h4>Avatar for:</h4>
        <Avatar email={ email } src={ src } />
        <Email fetchGravatar={ this.updateGravatar.bind(this) } handleEmailChange={ this.updateEmail.bind(this) } />
        <ul id="list">
          <List list={ staticData } />
        </ul>
      </div>
    );
  }
}
