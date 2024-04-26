import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

import Preview from "./Preview";

describe("Preview component", () => {
  it("renders the component", () => {
    render(<Preview aside={true} maxAsideImages={3} />);

    const preview = screen.getByTestId("preview-container");

    expect(preview).toBeInTheDocument();
  });
});
