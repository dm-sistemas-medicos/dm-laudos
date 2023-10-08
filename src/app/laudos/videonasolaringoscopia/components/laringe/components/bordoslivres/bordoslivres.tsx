"use client";

import { useState } from "react";

import parentStyles from "../../../../videonasolaringoscopia.module.css";

export const BordosLivres = () => {
  const [bordosLivres, setBordosLivres] = useState("regulares, sem lesões");

  return (
    <li className={parentStyles.itemExame}>
      <label>Bordos livres</label>
      <input
        id="bordosLivres"
        type="text"
        value={bordosLivres}
        onChange={({ target: { value } }) => setBordosLivres(value)}
      />
    </li>
  );
};

export default BordosLivres;
