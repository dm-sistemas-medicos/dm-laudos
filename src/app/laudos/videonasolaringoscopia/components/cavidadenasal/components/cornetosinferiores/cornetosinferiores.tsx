"use client";

import { useState } from "react";

import parentStyles from "../../../../videonasolaringoscopia.module.css";

const CornetosInferiores = () => {
  const [cornetosInferiores, setCornetosInferiores] = useState("normotróficos");

  return (
    <li className={parentStyles.itemExame}>
      <label>Cornetos médios</label>
      <textarea
        rows={1}
        id="cornetosMedios"
        value={cornetosInferiores}
        onChange={({ target: { value } }) => setCornetosInferiores(value)}
      />
    </li>
  );
};

export default CornetosInferiores;
