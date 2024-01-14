"use client";

import Image from "next/image";

import styles from "./preview.module.css";

type PreviewProps = {
  imagens: string[];
  width: number;
  multiColumn: boolean;
};

const Preview = ({ imagens, width, multiColumn }: PreviewProps) => (
  <div
    className={`${styles.preview} ${multiColumn ? styles.previewColumns : ""}`}
  >
    {imagens.map((image, i) => (
      <Image
        className={styles.previewImage}
        key={i}
        src={image}
        width={width}
        height={width * 0.75}
        alt={`imagem-${i + 1}`}
      />
    ))}
  </div>
);

export default Preview;
