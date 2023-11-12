"use client";

import { useState } from "react";

import parentStyles from "../../../../videonasolaringoscopia.module.css";

const FuncaoVelofaringea = () => {
  const [funcaovelofaringea, setFuncaoVelofaringea] = useState("preservada");

  return (
    <li className={parentStyles.itemExame}>
      <label>Função velofaringea</label>
      <input
        id="funcaovelofaringea"
        type="text"
        value={funcaovelofaringea}
        onChange={({ target: { value } }) => setFuncaoVelofaringea(value)}
      />
    </li>
  );
};

export default FuncaoVelofaringea;
