import "@testing-library/jest-dom";

import { render } from "@testing-library/react";

import Larynx from "./Larynx";

describe("Larynx component", () => {
  it("renders the component", () => {
    const { container } = render(<Larynx />);

    expect(container).toMatchSnapshot();
  });
});
