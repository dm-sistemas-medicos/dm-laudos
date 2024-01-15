"use client";

import { useState } from "react";

import parentStyles from "../../../../videonasolaringoscopia.module.css";

const Meatos = () => {
  const [meatos, setMeatos] = useState("pérvios");

  return (
    <li className={parentStyles.itemExame}>
      <label>Meatos</label>
      <textarea
        rows={1}
        id="meatos"
        value={meatos}
        onChange={({ target: { value } }) => setMeatos(value)}
      />
    </li>
  );
};

export default Meatos;
