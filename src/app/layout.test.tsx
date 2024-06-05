import "@testing-library/jest-dom";

import { render } from "@testing-library/react";

import RootLayout from "./layout";

describe("Root layout", () => {
  it("renders the layout", () => {
    const { container } = render(<RootLayout>children</RootLayout>);

    expect(container).toMatchSnapshot();
  });
});
