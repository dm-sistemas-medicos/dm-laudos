import "@testing-library/jest-dom";

import { render } from "@testing-library/react";

import Oropharynx from "./Oropharynx";

describe("Oropharynx component", () => {
  it("renders the component", () => {
    const { container } = render(<Oropharynx />);

    expect(container).toMatchSnapshot();
  });
});
