import { render } from '@testing-library/react';
import { Button } from "../../ui/Button";

describe('Button Component', () => {
  test('renders with default props', () => {
    const { container } = render(<Button>Hello</Button>);
    expect(container).toMatchSnapshot();
  });

  test('renders with specified variant and size', () => {
    const { container } = render(
      <Button variant="destructive" size="lg">
        Delete
      </Button>
    );
    expect(container).toMatchSnapshot();
  });

  test('renders as a child component', () => {
    const { container } = render(
      <Button asChild variant="outline" size="sm">
        <div>Child Content</div>
      </Button>
    );
    expect(container).toMatchSnapshot();
  });

  test('applies custom className', () => {
    const { container } = render(
      <Button className="custom-class">Custom Button</Button>
    );
    expect(container).toMatchSnapshot();
  });
});
