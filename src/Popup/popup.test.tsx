import * as React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from '../utils/testUtils';
import Popup from './index';

const setup = (props = {}) => {
  return shallow(<Popup {...props} />);
};

describe('Button', () => {
  it('renders without error', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'w-popup');
    expect(component.length).toBe(0);
  });
});