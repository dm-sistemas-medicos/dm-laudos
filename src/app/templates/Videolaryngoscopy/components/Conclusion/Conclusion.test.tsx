import "@testing-library/jest-dom";

import { fireEvent, render, screen } from "@testing-library/react";

import Conclusion from "./Conclusion";

describe("Conclusion component", () => {
  beforeEach(() => {
    render(<Conclusion />);
  });

  it("renders the component", () => {
    const conclusion = screen.getByTestId("conclusion");

    expect(conclusion).toBeInTheDocument();
  });

  it("renders the section title", () => {
    const sectionTitle = screen.getByText("Conclusão", { selector: "h2" });

    expect(sectionTitle).toBeInTheDocument();
  });

  test("it should changes the value", () => {
    const textarea = screen.getByTestId("conclusion-textarea");

    fireEvent.change(textarea, { target: { value: "test text" } });

    expect(textarea).toHaveValue("test text");
  });
});
