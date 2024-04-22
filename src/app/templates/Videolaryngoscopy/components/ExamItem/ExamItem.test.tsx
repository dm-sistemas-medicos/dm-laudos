import "@testing-library/jest-dom";

import { fireEvent, render, screen } from "@testing-library/react";

import ExamItem from "./ExamItem";

describe("ExamItem component", () => {
  it("renders the component", () => {
    render(<ExamItem id="test-input" initialText="test initial text" />);

    const examItem = screen.getByTestId("test-input-container");

    expect(examItem).toBeInTheDocument();
  });

  it("renders the component with label", () => {
    render(
      <ExamItem
        id="test-input"
        initialText="test initial text"
        label="Test label"
      />
    );

    const textarea = screen.getByTestId("test-input");
    const label = screen.getByLabelText("Test label");

    expect(label).toBeInTheDocument();
    expect(textarea).not.toHaveClass("exam-item-double");
  });

  it("renders the component without label", () => {
    render(<ExamItem id="test-input" initialText="test initial text" />);

    const textarea = screen.getByTestId("test-input");

    expect(textarea).toHaveClass("exam-item-double");
  });

  it("renders the component with aria-label", () => {
    render(
      <ExamItem
        id="test-input"
        initialText="test initial text"
        ariaLabel="Test aria label"
      />
    );

    const textarea = screen.getByTestId("test-input");

    expect(textarea).toHaveAttribute("aria-label", "Test aria label");
  });

  it("renders the component with 3 rows", () => {
    render(
      <ExamItem
        id="test-input"
        initialText="test initial text"
        label="Test label"
        rows={3}
      />
    );

    const textarea = screen.getByTestId("test-input");

    expect(textarea).toHaveAttribute("rows", "3");
  });

  it("renders the component with default rows", () => {
    render(
      <ExamItem
        id="test-input"
        initialText="test initial text"
        label="Test label"
      />
    );

    const textarea = screen.getByTestId("test-input");

    expect(textarea).toHaveAttribute("rows", "1");
  });

  it("it should changes the value", () => {
    render(<ExamItem id="test-input" initialText="test initial text" />);

    const textarea = screen.getByTestId("test-input");

    fireEvent.change(textarea, { target: { value: "test text" } });

    expect(textarea).toHaveValue("test text");
  });
});
