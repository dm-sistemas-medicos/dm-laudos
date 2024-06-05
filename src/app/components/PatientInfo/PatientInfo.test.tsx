import "@testing-library/jest-dom";

import { render } from "@testing-library/react";

import PatientInfo from "./PatientInfo";

describe("PatientInfo component", () => {
  it("renders the component", () => {
    const { container } = render(<PatientInfo />);

    expect(container).toMatchSnapshot();
  });
});
