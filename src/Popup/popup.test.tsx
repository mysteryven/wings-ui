import {render} from '@testing-library/react';
import * as React from 'react';
import '@testing-library/jest-dom/extend-expect';
import Popup from './index';

const setup = () => {
  return (
    <Popup>
      <div>Hello, world!</div>
    </Popup>
  );
};

describe('Transition', () => {
  it('renders without error', () => {
    const { container, getByText } = render(setup());
    expect(getByText('Hello, world!')).toBeInTheDocument();
  });
});