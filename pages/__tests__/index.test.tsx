import React from 'react';
import { mount } from 'enzyme';
import Index from '../index';

describe('Index page', () => {
  it('should have Index component', () => {
    const subject = mount(<Index />);

    expect(subject.find('Index')).toHaveLength(1);
  });
});
