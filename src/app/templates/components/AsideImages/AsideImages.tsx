"use client";

import Image from "next/image";

import { useContext } from "react";
import { ImagesContext } from "@/app/contexts/images-context";

import styles from "./AsideImages.module.scss";

const width = 256;

const AsideImages = () => {
  const { maxAsideImages, images } = useContext(ImagesContext);

  const asideImages =
    images.length <= maxAsideImages ? images : images.slice(0, maxAsideImages);

  return (
    <div
      className={styles["aside-images"]}
      data-testid="aside-images-container"
    >
      {asideImages.map((image, i) => (
        <Image
          key={i}
          src={image}
          width={256}
          height={width * 0.75}
          alt={`Imagem ${i + 1}`}
        />
      ))}
    </div>
  );
};

export default AsideImages;
