import React from "react";
import { render } from "@testing-library/react";
import { Label } from "@/components/ui/Label";

describe("Label Component", () => {
  test("renders label with default props", () => {
    const { container } = render(<Label>Test Label</Label>);
    expect(container).toMatchSnapshot();
  });

  test("renders label with custom className", () => {
    const { container } = render(<Label className="custom-class">Custom Label</Label>);
    expect(container).toMatchSnapshot();
  });

});
