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
    const nasalCavity = screen.getByTestId("nasal-cavity-container");

    expect(nasalCavity).toBeInTheDocument();
  });

  it("renders the Rhinopharynx section", () => {
    const rhinopharynx = screen.getByTestId("rhinopharynx-container");

    expect(rhinopharynx).toBeInTheDocument();
  });

  it("renders the Oropharynx section", () => {
    const oropharynx = screen.getByTestId("oropharynx-container");

    expect(oropharynx).toBeInTheDocument();
  });

  it("renders the Larynx section", () => {
    const larynx = screen.getByTestId("larynx-container");

    expect(larynx).toBeInTheDocument();
  });

  it("renders the Conclusion section", () => {
    const conclusion = screen.getByTestId("conclusion-container");

    expect(conclusion).toBeInTheDocument();
  });
});
