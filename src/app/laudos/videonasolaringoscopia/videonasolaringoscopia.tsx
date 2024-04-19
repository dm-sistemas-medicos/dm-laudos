"use client";

import styles from "./videonasolaringoscopia.module.scss";

import CavidadeNasal from "./components/cavidadenasal/cavidadenasal";
import Rinofaringe from "./components/rinofaringe/rinofaringe";
import Orofaringe from "./components/orofaringe/orofaringe";
import Laringe from "./components/laringe/laringe";
import Conclusao from "./components/conclusao/conclusao";

const VideoNasoLaringoscopia = () => (
  <>
    <h1 className={styles.examTitle}>Videonasolaringoscopia</h1>
    <form>
      <CavidadeNasal />
      <Rinofaringe />
      <Orofaringe />
      <Laringe />
      <Conclusao />
    </form>
  </>
);

export default VideoNasoLaringoscopia;
