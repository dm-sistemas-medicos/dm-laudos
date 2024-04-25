import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

import DoctorSignature from "./DoctorSignature";

import userInfo from "../../../users/mariana-machoski/user-info.json";

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
    const doctorName = screen.getByText(userInfo.signature[0]);

    expect(doctorName).toBeInTheDocument();
  });

  it("renders the doctor speciality", () => {
    const doctorSpeciality = screen.getByText(userInfo.signature[1]);

    expect(doctorSpeciality).toBeInTheDocument();
  });

  it("renders the doctor registration numbers", () => {
    const doctorRegistrationNumbers = screen.getByText(userInfo.signature[2]);

    expect(doctorRegistrationNumbers).toBeInTheDocument();
  });
});
