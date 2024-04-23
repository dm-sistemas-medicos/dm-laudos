import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

import DoctorInfo from "./DoctorInfo";

describe("DoctorInfo component", () => {
  beforeEach(() => {
    render(<DoctorInfo />);
  });

  it("renders the component", () => {
    const doctorInfo = screen.getByTestId("doctor-info");

    expect(doctorInfo).toBeInTheDocument();
  });

  it("renders the doctor name", () => {
    const doctorName = screen.getByText("Dra. Mariana Carolina C. Machoski");

    expect(doctorName).toBeInTheDocument();
  });
});
