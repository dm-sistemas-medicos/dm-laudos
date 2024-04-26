"use client";

import Image from "next/image";

import { useContext } from "react";
import { ImagesContext } from "@/app/contexts/images-context";
import { AsideImagesContext } from "@/app/contexts/aside-images-context";

import styles from "./SectionImages.module.scss";

const SectionImages = () => {
  const { maxAsideImages } = useContext(AsideImagesContext);
  const { images } = useContext(ImagesContext);

  const sectionImages = images.slice(maxAsideImages);

  return (
    <div
      className={`${styles["section-images"]} ${
        images.length > maxAsideImages ? styles["page-break"] : ""
      }`}
      data-testid="section-images-container"
    >
      {sectionImages.map((image, i) => (
        <div key={i}>
          <Image fill src={image} alt={`Imagem ${i + maxAsideImages + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default SectionImages;
