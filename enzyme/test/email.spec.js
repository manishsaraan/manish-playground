import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import Email from '../lib/email';

describe('<Email/>', () => {
  const wrapper = shallow(<Email/>);

  it('should have input for the email', () => {
      expect(wrapper.find('input')).to.have.length(1);
  });

  it('should have a button', () => {
      expect(wrapper.find('button')).to.have.length(1);
  });

  it('should have props for handleEmailChange and fetchGravatar', () => {
      expect(wrapper.props().handleEmailChange).to.be.defined;
      expect(wrapper.props().fetchGravatar).to.be.defined;
  });

  it('should call updateGravatar once', () => {
    const onButtonClick = sinon.spy();
    const wrapper = shallow(<Email fetchGravatar={onButtonClick} />)
    wrapper.find('button').simulate('click');  
    expect(onButtonClick.calledOnce).to.equal(true);
  });

});