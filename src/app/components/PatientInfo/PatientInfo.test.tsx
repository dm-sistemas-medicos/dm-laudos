import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

import PatientInfo from "./PatientInfo";

describe("PatientInfo component", () => {
  beforeEach(() => {
    render(<PatientInfo />);
  });

  it("renders the component", () => {
    const patientInfo = screen.getByTestId("patient-info-container");

    expect(patientInfo).toBeInTheDocument();
  });
});
