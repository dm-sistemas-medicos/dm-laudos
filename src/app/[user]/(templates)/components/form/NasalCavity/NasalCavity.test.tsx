import "@testing-library/jest-dom";

import { render } from "@testing-library/react";

import NasalCavity from "./NasalCavity";

describe("NasalCavity component", () => {
  it("renders the component", () => {
    const { container } = render(<NasalCavity />);

    expect(container).toMatchSnapshot();
  });
});
