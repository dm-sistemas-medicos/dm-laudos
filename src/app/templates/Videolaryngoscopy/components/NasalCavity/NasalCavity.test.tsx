import "@testing-library/jest-dom";

import { render, screen, within } from "@testing-library/react";

import NasalCavity from "./NasalCavity";

describe("NasalCavity component", () => {
  beforeEach(() => {
    render(<NasalCavity />);
  });

  it("renders the section title", () => {
    const sectionTitle = screen.getByText("Cavidade Nasal", { selector: "h2" });

    expect(sectionTitle).toBeInTheDocument();
  });

  it("renders the nasal-septum item", () => {
    const nasalSeptum = screen.getByTestId("nasal-cavity-nasal-septum");
    const label = within(nasalSeptum).getByLabelText("Septo nasal");

    const textarea = within(nasalSeptum).getByDisplayValue(
      "com desvio para direita, com esporão ósseo associado, parcialmente obstrutivo"
    );

    expect(nasalSeptum).toBeInTheDocument();
    expect(label).toBeInTheDocument();
    expect(textarea).toBeInTheDocument();
  });

  it("renders the middle-turbinates item", () => {
    const middleTurbinates = screen.getByTestId(
      "nasal-cavity-middle-turbinates"
    );

    const label = within(middleTurbinates).getByLabelText("Cornetos médios");

    const textarea =
      within(middleTurbinates).getByDisplayValue("normotróficos");

    expect(middleTurbinates).toBeInTheDocument();
    expect(label).toBeInTheDocument();
    expect(textarea).toBeInTheDocument();
  });

  it("renders the inferior-turbinates item", () => {
    const inferiorTurbinates = screen.getByTestId(
      "nasal-cavity-inferior-turbinates"
    );

    const label = within(inferiorTurbinates).getByLabelText(
      "Cornetos inferiores"
    );

    const textarea =
      within(inferiorTurbinates).getByDisplayValue("hipertróficos");

    expect(inferiorTurbinates).toBeInTheDocument();
    expect(label).toBeInTheDocument();
    expect(textarea).toBeInTheDocument();
  });

  it("renders the secretion item", () => {
    const secretion = screen.getByTestId("nasal-cavity-secretion");
    const label = within(secretion).getByLabelText("Secreção");
    const textarea = within(secretion).getByDisplayValue("aquosa");

    expect(secretion).toBeInTheDocument();
    expect(label).toBeInTheDocument();
    expect(textarea).toBeInTheDocument();
  });

  it("renders the mucosa item", () => {
    const mucosa = screen.getByTestId("nasal-cavity-mucosa");
    const label = within(mucosa).getByLabelText("Mucosa");
    const textarea = within(mucosa).getByDisplayValue("pálida");

    expect(mucosa).toBeInTheDocument();
    expect(label).toBeInTheDocument();
    expect(textarea).toBeInTheDocument();
  });

  it("renders the Comments item", () => {
    const comments = screen.getByPlaceholderText("Observações");

    expect(comments).toBeInTheDocument();
  });
});
