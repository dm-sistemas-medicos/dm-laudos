"use client";

import { useState } from "react";

import { secrecaoOptions } from "./secrecao.options";

import parentStyles from "../../../../videonasolaringoscopia.module.css";

export const Secrecao = () => {
  const [secrecao, setSecrecao] = useState("");

  return (
    <li className={parentStyles.itemExame}>
      <label>Secreção</label>
      <select
        id="secrecao"
        value={secrecao}
        onChange={({ target: { value } }) => setSecrecao(value)}
      >
        {secrecaoOptions.options.map(({ value, text }, i) => (
          <option key={i} value={value}>
            {text}
          </option>
        ))}
      </select>
    </li>
  );
};

export default Secrecao;
