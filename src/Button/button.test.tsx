import * as React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from '../utils/testUtils';
import Button from './index';

const setup = (props = {}) => {
  return shallow(<Button {...props} />);
};

describe('Button', () => {
  it('renders without error', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'w-button');
    expect(component.length).toBe(1);
  });
  it('can accept `className` props', () => {
    const wrapper = setup({
      className: 'test--'
    });
    const component = findByTestAttr(wrapper, 'test--');
    expect(component.length).toBe(1);
  })
  it('can accept `theme` props', () => {
    const type = 'primary'
    const wrapper = setup({
      theme: type
    });
    const component = findByTestAttr(wrapper, type);
    expect(component.length).toBe(1);
  })
  it('default theme is `default`', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'default');
    expect(component.length).toBe(1);
  })
  it('can handle `onClick`', () => {
    const fn = jest.fn();
    const wrapper = setup({
      onClick: fn
    })
    const Button = findByTestAttr(wrapper, 'w-button');
    Button.simulate('click', {
      preventDefault() { }
    })
    expect(fn.mock.calls.length).toBe(1);
  })
  it('can accept `disabled` props', () => {
    const wrapper = setup({
      disabled: true
    });
    const component = findByTestAttr(wrapper, 'w-disabled');
    expect(component.length).toBe(1);
  })
  it('canot handle onClick when disabled', () => {
    const fn = jest.fn();
    const wrapper = setup({
      disabled: true,
      onClick: fn
    })
    const Button = findByTestAttr(wrapper, 'w-button');
    Button.simulate('click', {
      preventDefault() { }
    })
    expect(fn.mock.calls.length).toBe(0);
  })
});