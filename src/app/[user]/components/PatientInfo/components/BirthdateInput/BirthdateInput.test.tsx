import "@testing-library/jest-dom";

import { fireEvent, render, screen } from "@testing-library/react";

import BirthdateInput from "./BirthdateInput";

describe("BirthdateInput component", () => {
  it("renders the component", () => {
    render(<BirthdateInput medicalReportDate="" />);

    const birthdateInput = screen.getByTestId("birthdate-input-container");

    expect(birthdateInput).toBeInTheDocument();
  });

  it("renders the component with an empty lifetime value", () => {
    render(<BirthdateInput medicalReportDate="" />);

    const lifetime = screen.getByTestId("lifetime-span");

    expect(lifetime).toHaveTextContent("");
  });

  it("should changes the value", () => {
    render(<BirthdateInput medicalReportDate="" />);

    const input = screen.getByTestId("birthdate-input");

    fireEvent.change(input, { target: { value: "1992-11-07" } });

    expect(input).toHaveValue("1992-11-07");
  });

  it("renders the component with a lifetime value", () => {
    render(<BirthdateInput medicalReportDate="2024-04-23" />);

    const input = screen.getByTestId("birthdate-input");

    fireEvent.change(input, { target: { value: "1992-11-07" } });

    const lifetime = screen.getByTestId("lifetime-span");

    expect(lifetime).toHaveTextContent("31a 5m 25d");
  });
});
