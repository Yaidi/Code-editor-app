import React from 'react';
import { render } from '@testing-library/react';
import Login from '../../views/Login';

describe('test suite for login view', () => {
  test('button with image of google exist', () => {
    const { container } = render(<Login />);
    expect(container.querySelector('g-signin2')).toBeInTheDOM();
  });
});
