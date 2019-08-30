import * as React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from '../utils/testUtils';
import Icon from './index';

const setup = (props = {}) => {
  return shallow(<Icon {...props} />);
};

describe('Icon', () => {
  it('renders without error', () => {
    const wrapper = setup({
      name: 'loading'
    });
    const component = findByTestAttr(wrapper, 'w-svg');
    console.log(component);
    expect(component.length).toBe(1);
  });
  it('can accept `name` props', () => {
    const name = 'loading';
    const wrapper = setup({
      name,
    });
    const component = wrapper.find(`[xlinkHref="#${name}"]`);
    expect(component.length).toBe(1);
  });
  it('can accept `className` props', () => {
    const wrapper = setup({
      className: 'test--'
    });
    const component = findByTestAttr(wrapper, 'test--');
    expect(component.length).toBe(1);
  })
});