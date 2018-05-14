import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import md5 from 'md5';
import Adapter from 'enzyme-adapter-react-16';
import Gravatar from '../lib/gravatar';
import Avatar from '../lib/avatar';
import Email from '../lib/email';
import List from '../lib/list';

Enzyme.configure({ adapter: new Adapter() });

describe('<Gravatar/>', () => {
    const wrapper = shallow(<Gravatar/>);

    it('it contains a <Avatar/> component', () => {

       expect(wrapper.find(Avatar)).to.have.length(1);
    });

    it('it contains a <Email/> component', () => {

       expect(wrapper.find(Email)).to.have.length(1);
    });

    it('it contains email input field', () => {

      expect(wrapper.find(Email).dive().find('input')).to.have.length(1);
    });

    it('it contains email input field', () => {

      expect(wrapper.find(Email).dive().find('input')).to.have.length(1);
    });

    it('it contains List component', () => {
      const wrapperMount = mount(<Gravatar/>);

      expect(wrapperMount.find('#list li')).to.have.length(2);
    });

    it('should have props for handleEmailChange and fetchGravatar', () => {
      const { handleEmailChange, fetchGravatar} = wrapper.find(Email).dive().instance().props;

      expect(typeof (handleEmailChange)).to.equal('function');
      expect(typeof (fetchGravatar)).to.equal('function');
    });

    it('should have an initial email state', () => {

        expect(wrapper.state().email).to.equal('someone@example.com');
    });

    it('should have an initial src state', () => {

        expect(wrapper.state().src).to.equal('http://placehold.it/200x200');
    });

    it('should update the src on clicking the fetch', () => {
        const wrapperMount = mount(<Gravatar/>);

        wrapperMount.setState({email: 'hello@mail.com'});
        wrapperMount.find('button').simulate('click');
        expect(wrapperMount.state('email')).to.equal('hello@mail.com');
        expect(wrapperMount.state('src')).to.equal(`http://gravatar.com/avatar/${md5('hello@mail.com')}?s=200`)
    });
});
