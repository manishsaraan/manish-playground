import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
import Email from '../lib/email';

Enzyme.configure({ adapter: new Adapter() });

const handleEmailChange = () => {};
const fetchGravatar = () => {};
const props = {
  handleEmailChange,
  fetchGravatar,
};

describe('<Email/>', () => {
  const wrapper = shallow(<Email { ...props } />);

  it('should have input for the email', () => {
    expect(wrapper.find('input')).to.have.length(1);
  });

  it('should have a button', () => {
    expect(wrapper.find('button')).to.have.length(1);
  });

  it('should have a init state equal to test', () => {
    expect(wrapper.instance().state.init).to.equal('test');
  });

  it('should have a checkBoxChecked method with value true', () => {
    expect(wrapper.instance().checkBoxChecked()).to.equal(true);
  });

  it('should have a div with text "Enter Email"', () => {
    expect(wrapper.find('#email-text').text()).to.equal('Enter Email');
  });

  it('should have props for handleEmailChange and fetchGravatar', () => {
    const { handleEmailChange, fetchGravatar} = wrapper.instance().props;

    expect(typeof (handleEmailChange)).to.equal('function');
    expect(typeof (fetchGravatar)).to.equal('function');
  });

  it('should call updateGravatar once', () => {
    const onButtonClick = sinon.spy();
    const wrapperMock = shallow(<Email fetchGravatar={ onButtonClick } />);

    wrapperMock.find('button').simulate('click');
    expect(onButtonClick.calledOnce).to.equal(true);
  });
});
