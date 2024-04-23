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

  it("renders the correct doctor info", () => {
    const doctorInfo = screen.getByText(
      "Dra. Mariana Machoski, CRM/SC 35098, RQE/SC 23991 - Email: marianamachoskilo@gmail.com - Instagram: @marimachoski"
    );

    expect(doctorInfo).toBeInTheDocument();
  });
});
