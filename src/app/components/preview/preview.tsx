"use client";

import Image from "next/image";

import styles from "./Preview.module.scss";

type PreviewProps = {
  imagens: string[];
  width: number;
  multiColumn: boolean;
};

const Preview = ({ imagens, width, multiColumn }: PreviewProps) => (
  <div
    className={`${styles.preview} ${
      multiColumn ? styles["preview-columns"] : ""
    }`}
  >
    {imagens.map((image, i) => (
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
