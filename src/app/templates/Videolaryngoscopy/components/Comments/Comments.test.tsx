import "@testing-library/jest-dom";

import { fireEvent, render, screen } from "@testing-library/react";

import Comments from "./Comments";

describe("Comments component", () => {
  beforeEach(() => {
    render(<Comments />);
  });

  it("renders the component", () => {
    const comments = screen.getByTestId("comments");

    expect(comments).toBeInTheDocument();
  });

  it("renders the component with the correct placeholder", () => {
    const comments = screen.getByPlaceholderText("Observações");

    expect(comments).toBeInTheDocument();
  });

  it("renders the component with parentId", () => {
    render(<Comments parentId="test" />);

    const comments = screen.getByTestId("test-comments");

    expect(comments).toBeInTheDocument();
  });

  test("it should changes the value", () => {
    const textarea = screen.getByPlaceholderText("Observações");

    fireEvent.change(textarea, { target: { value: "test text" } });

    expect(textarea).toHaveValue("test text");
  });

  test("it should have the correct style classes", () => {
    const comments = screen.getByTestId("comments");
    const textarea = screen.getByTestId("comments-textarea");

    expect(comments).toHaveClass("exam-item");
    expect(comments).toHaveClass("non-printable");

    fireEvent.change(textarea, { target: { value: "test text" } });

    expect(textarea).toHaveValue("test text");
    expect(comments).not.toHaveClass("non-printable");
  });
});
