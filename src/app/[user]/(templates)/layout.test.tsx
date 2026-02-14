import "@testing-library/jest-dom";

import { act, render, waitFor } from "@testing-library/react";

import { User } from "@/users";

import Layout from "./layout";

describe("Templates layout", () => {
  it("renders the layout", () => {
    const params = new Promise<{ user: User }>(() => ({
      user: "mariana-machoski",
    }));

    const { container } = render(<Layout params={params}>children</Layout>);

    expect(container).toMatchSnapshot();
  });
});
