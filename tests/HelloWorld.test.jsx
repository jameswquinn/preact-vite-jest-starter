import { h } from 'preact';
import { render } from '@testing-library/preact';
import '@testing-library/jest-dom';
import { HelloWorld } from '../src/components/HelloWorld';

describe('HelloWorld Component', () => {
  it('renders Hello, World!', () => {
    const { getByText } = render(<HelloWorld />);
    expect(getByText('Hello, World!')).toBeInTheDocument();
  });
});
