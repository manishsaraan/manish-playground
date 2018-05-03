import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import md5 from 'md5';
import Gravatar from '../lib/gravatar';
import Avatar from '../lib/avatar';
import Email from '../lib/email';

describe('<Gravatar/>', () => {
    it('it contains a <Avatar/>', () => {
       const wrapper = mount(<Gravatar/>);
       expect(wrapper.find(Avatar)).to.have.length(1);
    });
    
})