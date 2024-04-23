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

  it("renders the name info", () => {
    const name = screen.getByTestId("name-container");

    expect(name).toBeInTheDocument();
  });

  it("renders the medical-record-number info", () => {
    const medicalRecordNumber = screen.getByTestId(
      "medical-record-number-container"
    );

    expect(medicalRecordNumber).toBeInTheDocument();
  });

  it("renders the medical-record-date info", () => {
    const medicalReportDate = screen.getByTestId(
      "medical-report-date-container"
    );

    expect(medicalReportDate).toBeInTheDocument();
  });

  it("renders the requester-name info", () => {
    const requesterName = screen.getByTestId("requester-name-container");

    expect(requesterName).toBeInTheDocument();
  });

  it("renders the birthdate info", () => {
    const birthdate = screen.getByTestId("birthdate-input-container");

    expect(birthdate).toBeInTheDocument();
  });

  it("renders the operator-name info", () => {
    const operatorName = screen.getByTestId("operator-name-container");

    expect(operatorName).toBeInTheDocument();
  });

  it("renders the medical-insurance-name info", () => {
    const medicalInsuranceName = screen.getByTestId(
      "medical-insurance-name-container"
    );

    expect(medicalInsuranceName).toBeInTheDocument();
  });
});
