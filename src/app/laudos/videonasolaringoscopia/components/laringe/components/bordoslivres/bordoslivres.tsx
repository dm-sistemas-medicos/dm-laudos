"use client";

import { useState } from "react";

import parentStyles from "../../../../videonasolaringoscopia.module.css";

const BordosLivres = () => {
  const [bordosLivres, setBordosLivres] = useState("regulares, sem lesões");

  return (
    <li className={parentStyles.itemExame}>
      <label>Bordos livres</label>
      <textarea
        rows={1}
        id="bordosLivres"
        value={bordosLivres}
        onChange={({ target: { value } }) => setBordosLivres(value)}
      />
    </li>
  );
};

export default BordosLivres;
