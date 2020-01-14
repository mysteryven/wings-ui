import { render } from '@testing-library/react';
import * as React from 'react';
import '@testing-library/jest-dom/extend-expect';
import Popup from './index';

const setup = (props = {}) => {
  return (
   <div/>
  );
};

describe('Popup', () => {
  it('renders without error', () => {
    const { container, getByText } = render(setup({ visible: true }));
    expect(getByText('Hello, world!')).toBeInTheDocument();
  });
  it('default not show in the dom', () => {
    const { container, queryByText } = render(setup());
    const usernameInput = queryByText('hello, world');
    expect(usernameInput).toBeNull();
  });
  it('can accept `position` props', () => {
    const { container, getByTestId } = render(setup({ visible: true, position: 'left' }));
    const ele = getByTestId('left')
    expect(ele).not.toBeNull();
  });
  it('default position is bottom', () => {
    const { container, getByTestId } = render(setup({ visible: true }));
    const ele = getByTestId('bottom')
    expect(ele).not.toBeNull();
  });
});