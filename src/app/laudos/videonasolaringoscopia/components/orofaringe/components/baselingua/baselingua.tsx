"use client";

import { useState } from "react";

import parentStyles from "../../../../videonasolaringoscopia.module.css";

export const BaseLingua = () => {
  const [baseLingua, setBaseLingua] = useState(
    "valéculas e seios piriformes livres"
  );

  return (
    <li className={parentStyles.itemExame}>
      <label>Base de língua</label>
      <input
        id="baseLingua"
        type="text"
        value={baseLingua}
        onChange={({ target: { value } }) => setBaseLingua(value)}
      />
    </li>
  );
};

export default BaseLingua;
