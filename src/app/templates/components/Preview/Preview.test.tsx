import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

import Preview from "./Preview";

describe("Preview component", () => {
  it("renders the component", () => {
    render(<Preview images={[]} width={256} multiColumn={false} />);

    const preview = screen.getByTestId("preview-container");

    expect(preview).toBeInTheDocument();
  });

  it("renders the component with some images", () => {
    render(
      <Preview
        images={["blob://mockedImage1.png", "blob://mockedImage2.png"]}
        width={256}
        multiColumn={false}
      />
    );

    const image1 = screen.getByAltText("Imagem 1");
    const image2 = screen.getByAltText("Imagem 2");

    expect(image1).toBeInTheDocument();
    expect(image2).toBeInTheDocument();
  });

  it("renders the component with some images and multiColumn layout", () => {
    render(
      <Preview
        images={["blob://mockedImage1.png", "blob://mockedImage2.png"]}
        width={256}
        multiColumn={true}
      />
    );

    const preview = screen.getByTestId("preview-container");

    expect(preview).toBeInTheDocument();
    expect(preview).toHaveClass("preview-columns");
  });
});
