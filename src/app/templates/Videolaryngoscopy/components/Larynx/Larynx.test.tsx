import "@testing-library/jest-dom";

import { render, screen, within } from "@testing-library/react";

import Larynx from "./Larynx";

describe("Larynx component", () => {
  beforeEach(() => {
    render(<Larynx />);
  });

  it("renders the section title", () => {
    const sectionTitle = screen.getByText("Laringe", { selector: "h2" });

    expect(sectionTitle).toBeInTheDocument();
  });

  it("renders the vocal-folds item", () => {
    const vocalFolds = screen.getByTestId("larynx-vocal-folds");
    const label = within(vocalFolds).getByLabelText("Pregas vocais");

    const textarea = within(vocalFolds).getByDisplayValue(
      "com mobilidade preservada bilateralmente"
    );

    expect(vocalFolds).toBeInTheDocument();
    expect(label).toBeInTheDocument();
    expect(textarea).toBeInTheDocument();
  });

  it("renders the free-edges item", () => {
    const freeEdges = screen.getByTestId("larynx-free-edges");
    const label = within(freeEdges).getByLabelText("Bordos livres");
    const textarea = within(freeEdges).getByDisplayValue(
      "regulares, sem lesões"
    );

    expect(freeEdges).toBeInTheDocument();
    expect(label).toBeInTheDocument();
    expect(textarea).toBeInTheDocument();
  });

  it("renders the coaptation item", () => {
    const coaptation = screen.getByTestId("larynx-coaptation");
    const label = within(coaptation).getByLabelText("Coaptação");
    const textarea = within(coaptation).getByDisplayValue("normal");

    expect(coaptation).toBeInTheDocument();
    expect(label).toBeInTheDocument();
    expect(textarea).toBeInTheDocument();
  });

  it("renders the mucosa item", () => {
    const mucosa = screen.getByTestId("larynx-mucosa");
    const label = within(mucosa).getByLabelText("Mucosa");

    const textarea = within(mucosa).getByDisplayValue(
      "com hiperemia e edema leve"
    );

    expect(mucosa).toBeInTheDocument();
    expect(label).toBeInTheDocument();
    expect(textarea).toBeInTheDocument();
  });

  it("renders the subglottis item", () => {
    const subglottis = screen.getByTestId("larynx-subglottis");
    const label = within(subglottis).getByLabelText("Subglote");
    const textarea = within(subglottis).getByDisplayValue("livre, sem lesões");

    expect(subglottis).toBeInTheDocument();
    expect(label).toBeInTheDocument();
    expect(textarea).toBeInTheDocument();
  });

  it("renders the Comments item", () => {
    const comments = screen.getByPlaceholderText("Observações");

    expect(comments).toBeInTheDocument();
  });
});
