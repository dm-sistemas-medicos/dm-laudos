import "@testing-library/jest-dom";

import { render, screen, within } from "@testing-library/react";

import Oropharynx from "./Oropharynx";

describe("Oropharynx component", () => {
  beforeEach(() => {
    render(<Oropharynx />);
  });

  it("renders the section title", () => {
    const sectionTitle = screen.getByText("Orofaringe", { selector: "h2" });

    expect(sectionTitle).toBeInTheDocument();
  });

  it("renders the oropharynx item", () => {
    const oropharynx = screen.getByTestId("oropharynx-oropharynx");
    const label = within(oropharynx).getByLabelText("Orofaringe");

    const textarea = within(oropharynx).getByDisplayValue(
      "e hipofaringe com mucosa normal"
    );

    expect(oropharynx).toBeInTheDocument();
    expect(label).toBeInTheDocument();
    expect(textarea).toBeInTheDocument();
  });

  it("renders the base-of-tongue item", () => {
    const baseOfTongue = screen.getByTestId("oropharynx-base-of-tongue");
    const label = within(baseOfTongue).getByLabelText("Base da língua");
    const textarea = within(baseOfTongue).getByDisplayValue("sem alterações");

    expect(baseOfTongue).toBeInTheDocument();
    expect(label).toBeInTheDocument();
    expect(textarea).toBeInTheDocument();
  });

  it("renders the vallecula-pyriform-sinuses item", () => {
    const valleculaPyriformSinuses = screen.getByTestId(
      "oropharynx-vallecula-pyriform-sinuses"
    );

    const label = within(valleculaPyriformSinuses).getByLabelText(
      "Valéculas e seios piriformes"
    );

    const textarea = within(valleculaPyriformSinuses).getByDisplayValue(
      "livres"
    );

    expect(valleculaPyriformSinuses).toBeInTheDocument();
    expect(label).toBeInTheDocument();
    expect(textarea).toBeInTheDocument();
  });

  it("renders the Comments item", () => {
    const comments = screen.getByPlaceholderText("Observações");

    expect(comments).toBeInTheDocument();
  });
});
