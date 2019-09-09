import {render} from '@testing-library/react';
import * as React from 'react';
import '@testing-library/jest-dom/extend-expect';
import Transition from './index';

const setup = (props = { visible: true }) => {
  return (
    <Transition {...props}>
      <div>Hello, world!</div>
    </Transition>
  );
};

describe('Transition', () => {
  it('renders without error', () => {
    const { container, getByText } = render(setup());
    expect(getByText('Hello, world!')).toBeInTheDocument();
  });
  it('can accept `visible` props', () => {
    const { container, debug, queryByText } = render(setup({visible: false}));
    const usernameInput = queryByText('hello, world');
    expect(usernameInput).toBeNull();
  });
});