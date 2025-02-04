import "@testing-library/jest-dom";

import { render } from "@testing-library/react";

import Videonasoscopy from "./Videonasoscopy";

describe("Videonasoscopy page (Client-side)", () => {
  it("renders the page", () => {
    const { container } = render(<Videonasoscopy />);

    expect(container).toMatchSnapshot();
  });
});
