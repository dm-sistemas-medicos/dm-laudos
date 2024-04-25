import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

import DoctorInfo from "./DoctorInfo";

import userInfo from "../../../users/mariana-machoski/user-info.json";

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
      `${userInfo.name}, ${userInfo.crm}, ${userInfo.rqe} - Email: ${userInfo.email} - Instagram: ${userInfo.instagram}`
    );

    expect(doctorInfo).toBeInTheDocument();
  });
});
