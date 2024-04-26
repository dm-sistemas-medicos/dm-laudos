import "@testing-library/jest-dom";

import { fireEvent, render, screen } from "@testing-library/react";

import Comments from "./Comments";

describe("Comments component", () => {
  it("renders the component", () => {
    render(<Comments />);

    const comments = screen.getByTestId("comments-container");

    expect(comments).toBeInTheDocument();
  });

  it("renders the component with the correct placeholder", () => {
    render(<Comments />);

    const textarea = screen.getByPlaceholderText("Observações");

    expect(textarea).toBeInTheDocument();
  });

  it("should changes the value", () => {
    render(<Comments />);

    const textarea = screen.getByPlaceholderText("Observações");

    fireEvent.change(textarea, { target: { value: "test text" } });

    expect(textarea).toHaveValue("test text");
  });

  it("should have the correct style classes", () => {
    render(<Comments parentId="test" />);

    const comments = screen.getByTestId("test-comments-container");
    const textarea = screen.getByTestId("test-comments");

    expect(comments).toHaveClass("exam-item");
    expect(comments).toHaveClass("non-printable");

    fireEvent.change(textarea, { target: { value: "test text" } });

    expect(textarea).toHaveValue("test text");
    expect(comments).not.toHaveClass("non-printable");
  });
});
