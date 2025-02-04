"use client";

import NasalCavity from "../components/form/NasalCavity/NasalCavity";
import Rhinopharynx from "../components/form/Rhinopharynx/Rhinopharynx";
import Conclusion from "../components/form/Conclusion/Conclusion";

import styles from "../layout.module.scss";

const Videonasoscopy = () => (
  <>
    <h1 className={styles["exam-title"]}>Videonasoescopia</h1>
    <form>
      <NasalCavity />
      <Rhinopharynx />
      <Conclusion />
    </form>
  </>
);

export default Videonasoscopy;
