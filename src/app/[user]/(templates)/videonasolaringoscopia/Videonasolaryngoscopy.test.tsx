import "@testing-library/jest-dom";

import { render } from "@testing-library/react";

import Videonasolaryngoscopy from "./Videonasolaryngoscopy";

describe("Videonasolaryngoscopy page (Client-side)", () => {
  it("renders the page", () => {
    const { container } = render(<Videonasolaryngoscopy />);

    expect(container).toMatchSnapshot();
  });
});
