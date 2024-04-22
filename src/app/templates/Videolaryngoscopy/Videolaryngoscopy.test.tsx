import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

import Videolaryngoscopy from "./Videolaryngoscopy";

describe("Videolaryngoscopy component", () => {
  beforeEach(() => {
    render(<Videolaryngoscopy />);
  });

  it("renders the title", () => {
    const title = screen.getByText("Videonasolaringoscopia", {
      selector: "h1",
    });

    expect(title).toBeInTheDocument();
  });

  it("renders the NasalCavity section", () => {
    const nasalCavity = screen.getByTestId("nasal-cavity");

    expect(nasalCavity).toBeInTheDocument();
  });

  it("renders the Rhinopharynx section", () => {
    const rhinopharynx = screen.getByTestId("rhinopharynx");

    expect(rhinopharynx).toBeInTheDocument();
  });

  it("renders the Oropharynx section", () => {
    const oropharynx = screen.getByTestId("oropharynx");

    expect(oropharynx).toBeInTheDocument();
  });

  it("renders the Larynx section", () => {
    const larynx = screen.getByTestId("larynx");

    expect(larynx).toBeInTheDocument();
  });

  it("renders the Conclusion section", () => {
    const conclusion = screen.getByTestId("conclusion");

    expect(conclusion).toBeInTheDocument();
  });
});
