import { render, fireEvent, screen } from '../../test-utils'

import App from './App';

test('renders the app', () => {
  render(<App />);
  screen.debug();
  //const linkElement = screen.getByText(/learn react/i);
  //expect(linkElement).toBeInTheDocument();
});
