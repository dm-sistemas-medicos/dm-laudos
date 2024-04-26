import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

import { ImagesProvider } from "./images-context";

describe("ImagesContext component", () => {
  it("renders the provider with children", () => {
    render(
      <ImagesProvider>
        <span>TEST TEXT</span>
      </ImagesProvider>
    );
    const testText = screen.getByText("TEST TEXT");

    expect(testText).toBeInTheDocument();
  });
});
