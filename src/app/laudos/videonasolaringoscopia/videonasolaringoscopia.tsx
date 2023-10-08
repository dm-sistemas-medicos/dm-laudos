"use client";

import styles from "./videonasolaringoscopia.module.css";

import CavidadeNasal from "./components/cavidadenasal/cavidadenasal";
import Rinofaringe from "./components/rinofaringe/rinofaringe";

export const VideoNasoLaringoscopia = () => (
  <>
    <h1 className={styles.tituloExame}>Videonasolaringoscopia</h1>
    <form>
      <CavidadeNasal />
      <Rinofaringe />
      <Orofaringe />
    </form>
  </>
);

export default VideoNasoLaringoscopia;
