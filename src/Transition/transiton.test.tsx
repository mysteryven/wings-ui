import * as React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from '../utils/testUtils';
import Transition from './index';

const setup = (props = {}) => {
  return shallow(<Transition {...props} />);
};

describe('Button', () => {
  it('renders without error', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'w-transition');
    expect(component.length).toBe(1);
  });
})