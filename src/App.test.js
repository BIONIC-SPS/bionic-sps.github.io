import { render, screen } from '@testing-library/react';
import App from './App';

test('renders BIONIC title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Biohybrid Intelligence for Next-generation Innovative Computing/i);
  expect(titleElement).toBeInTheDocument();
});
