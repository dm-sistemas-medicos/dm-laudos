import "@testing-library/jest-dom";

import { render } from "@testing-library/react";

import DoctorInfo from "./DoctorInfo";

describe("DoctorInfo component", () => {
  it("renders the component", () => {
    const { container } = render(<DoctorInfo />);

    expect(container).toMatchSnapshot();
  });
});
