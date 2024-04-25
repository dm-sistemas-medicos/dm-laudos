"use client";

import { Dispatch, SetStateAction, createContext, useState, FC } from "react";

import Image from "next/image";

import styles from "./page.module.scss";

import PatientInfo from "./components/PatientInfo/PatientInfo";
import Videonasolaryngoscopy from "./templates/exams/Videonasolaryngoscopy/Videonasolaryngoscopy";
import DragAndDrop from "./components/DragAndDrop/DragAndDrop";
import Preview from "./components/Preview/Preview";
import DoctorSignature from "./components/DoctorSignature/DoctorSignature";
import DoctorInfo from "./components/DoctorInfo/DoctorInfo";

export type ImagesType = string[];
export type SetImagesType = Dispatch<SetStateAction<ImagesType>>;

interface IImagesContext {
  images: ImagesType;
  setImages: SetImagesType;
}

const ImagesContext = createContext<IImagesContext>({
  images: [],
  setImages: () => {},
});

const MAX_ASIDE_IMAGES = 3;

const Page = () => {
  const [images, setImages] = useState<ImagesType>([]);

  return (
    <ImagesContext.Provider value={{ images, setImages }}>
      <section className={styles.page}>
        <header className={styles.header}>
          <Image
            src={"/logo.png"}
            alt=""
            width={400}
            height={123}
            priority={true}
          />
          <PatientInfo />
        </header>
        <main className={styles.main}>
          <Videonasolaryngoscopy />
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
        <footer className={styles.footer}>
          <DoctorSignature />
          <hr />
          <DoctorInfo />
        </footer>
      </section>
    </ImagesContext.Provider>
  );
};

export default Page;
