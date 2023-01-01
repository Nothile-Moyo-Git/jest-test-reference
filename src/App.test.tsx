import { render, screen } from '@testing-library/react';
import App from './App';

// We use a describe keyword in order to define the name for the test suite
// We can define as many tests as we like inside of it
// A get method fails the test if it returns nothing, a query returns null and a fetch creates a promise over 1 second
describe('Check for learn react link', () => {

  // Check if the "learn react" text exists
  test('renders learn react link', () => {

    // Render our test component in the virtual DOM
    render(<App />);

    // Check if the text exists or fail the test
    const linkElement = screen.getByText(/learn react/i);

    // Perform our text
    expect(linkElement).toBeInTheDocument();
  });
  
});


