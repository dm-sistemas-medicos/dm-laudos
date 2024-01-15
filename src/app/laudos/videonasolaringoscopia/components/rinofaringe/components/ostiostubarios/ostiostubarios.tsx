"use client";

import { useState } from "react";

import parentStyles from "../../../../videonasolaringoscopia.module.css";

const OstiosTubarios = () => {
  const [ostiostubarios, setOstiosTubarios] = useState(
    "visualidados bilateralmente e pérvios"
  );

  return (
    <li className={parentStyles.itemExame}>
      <label>Óstios tubários</label>
      <textarea
        rows={1}
        id="ostiostubarios"
        value={ostiostubarios}
        onChange={({ target: { value } }) => setOstiosTubarios(value)}
      />
    </li>
  );
};

export default OstiosTubarios;
