"use client";

import { useState } from "react";

import parentStyles from "../../../../videonasolaringoscopia.module.css";

export const Meatos = () => {
  const [meatos, setMeatos] = useState("pérvios");

  return (
    <li className={parentStyles.itemExame}>
      <label>Meatos</label>
      <input
        id="meatos"
        type="text"
        value={meatos}
        onChange={({ target: { value } }) => setMeatos(value)}
      />
    </li>
  );
};

export default Meatos;
