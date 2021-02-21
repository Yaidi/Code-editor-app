import React from 'react';
import Button from '../../src/components/Button';

// test suite
describe('test suite for login view', () => {
  // test cases
  test('the button has to have a text', () => {
    const { container } = render(<Button />);
    expect(container.querySelector('.button-google')).toHaveTextContent(
      'google'
    );
  });
});
