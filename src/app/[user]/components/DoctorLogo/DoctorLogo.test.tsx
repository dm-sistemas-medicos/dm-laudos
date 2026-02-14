import "@testing-library/jest-dom";

import { render } from "@testing-library/react";

import DoctorLogo from "./DoctorLogo";

describe("DoctorLogo component", () => {
  it("renders the component", () => {
    const { container } = render(<DoctorLogo user="mariana-machoski" />);

    expect(container).toMatchSnapshot();
  });
});
