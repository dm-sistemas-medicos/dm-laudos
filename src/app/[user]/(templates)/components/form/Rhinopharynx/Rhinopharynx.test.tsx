import "@testing-library/jest-dom";

import { render } from "@testing-library/react";

import Rhinopharynx from "./Rhinopharynx";

describe("Rhinopharynx component", () => {
  it("renders the component", () => {
    const { container } = render(<Rhinopharynx />);

    expect(container).toMatchSnapshot();
  });
});
