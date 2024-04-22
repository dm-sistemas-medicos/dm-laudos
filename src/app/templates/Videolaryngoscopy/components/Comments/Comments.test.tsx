import "@testing-library/jest-dom";

import { fireEvent, render, screen } from "@testing-library/react";

import Comments from "./Comments";

describe("Comments component", () => {
  it("renders the component", () => {
    render(<Comments />);

    const comments = screen.getByTestId("comments");

    expect(comments).toBeInTheDocument();
  });

  it("renders the component with parentId", () => {
    render(<Comments parentId="test" />);

    const comments = screen.getByTestId("test-comments");

    expect(comments).toBeInTheDocument();
  });

  test("it should changes the value", () => {
    render(<Comments />);

    const textarea = screen.getByPlaceholderText("Observações");

    fireEvent.change(textarea, { target: { value: "test text" } });

    expect(textarea).toHaveValue("test text");
  });

  test("it should have the correct style classes", () => {
    render(<Comments />);

    const comments = screen.getByTestId("comments");
    const textarea = screen.getByPlaceholderText("Observações");

    expect(comments).toHaveClass("exam-item");
    expect(comments).toHaveClass("non-printable");

    fireEvent.change(textarea, { target: { value: "test text" } });

    expect(textarea).toHaveValue("test text");
    expect(comments).not.toHaveClass("non-printable");
  });
});
