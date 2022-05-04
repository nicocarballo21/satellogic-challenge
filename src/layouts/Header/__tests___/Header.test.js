import { render, fireEvent } from '@testing-library/react';
import ThemeProvider from '../../../context/ThemeProvider';
import Header from '../Header';
import links from '../../../constants/Links';
import './matchMedia';

const Component = () => {
  return (
    <ThemeProvider>
      <Header />
    </ThemeProvider>
  );
};

describe('Header component', () => {
  test('renders without crashing', () => {
    const { container } = render(<Component />);
    expect(container.firstChild).toBeTruthy();
  });

  test('Renders the correct title', () => {
    const { getByTestId } = render(<Component />);
    const title = getByTestId('title');
    expect(title.textContent).toBe('Test');
  });

  test('Renders the correct links amount', () => {
    const { container } = render(<Component />);
    const linksInHeader = container.querySelectorAll('a');
    expect(linksInHeader.length).toBe(links.length);
  });

  test('Renders the correct theme', () => {
    const { getByTestId, container } = render(<Component />);
    const switchButton = getByTestId('theme-switch');
    fireEvent.click(switchButton);
    expect(container.querySelector('header')).toHaveStyle(
      'background-color: #1a1e22',
    );
    fireEvent.click(switchButton);
    expect(container.querySelector('header')).toHaveStyle(
      'background-color: #ffffff',
    );
  });
});
