"use client";

import { useState } from "react";

import { mucosaOptions } from "./mucosa.options";

import parentStyles from "../../../../videonasolaringoscopia.module.css";

export const Mucosa = () => {
  const [mucosa, setMucosa] = useState("");

  return (
    <li className={parentStyles.itemExame}>
      <label>Mucosa:</label>
      <select
        id="mucosa"
        value={mucosa}
        onChange={({ target: { value } }) => setMucosa(value)}
      >
        {mucosaOptions.options.map(({ value, text }, i) => (
          <option key={i} value={value}>
            {text}
          </option>
        ))}
      </select>
    </li>
  );
};

export default Mucosa;
