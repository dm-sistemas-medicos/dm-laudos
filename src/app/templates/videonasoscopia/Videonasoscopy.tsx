"use client";

import { createContext, Dispatch, SetStateAction, useState } from "react";

import DragAndDrop from "../components/DragAndDrop/DragAndDrop";
import Preview from "../components/Preview/Preview";
import NasalCavity from "../components/NasalCavity/NasalCavity";
import Rhinopharynx from "../components/Rhinopharynx/Rhinopharynx";
import Conclusion from "../components/Conclusion/Conclusion";

import styles from "../layout.module.scss";

const MAX_ASIDE_IMAGES = 3;

type ImagesType = string[];
type SetImagesType = Dispatch<SetStateAction<ImagesType>>;

interface IImagesContext {
  images: ImagesType;
  setImages: SetImagesType;
}

const ImagesContext = createContext<IImagesContext>({
  images: [],
  setImages: () => {},
});

const Videonasoscopy = () => {
  const [images, setImages] = useState<ImagesType>([]);

  return (
    <ImagesContext.Provider value={{ images, setImages }}>
      <main className={styles.main}>
        <h1 className={styles["exam-title"]}>Videonasoscopia</h1>
        <form>
          <NasalCavity />
          <Rhinopharynx />
          <Conclusion />
        </form>
      </main>
      <aside className={styles.aside}>
        <DragAndDrop setImages={setImages} />
        <Preview
          images={
            images.length <= MAX_ASIDE_IMAGES
              ? images
              : images.slice(0, MAX_ASIDE_IMAGES)
          }
          width={256}
          multiColumn={false}
        />
      </aside>
      {images.length > MAX_ASIDE_IMAGES && (
        <section className={styles.section}>
          <Preview
            images={images.slice(MAX_ASIDE_IMAGES)}
            width={256}
            multiColumn={true}
          />
        </section>
      )}
    </ImagesContext.Provider>
  );
};

export default Videonasoscopy;
