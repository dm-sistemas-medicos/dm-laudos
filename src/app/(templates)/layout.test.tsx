import "@testing-library/jest-dom";

import { render } from "@testing-library/react";

import Layout from "./layout";

describe("Templates layout", () => {
  it("renders the layout", () => {
    const { container } = render(<Layout>children</Layout>);

    expect(container).toMatchSnapshot();
  });
});
