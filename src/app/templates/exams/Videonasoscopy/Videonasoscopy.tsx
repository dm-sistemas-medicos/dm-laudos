"use client";

import NasalCavity from "../../components/NasalCavity/NasalCavity";
import Rhinopharynx from "../../components/Rhinopharynx/Rhinopharynx";
import Conclusion from "../../components/Conclusion/Conclusion";

import styles from "../exams.module.scss";

const Videonasoscopy = () => (
  <>
    <h1 className={styles["exam-title"]}>Videonasoscopia</h1>
    <form>
      <NasalCavity />
      <Rhinopharynx />
      <Conclusion />
    </form>
  </>
);

export default Videonasoscopy;
