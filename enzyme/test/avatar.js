import React from 'react';
import { expect } from 'chai';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Avatar from '../lib/avatar';

Enzyme.configure({ adapter: new Adapter() });
const props = {
  email: 'test@gmail.com',
  src: 'someting@mail.com',
};

describe('<Avatar/>', () => {
  const wrapper = shallow(<Avatar { ...props } />);

  it('should have an image to display avatar ', () => {
    expect(wrapper.find('img')).to.have.length(1);
  });

  it('should have props for email and src', () => {
    const { email, src } = wrapper.instance().props;

    expect(email).to.equal(props.email);
    expect(src).to.equal(props.src);
  });
});
