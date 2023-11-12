"use client";

import { useState } from "react";

import parentStyles from "../../../../videonasolaringoscopia.module.css";

const Coaptacao = () => {
  const [coaptacao, setCoaptacao] = useState("normal");

  return (
    <li className={parentStyles.itemExame}>
      <label>Coaptação</label>
      <input
        id="coaptacao"
        type="text"
        value={coaptacao}
        onChange={({ target: { value } }) => setCoaptacao(value)}
      />
    </li>
  );
};

export default Coaptacao;
