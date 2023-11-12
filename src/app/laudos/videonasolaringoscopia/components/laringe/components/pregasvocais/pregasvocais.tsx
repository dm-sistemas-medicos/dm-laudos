"use client";

import { useState } from "react";

import parentStyles from "../../../../videonasolaringoscopia.module.css";

const PregasVocais = () => {
  const [pregasVocais, setPregasVocais] = useState(
    "com mobilidade preservada bilateralmente"
  );

  return (
    <li className={parentStyles.itemExame}>
      <label>Pregas vocais</label>
      <input
        id="pregasVocais"
        type="text"
        value={pregasVocais}
        onChange={({ target: { value } }) => setPregasVocais(value)}
      />
    </li>
  );
};

export default PregasVocais;
