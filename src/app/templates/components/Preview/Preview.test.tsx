import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

import { ImagesContext } from "@/app/contexts/images-context";

import Preview from "./Preview";

describe("Preview component", () => {
  it("renders the component", () => {
    render(<Preview aside={true} maxAsideImages={3} />);

    const preview = screen.getByTestId("preview-container");

    expect(preview).toBeInTheDocument();
  });

  it("renders the component with some images", () => {
    render(
      <ImagesContext.Provider
        value={{
          images: ["blob://img1.jpg", "blob://img2.jpg"],
          setImages: jest.fn(),
        }}
      >
        <Preview aside={true} maxAsideImages={2} />
      </ImagesContext.Provider>
    );

    const img1 = screen.getByAltText("Imagem 1");
    const img2 = screen.getByAltText("Imagem 2");

    expect(img1).toBeInTheDocument();
    expect(img2).toBeInTheDocument();
  });

  it("renders the component with some images and limit to aside maximum", () => {
    render(
      <ImagesContext.Provider
        value={{
          images: ["blob://img1.jpg", "blob://img2.jpg", "blob://img3.jpg"],
          setImages: jest.fn(),
        }}
      >
        <Preview aside={true} maxAsideImages={2} />
      </ImagesContext.Provider>
    );

    const img1 = screen.getByAltText("Imagem 1");
    const img2 = screen.getByAltText("Imagem 2");

    expect(img1).toBeInTheDocument();
    expect(img2).toBeInTheDocument();
  });

  it("renders the component with some images and multiColumn layout", () => {
    render(
      <ImagesContext.Provider
        value={{
          images: ["blob://img1.jpg", "blob://img2.jpg"],
          setImages: jest.fn(),
        }}
      >
        <Preview aside={false} maxAsideImages={2} />
      </ImagesContext.Provider>
    );

    const preview = screen.getByTestId("preview-container");

    expect(preview).toBeInTheDocument();
    expect(preview).toHaveClass("preview-columns");
  });
});
