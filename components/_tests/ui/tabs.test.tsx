import '@testing-library/jest-dom';
import { Tabs } from '@/components/ui/Tabs';
import { render } from '@testing-library/react';


it('should render a list of tabs with default styles and behavior', () => {

    const { container } = render(<Tabs />);

    expect(container.firstChild).toBeInTheDocument();
  });


 