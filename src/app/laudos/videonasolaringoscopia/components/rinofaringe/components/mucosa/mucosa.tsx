"use client";

import { useState } from "react";

import parentStyles from "../../../../videonasolaringoscopia.module.css";

const Mucosa = () => {
  const [mucosa, setMucosa] = useState("normal");

  return (
    <li className={parentStyles.itemExame}>
      <label>Mucosa</label>
      <input
        id="mucosa"
        type="text"
        value={mucosa}
        onChange={({ target: { value } }) => setMucosa(value)}
      />
    </li>
  );
};

export default Mucosa;
