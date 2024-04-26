"use client";

import Image from "next/image";

import styles from "./Preview.module.scss";

type PreviewProps = {
  images: string[];
  width: number;
  multiColumn: boolean;
};

const Preview = ({ images, width, multiColumn }: PreviewProps) => (
  <div
    className={`${styles.preview} ${
      multiColumn ? styles["preview-columns"] : ""
    }`}
    data-testid="preview-container"
  >
    {images.map((image, i) => (
      <Image
        key={i}
        src={image}
        width={width}
        height={width * 0.75}
        alt={`Imagem ${i + 1}`}
      />
    ))}
  </div>
);

export default Preview;
