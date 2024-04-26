"use client";

import ImagesProvider from "@/app/contexts/images-context";

import DragAndDrop from "../components/DragAndDrop/DragAndDrop";
import Preview from "../components/Preview/Preview";
import NasalCavity from "../components/NasalCavity/NasalCavity";
import Rhinopharynx from "../components/Rhinopharynx/Rhinopharynx";
import Conclusion from "../components/Conclusion/Conclusion";

import styles from "../layout.module.scss";

const MAX_ASIDE_IMAGES = 3;

const Videonasoscopy = () => (
  <ImagesProvider>
    <main className={styles.main}>
      <h1 className={styles["exam-title"]}>Videonasoscopia</h1>
      <form>
        <NasalCavity />
        <Rhinopharynx />
        <Conclusion />
      </form>
    </main>
    <aside className={styles.aside}>
      <DragAndDrop />
      <Preview aside={true} maxAsideImages={MAX_ASIDE_IMAGES} />
    </aside>
    <section className={styles.section}>
      <Preview aside={false} maxAsideImages={MAX_ASIDE_IMAGES} />
    </section>
  </ImagesProvider>
);

export default Videonasoscopy;
