"use client";

import { useState } from "react";

import parentStyles from "../../../../videonasolaringoscopia.module.css";

const SeptoNasal = () => {
  const [septoNasal, setSeptoNasal] = useState(
    "desvio para direita, com esporão ósseo associado, parcialmente obstrutivo"
  );

  return (
    <li className={parentStyles.itemExame}>
      <label>Septo nasal</label>
      <textarea
        rows={2}
        id="septoNasal"
        value={septoNasal}
        onChange={({ target: { value } }) => setSeptoNasal(value)}
      />
    </li>
  );
};

export default SeptoNasal;
