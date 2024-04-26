import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

import { ImagesContext } from "@/app/contexts/images-context";

import AsideImages from "./AsideImages";

describe("AsideImages component", () => {
  it("renders the component", () => {
    render(<AsideImages />);

    const preview = screen.getByTestId("aside-images-container");

    expect(preview).toBeInTheDocument();
  });

  it("renders the component with some images", () => {
    render(
      <ImagesContext.Provider
        value={{
          maxAsideImages: 2,
          setMaxAsideImages: jest.fn(),
          images: ["blob://img1.jpg", "blob://img2.jpg"],
          setImages: jest.fn(),
        }}
      >
        <AsideImages />
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
          maxAsideImages: 2,
          setMaxAsideImages: jest.fn(),
          images: ["blob://img1.jpg", "blob://img2.jpg", "blob://img3.jpg"],
          setImages: jest.fn(),
        }}
      >
        <AsideImages />
      </ImagesContext.Provider>
    );

    const img1 = screen.getByAltText("Imagem 1");
    const img2 = screen.getByAltText("Imagem 2");

    expect(img1).toBeInTheDocument();
    expect(img2).toBeInTheDocument();
  });
});
