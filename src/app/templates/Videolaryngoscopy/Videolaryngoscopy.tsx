"use client";

import styles from "./Videolaryngoscopy.module.scss";

import NasalCavity from "./components/NasalCavity/NasalCavity";
import Rrhinopharynx from "./components/Rrhinopharynx/Rrhinopharynx";
import Oropharynx from "./components/Oropharynx/Oropharynx";
import Larynx from "./components/Larynx/Larynx";
import Conclusion from "./components/Conclusion/Conclusion";

const Videolaryngoscopy = () => (
  <>
    <h1 className={styles["exam-title"]}>Videonasolaringoscopia</h1>
    <form>
      <NasalCavity />
      <Rrhinopharynx />
      <Oropharynx />
      <Larynx />
      <Conclusion />
    </form>
  </>
);

export default Videolaryngoscopy;
