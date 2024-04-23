import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

import DoctorSignature from "./DoctorSignature";

describe("DoctorSignature component", () => {
  beforeEach(() => {
    render(<DoctorSignature />);
  });

  it("renders the component", () => {
    const DoctorSignature = screen.getByTestId("doctor-signature-container");

    expect(DoctorSignature).toBeInTheDocument();
  });

  it("renders the image", () => {
    const image = screen.getByAltText("Assinatura");

    expect(image).toBeInTheDocument();
  });

  it("renders the doctor name", () => {
    const doctorName = screen.getByText("Dra. Mariana Carolina C. Machoski");

    expect(doctorName).toBeInTheDocument();
  });

  it("renders the doctor speciality", () => {
    const doctorSpeciality = screen.getByText("Médica Otorrinolaringologista");

    expect(doctorSpeciality).toBeInTheDocument();
  });

  it("renders the doctor registration numbers", () => {
    const doctorRegistrationNumbers = screen.getByText(
      "CRM-SC 35.098 | RQE 23.991"
    );

    expect(doctorRegistrationNumbers).toBeInTheDocument();
  });
});
