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
    const sectionTitle = screen.getByText("Cavidade Nasal", { selector: "h2" });

    expect(sectionTitle).toBeInTheDocument();
  });

  it("renders the Rhinopharynx section", () => {
    const sectionTitle = screen.getByText("Rinofaringe", { selector: "h2" });

    expect(sectionTitle).toBeInTheDocument();
  });

  it("renders the Oropharynx section", () => {
    const sectionTitle = screen.getByText("Orofaringe", { selector: "h2" });

    expect(sectionTitle).toBeInTheDocument();
  });

  it("renders the Larynx section", () => {
    const sectionTitle = screen.getByText("Laringe", { selector: "h2" });

    expect(sectionTitle).toBeInTheDocument();
  });

  it("renders the Conclusion section", () => {
    const sectionTitle = screen.getByText("Conclusão", { selector: "h2" });

    expect(sectionTitle).toBeInTheDocument();
  });
});
