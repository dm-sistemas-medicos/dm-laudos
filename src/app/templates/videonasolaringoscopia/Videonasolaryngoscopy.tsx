"use client";

import { useContext, useEffect } from "react";
import { ImagesContext } from "@/app/contexts/images-context";

import NasalCavity from "../components/NasalCavity/NasalCavity";
import Rhinopharynx from "../components/Rhinopharynx/Rhinopharynx";
import Oropharynx from "../components/Oropharynx/Oropharynx";
import Larynx from "../components/Larynx/Larynx";
import Conclusion from "../components/Conclusion/Conclusion";

import styles from "../layout.module.scss";

const Videonasolaryngoscopy = () => {
  const { setMaxAsideImages } = useContext(ImagesContext);

  useEffect(() => {
    setMaxAsideImages(4);
  }, [setMaxAsideImages]);

  return (
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
};

export default Videonasolaryngoscopy;
