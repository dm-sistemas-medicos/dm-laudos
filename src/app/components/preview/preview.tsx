"use client";

import Image from "next/image";

import styles from "./preview.module.css";

export const Preview = ({ imagens, width, multiColumn }) => (
  <div
    className={`${styles.preview} ${multiColumn ? styles.previewColumns : ""}`}
  >
    {imagens.map((image, i) => (
      <Image key={i} src={image} width={width} height={width * 0.75} />
    ))}
  </div>
);

export default Preview;
