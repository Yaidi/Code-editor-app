import React from 'react';
import { render } from '@testing-library/react';
import Login from '../../src/views/Login';

// test suite
describe('test suite for login view', () => {
  // test cases
  test('button with image of google exist', () => {
      const { container } = render(<Login/>);
    expect(container.querySelector('.button-google')).toBeInTheDocument();
  });
});
