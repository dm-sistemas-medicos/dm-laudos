"use client";

import { useState } from "react";

import parentStyles from "../../../../videonasolaringoscopia.module.css";
import styles from "./lesoes.module.css";

const Lesoes = () => {
  const [lesoes, setLesoes] = useState("Ausência de lesões");

  return (
    <li className={parentStyles.itemExame}>
      <textarea
        className={styles.itemExameDouble}
        id="lesoes"
        value={lesoes}
        onChange={({ target: { value } }) => setLesoes(value)}
      />
    </li>
  );
};

export default Lesoes;
