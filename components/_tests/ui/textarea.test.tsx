import '@testing-library/jest-dom';
import { Textarea } from "@/components/ui/Textarea";
import { render } from "@testing-library/react";

it('should render a textarea element with default styles and attributes', () => {
    const { container } = render(<Textarea />);
    const textarea = container.querySelector('textarea');

    expect(textarea).toBeInTheDocument();
    expect(textarea).toHaveClass('flex min-h-[80px] w-full rounded-md border border-slate-200 border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300');
  });

  it('should pass down all other props to the textarea element', () => {
    const { container } = render(<Textarea id="my-textarea" name="my-textarea" />);
    const textarea = container.querySelector('textarea');

    expect(textarea).toHaveAttribute('id', 'my-textarea');
    expect(textarea).toHaveAttribute('name', 'my-textarea');
  });

  it('should render a disabled textarea element when disabled prop is true', () => {
    const { container } = render(<Textarea disabled />);
    const textarea = container.querySelector('textarea');

    expect(textarea).toBeDisabled();
  });

  it('should render a textarea element with placeholder text when placeholder prop is provided', () => {
    const { container } = render(<Textarea placeholder="Enter text" />);
    const textarea = container.querySelector('textarea');

    expect(textarea).toHaveAttribute('placeholder', 'Enter text');
  });