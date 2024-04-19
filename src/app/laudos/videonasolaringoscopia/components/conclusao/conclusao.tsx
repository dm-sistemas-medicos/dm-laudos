"use client";

import { useState } from "react";

import parentStyles from "../../videonasolaringoscopia.module.scss";

const Conclusao = () => {
  const [conclusao, setConclusao] = useState("");

  return (
    <fieldset>
      <h2 className={parentStyles.examSectionTitle}>Conclusão</h2>
      <ul className={parentStyles.examItemList}>
        <li className={parentStyles.examItem}>
          <textarea
            className={parentStyles.examItemDouble}
            rows={5}
            id="conclusao"
            value={conclusao}
            onChange={({ target: { value } }) => setConclusao(value)}
            aria-label="Conclusão"
          />
        </li>
      </ul>
    </fieldset>
  );
};

export default Conclusao;
