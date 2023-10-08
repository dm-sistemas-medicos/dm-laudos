"use client";

import { useState } from "react";

import parentStyles from "../../../../videonasolaringoscopia.module.css";

export const OstiosTubarios = () => {
  const [ostiostubarios, setOstiosTubarios] = useState(
    "visualidados bilateralmente e pérvios"
  );

  return (
    <li className={parentStyles.itemExame}>
      <label>Óstios tubários</label>
      <input
        id="ostiostubarios"
        type="text"
        value={ostiostubarios}
        onChange={({ target: { value } }) => setOstiosTubarios(value)}
      />
    </li>
  );
};

export default OstiosTubarios;
