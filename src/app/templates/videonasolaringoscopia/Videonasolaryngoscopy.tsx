"use client";

import { ImagesProvider } from "@/app/contexts/images-context";

import DragAndDrop from "../components/DragAndDrop/DragAndDrop";
import Preview from "../components/Preview/Preview";
import NasalCavity from "../components/NasalCavity/NasalCavity";
import Rhinopharynx from "../components/Rhinopharynx/Rhinopharynx";
import Oropharynx from "../components/Oropharynx/Oropharynx";
import Larynx from "../components/Larynx/Larynx";
import Conclusion from "../components/Conclusion/Conclusion";

import styles from "../layout.module.scss";

const MAX_ASIDE_IMAGES = 5;

const Videonasolaryngoscopy = () => (
  <ImagesProvider>
    <main className={styles.main}>
      <h1 className={styles["exam-title"]}>Videonasolaringoscopia</h1>
      <form>
        <NasalCavity />
        <Rhinopharynx />
        <Oropharynx />
        <Larynx />
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

export default Videonasolaryngoscopy;
