import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

import DoctorLogo from "./DoctorLogo";

describe("DoctorLogo component", () => {
  it("renders the component", () => {
    render(<DoctorLogo />);

    const doctorLogo = screen.getByAltText("");

    expect(doctorLogo).toBeInTheDocument();
  });
});
