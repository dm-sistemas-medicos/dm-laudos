import "@testing-library/jest-dom";

import { fireEvent, render, screen } from "@testing-library/react";

import TextInput from "./TextInput";

describe("TextInput component", () => {
  it("renders the component", () => {
    render(<TextInput id="test-input" label="Test label" />);

    const textInput = screen.getByTestId("test-input-container");

    expect(textInput).toBeInTheDocument();
  });

  it("renders the component with double-container class", () => {
    render(
      <TextInput id="test-input" label="Test label" hasDoubleContainer={true} />
    );

    const textInput = screen.getByTestId("test-input-container");

    expect(textInput).toHaveClass("double-container");
  });

  it("renders the component with small-input class", () => {
    render(
      <TextInput id="test-input" label="Test label" isSmallInput={true} />
    );

    const input = screen.getByTestId("test-input");

    expect(input).toHaveClass("small-input");
  });

  it("it should changes the value", () => {
    render(<TextInput id="test-input" label="Test label" />);

    const input = screen.getByTestId("test-input");

    fireEvent.change(input, { target: { value: "test text" } });

    expect(input).toHaveValue("test text");
  });

  it("renders the component with initialInfo", () => {
    render(
      <TextInput
        id="test-input"
        label="Test label"
        initialInfo="Test initial info"
      />
    );

    const input = screen.getByTestId("test-input");

    expect(input).toHaveValue("Test initial info");
  });
});
