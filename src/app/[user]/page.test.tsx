import "@testing-library/jest-dom";

import { render } from "@testing-library/react";

import { User } from "@/users";

import Page from "./page";

describe("Root page", () => {
  it("renders the page", () => {
    const params = new Promise<{ user: User }>(() => ({
      user: "mariana-machoski",
    }));

    const { container } = render(<Page params={params} />);

    expect(container).toMatchSnapshot();
  });
});
