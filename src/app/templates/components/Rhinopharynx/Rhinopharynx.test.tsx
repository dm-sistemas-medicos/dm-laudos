import "@testing-library/jest-dom";

import { render, screen, within } from "@testing-library/react";

import Rhinopharynx from "./Rhinopharynx";

describe("Rhinopharynx component", () => {
  beforeEach(() => {
    render(<Rhinopharynx />);
  });

  it("renders the component", () => {
    const rhinopharynx = screen.getByTestId("rhinopharynx-container");

    expect(rhinopharynx).toBeInTheDocument();
  });

  it("renders the section title", () => {
    const sectionTitle = screen.getByText("Rinofaringe", { selector: "h2" });

    expect(sectionTitle).toBeInTheDocument();
  });

  it("renders the mucosa item", () => {
    const mucosa = screen.getByTestId("rhinopharynx-mucosa-container");
    const label = within(mucosa).getByLabelText("Mucosa");
    const textarea = within(mucosa).getByDisplayValue("normal");

    expect(mucosa).toBeInTheDocument();
    expect(label).toBeInTheDocument();
    expect(textarea).toBeInTheDocument();
  });

  it("renders the meatus item", () => {
    const meatus = screen.getByTestId("rhinopharynx-meatus-container");
    const label = within(meatus).getByLabelText("Meatos");
    const textarea = within(meatus).getByDisplayValue("pérvios");

    expect(meatus).toBeInTheDocument();
    expect(label).toBeInTheDocument();
    expect(textarea).toBeInTheDocument();
  });

  it("renders the tubal-ostia item", () => {
    const tubalOstia = screen.getByTestId("rhinopharynx-tubal-ostia-container");
    const label = within(tubalOstia).getByLabelText("Óstios tubários");

    const textarea = within(tubalOstia).getByDisplayValue(
      "visualidados bilateralmente e pérvios"
    );

    expect(tubalOstia).toBeInTheDocument();
    expect(label).toBeInTheDocument();
    expect(textarea).toBeInTheDocument();
  });

  it("renders the velopharyngeal-function item", () => {
    const velopharyngealFunction = screen.getByTestId(
      "rhinopharynx-velopharyngeal-function-container"
    );

    const label = within(velopharyngealFunction).getByLabelText(
      "Função velofaringea"
    );

    const textarea = within(velopharyngealFunction).getByDisplayValue(
      "preservada"
    );

    expect(velopharyngealFunction).toBeInTheDocument();
    expect(label).toBeInTheDocument();
    expect(textarea).toBeInTheDocument();
  });

  it("renders the injuries item", () => {
    const injuries = screen.getByTestId("rhinopharynx-injuries-container");
    const textarea = within(injuries).getByDisplayValue("Ausência de lesões");

    expect(injuries).toBeInTheDocument();
    expect(textarea).toBeInTheDocument();
  });

  it("renders the Comments item", () => {
    const comments = screen.getByTestId("rhinopharynx-comments-container");

    expect(comments).toBeInTheDocument();
  });
});