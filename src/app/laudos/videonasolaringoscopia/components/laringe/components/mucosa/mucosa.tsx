"use client";

import { useState } from "react";

import parentStyles from "../../../../videonasolaringoscopia.module.css";

const Mucosa = () => {
  const [mucosa, setMucosa] = useState("com hiperemia e edema leve");

  return (
    <li className={parentStyles.itemExame}>
      <label>Mucosa</label>
      <textarea
        id="mucosa"
        value={mucosa}
        onChange={({ target: { value } }) => setMucosa(value)}
      />
    </li>
  );
};

export default Mucosa;
