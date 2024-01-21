"use client";

import { useState } from "react";

import parentStyles from "../../../../videonasolaringoscopia.module.css";

const Mucosa = () => {
  const [mucosa, setMucosa] = useState("pálida");

  return (
    <li className={parentStyles.itemExame}>
      <label>Mucosa</label>
      <textarea
        rows={1}
        id="mucosa"
        value={mucosa}
        onChange={({ target: { value } }) => setMucosa(value)}
      />
    </li>
  );
};

export default Mucosa;
