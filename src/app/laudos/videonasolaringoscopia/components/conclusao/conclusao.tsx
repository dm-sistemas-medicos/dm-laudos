"use client";

import { useState } from "react";

import parentStyles from "../../videonasolaringoscopia.module.css";
import styles from "./conclusao.module.css";

const Conclusao = () => {
  const [conclusao, setConclusao] = useState("");

  return (
    <fieldset>
      <h2 className={parentStyles.examSectionTitle}>Conclusão</h2>
      <ul className={parentStyles.examItemList}>
        <li className={parentStyles.examItem}>
          <textarea
            className={styles.examItemDouble}
            rows={5}
            id="conclusao"
            value={conclusao}
            onChange={({ target: { value } }) => setConclusao(value)}
          />
        </li>
      </ul>
    </fieldset>
  );
};

export default Conclusao;
