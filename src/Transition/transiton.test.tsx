import * as React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from '../utils/testUtils';
import Transition from './index';

const setup = (props = {visible: true}) => {
  return shallow(<Transition {...props}><div>Hello</div></Transition>);
};

/**
 * enzyme can't test useEffect
 */
describe('Transition', () => {
  it('renders without error', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'w-transition');
    expect(component.length).toBe(1);
  });
});