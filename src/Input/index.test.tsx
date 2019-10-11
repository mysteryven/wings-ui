import * as React from 'react';
import {shallow} from 'enzyme';
import {findByTestAttr} from "../utils/testUtils";
import Input from './index';

const setup = (props = {}) => {
  return shallow(<Input {...props}/>);
};


describe('Input', () => {
  it('renders without error', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'w-input');
    expect(component.length).toBe(1);
  });
  it('can received `className`', () => {
    const className = 'text-className';
    const wrapper = setup({className});
    const component = findByTestAttr(wrapper, className);
    expect(component.length).toBe(1);
  });
});
