import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

import Videonasoscopy from "./Videonasoscopy";

describe("Videonasoscopy component", () => {
  beforeEach(() => {
    render(<Videonasoscopy />);
  });

  it("renders the title", () => {
    const title = screen.getByText("Videonasoscopia", {
      selector: "h1",
    });

    expect(title).toBeInTheDocument();
  });

  it("renders the NasalCavity section", () => {
    const nasalCavity = screen.getByTestId("nasal-cavity-container");

    expect(nasalCavity).toBeInTheDocument();
  });

  it("renders the Rhinopharynx section", () => {
    const rhinopharynx = screen.getByTestId("rhinopharynx-container");

    expect(rhinopharynx).toBeInTheDocument();
  });

  it("renders the Conclusion section", () => {
    const conclusion = screen.getByTestId("conclusion-container");

    expect(conclusion).toBeInTheDocument();
  });
});
