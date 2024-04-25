"use client";

import NasalCavity from "../../components/NasalCavity/NasalCavity";
import Rhinopharynx from "../../components/Rhinopharynx/Rhinopharynx";
import Oropharynx from "../../components/Oropharynx/Oropharynx";
import Larynx from "../../components/Larynx/Larynx";
import Conclusion from "../../components/Conclusion/Conclusion";

import styles from "../exams.module.scss";

const Videonasolaryngoscopy = () => (
  <>
    <h1 className={styles["exam-title"]}>Videonasolaringoscopia</h1>
    <form>
      <NasalCavity />
      <Rhinopharynx />
      <Oropharynx />
      <Larynx />
      <Conclusion />
    </form>
  </>
);

export default Videonasolaryngoscopy;
