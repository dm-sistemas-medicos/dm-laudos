"use client";

import Image from "next/image";

import { useContext } from "react";
import { ImagesContext } from "@/app/contexts/images-context";

import styles from "./SectionImages.module.scss";

const width = 256;

const SectionImages = () => {
  const { maxAsideImages, images } = useContext(ImagesContext);

  const sectionImages = images.slice(maxAsideImages);

  return (
    <div
      className={styles["section-images"]}
      data-testid="section-images-container"
    >
      {sectionImages.map((image, i) => (
        <Image
          key={i}
          src={image}
          width={256}
          height={width * 0.75}
          alt={`Imagem ${i + maxAsideImages + 1}`}
        />
      ))}
    </div>
  );
};

export default SectionImages;
