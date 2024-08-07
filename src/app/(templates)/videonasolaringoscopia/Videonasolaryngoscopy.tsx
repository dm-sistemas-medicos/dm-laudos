"use client";

import { useContext, useEffect } from "react";
import { AsideImagesContext } from "@/app/contexts/aside-images-context";

import NasalCavity from "../components/form/NasalCavity/NasalCavity";
import Rhinopharynx from "../components/form/Rhinopharynx/Rhinopharynx";
import Oropharynx from "../components/form/Oropharynx/Oropharynx";
import Larynx from "../components/form/Larynx/Larynx";
import Conclusion from "../components/form/Conclusion/Conclusion";

import styles from "../layout.module.scss";

const Videonasolaryngoscopy = () => {
  const { setMaxAsideImages } = useContext(AsideImagesContext);

  useEffect(() => {
    setMaxAsideImages(5);
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
