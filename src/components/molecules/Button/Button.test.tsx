import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from './index';

describe('Button ' + 'component', () => {
  it('renders with provided label', () => {
    const { getByText } = render(<Button label="Test Button" />);
    expect(getByText('Test Button')).toBeInTheDocument();
  });

  it('fires onClick event when clicked', () => {
    const handleClick = jest.fn();

    const { getByText } = render(
      <Button label="Click Me" onClick={handleClick} />,
    );
    fireEvent.click(getByText('Click Me'));

    expect(handleClick).toHaveBeenCalled();
  });

  it('accepts additional class names', () => {
    const { container } = render(
      <Button label="Styled Button" className="bg-red-500" />,
    );
    expect(container.firstChild).toHaveClass('bg-red-500');
  });
});
