import React from 'react';
import { render } from '@testing-library/react';
import Login from '../../views/Login';

// test suite
describe('test suite for login view', () => {
  // test
  test('button with image of google exist', () => {
    const { container } = render(<Login />);
    expect(container.querySelector('g-signin2')).toBeInTheDOM();
  });
});
