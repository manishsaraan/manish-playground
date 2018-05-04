import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import md5 from 'md5';
import Gravatar from '../lib/gravatar';
import Avatar from '../lib/avatar';
import Email from '../lib/email';
import { wrap } from 'module';

describe('<Gravatar/>', () => {
    const wrapper = mount(<Gravatar/>);

    it('it contains a <Avatar/> component', () => {
      
       expect(wrapper.find(Avatar)).to.have.length(1);
    });

    it('it contains a <Email/> component', () => {
      
       expect(wrapper.find(Email)).to.have.length(1);
    });

    it('should have an initial email state', () => {
        
        expect(wrapper.state().email).to.equal('someone@example.com');
    });

    it('should have an initial src state', () => {

        expect(wrapper.state().src).to.equal('http://placehold.it/200x200');
    });

    it('should update the src on clicking the fetch', () => {
        wrapper.setState({email: 'hello@mail.com'});
        wrapper.find('button').simulate('click');
        expect(wrapper.state('email')).to.equal('hello@mail.com');
        expect(wrapper.state('src')).to.equal(`http://gravatar.com/avatar/${md5('hello@mail.com')}?s=200`)        
    });
});