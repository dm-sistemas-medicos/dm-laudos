import "@testing-library/jest-dom";

import { render } from "@testing-library/react";

import DoctorSignature from "./DoctorSignature";

describe("DoctorSignature component", () => {
  it("renders the component", () => {
    const { container } = render(<DoctorSignature user="mariana-machoski" />);

    expect(container).toMatchSnapshot();
  });
});
