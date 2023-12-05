import { render } from '@testing-library/react';
import { Input } from "../../ui/Input";
import  "@testing-library/jest-dom"
import React from 'react';

describe('code snippet', () => {

    it('should render an input element with the provided type and props', () => {
      const { container } = render(<Input type="text" placeholder="Enter text" />)
      const inputElement = container.querySelector('input')

      expect(inputElement).toBeInTheDocument()
      expect(inputElement).toHaveAttribute('type', 'text')
      expect(inputElement).toHaveAttribute('placeholder', 'Enter text')
    })

    it('should apply the provided className to the input element', () => {
      const { container } = render(<Input className="custom-class" />)
      const inputElement = container.querySelector('input')

      expect(inputElement).toHaveClass('custom-class')
    })

    it('should set the ref of the input element to the provided ref', () => {
      const ref = React.createRef<HTMLInputElement>()
      render(<Input ref={ref} />)
      const inputElement = ref.current

      expect(inputElement).toBeInTheDocument()
      expect(inputElement).toBeInstanceOf(HTMLInputElement)
    })

    it('should render an input element with no type specified', () => {
      const { container } = render(<Input />)
      const inputElement = container.querySelector('input')

      expect(inputElement).toBeInTheDocument()
      expect(inputElement).not.toHaveAttribute('type')
    })

    it('should render an input element with no props specified', () => {
      const { container } = render(<Input />)
      const inputElement = container.querySelector('input')

      expect(inputElement).toBeInTheDocument()
      expect(inputElement).not.toHaveAttribute('className')
    })

    it('should render an input element with an invalid type specified', () => {
      const { container } = render(<Input type="invalid" />)
      const inputElement = container.querySelector('input')

      expect(inputElement).toBeInTheDocument()
      expect(inputElement).toHaveAttribute('type', 'invalid')
    })
});
