import "@testing-library/jest-dom";

import { render } from "@testing-library/react";

import PatientInfo from "./PatientInfo";

jest.mock("next/navigation", () => ({
  useParams: jest.fn().mockReturnValue({ user: "mariana-machoski" }),
}));

describe("PatientInfo component", () => {
  it("renders the component", () => {
    const { container } = render(<PatientInfo />);

    expect(container).toMatchSnapshot();
  });
});
