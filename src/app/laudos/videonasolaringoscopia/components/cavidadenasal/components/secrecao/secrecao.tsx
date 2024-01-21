"use client";

import { useState } from "react";

import parentStyles from "../../../../videonasolaringoscopia.module.css";

const Secrecao = () => {
  const [secrecao, setSecrecao] = useState("aquosa");

  return (
    <li className={parentStyles.itemExame}>
      <label>Secreção</label>
      <textarea
        rows={1}
        id="secrecao"
        value={secrecao}
        onChange={({ target: { value } }) => setSecrecao(value)}
      />
    </li>
  );
};

export default Secrecao;
