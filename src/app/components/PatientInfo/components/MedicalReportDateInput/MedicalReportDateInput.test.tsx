import "@testing-library/jest-dom";

import { fireEvent, render, screen } from "@testing-library/react";

import MedicalReportDateInput from "./MedicalReportDateInput";

const today = new Date();

describe("MedicalReportDateInput component", () => {
  it("renders the component", () => {
    render(
      <MedicalReportDateInput
        medicalReportDate={today.toISOString().substring(0, 10)}
        setMedicalReportDate={jest.fn()}
      />
    );

    const medicalReportDateInput = screen.getByTestId(
      "medical-report-date-container"
    );

    expect(medicalReportDateInput).toBeInTheDocument();
  });

  it("it should changes the value", () => {
    const setMedicalReportDate = jest.fn();

    render(
      <MedicalReportDateInput
        medicalReportDate={today.toISOString().substring(0, 10)}
        setMedicalReportDate={setMedicalReportDate}
      />
    );

    const input = screen.getByTestId("medical-report-date");

    fireEvent.change(input, { target: { value: "2024-01-01" } });

    expect(setMedicalReportDate).toHaveBeenCalledWith("2024-01-01");
  });
});
