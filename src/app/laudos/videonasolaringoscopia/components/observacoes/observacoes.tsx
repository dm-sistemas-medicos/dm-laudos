"use client";

import { useState } from "react";

import parentStyles from "../../videonasolaringoscopia.module.css";

const Observacoes = () => {
  const [observacoes, setObservacoes] = useState("");

  return (
    <li
      className={`${parentStyles.itemExame} ${
        !observacoes.length ? parentStyles.nonPrintable : ""
      }`}
    >
      <label>Observações</label>
      <textarea
        id="observacoes"
        value={observacoes}
        onChange={({ target: { value } }) => setObservacoes(value)}
      />
    </li>
  );
};

export default Observacoes;
