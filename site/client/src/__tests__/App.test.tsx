import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

describe('App.tsx', () => {
  it('renders learn react link', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText('Petri Miikki');
    expect(linkElement).toBeInTheDocument();
  });
});
