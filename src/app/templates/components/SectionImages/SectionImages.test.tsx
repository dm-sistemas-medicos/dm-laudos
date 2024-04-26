import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

import { ImagesContext } from "@/app/contexts/images-context";
import { AsideImagesContext } from "@/app/contexts/aside-images-context";

import SectionImages from "./SectionImages";

describe("SectionImages component", () => {
  it("renders the component", () => {
    render(<SectionImages />);

    const preview = screen.getByTestId("section-images-container");

    expect(preview).toBeInTheDocument();
  });

  it("renders the component with some images", () => {
    render(
      <ImagesContext.Provider
        value={{
          images: ["blob://img1.jpg", "blob://img2.jpg", "blob://img3.jpg"],
          setImages: jest.fn(),
        }}
      >
        <AsideImagesContext.Provider
          value={{ maxAsideImages: 1, setMaxAsideImages: jest.fn() }}
        >
          <SectionImages />
        </AsideImagesContext.Provider>
      </ImagesContext.Provider>
    );

    const img2 = screen.getByAltText("Imagem 2");
    const img3 = screen.getByAltText("Imagem 3");

    expect(img2).toBeInTheDocument();
    expect(img3).toBeInTheDocument();
  });
});
