import Image from "next/image";

import styles from "./Preview.module.scss";
import { useContext } from "react";
import { ImagesContext } from "@/app/contexts/images-context";

type PreviewProps = {
  aside: boolean;
  maxAsideImages: number;
};

const width = 256;

const Preview = ({ aside, maxAsideImages }: PreviewProps) => {
  const { images } = useContext(ImagesContext);

  let imagesToRender;

  if (aside) {
    imagesToRender =
      images.length <= maxAsideImages
        ? images
        : images.slice(0, maxAsideImages);
  } else {
    imagesToRender = images.slice(maxAsideImages);
  }

  return (
    <div
      className={`${styles.preview} ${!aside ? styles["preview-columns"] : ""}`}
      data-testid="preview-container"
    >
      {imagesToRender.map((image, i) => (
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

export default Preview;
