"use client";

import Image from "next/image";

import { useContext } from "react";
import { ImagesContext } from "@/app/contexts/images-context";
import { AsideImagesContext } from "@/app/contexts/aside-images-context";

import styles from "./AsideImages.module.scss";

const AsideImages = () => {
  const { maxAsideImages } = useContext(AsideImagesContext);
  const { images } = useContext(ImagesContext);

  const asideImages =
    images.length <= maxAsideImages ? images : images.slice(0, maxAsideImages);

  return (
    <div
      className={styles["aside-images"]}
      data-testid="aside-images-container"
    >
      {asideImages.map((image, i) => (
        <div key={i}>
          <Image fill src={image} alt={`Imagem ${i + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default AsideImages;
