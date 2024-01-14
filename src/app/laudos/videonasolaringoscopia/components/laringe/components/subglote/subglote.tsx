"use client";

import { useState } from "react";

import parentStyles from "../../../../videonasolaringoscopia.module.css";

const Subglote = () => {
  const [subglote, setSubglote] = useState("livre, sem lesões");

  return (
    <li className={parentStyles.itemExame}>
      <label>Subglote</label>
      <textarea
        id="subglote"
        value={subglote}
        onChange={({ target: { value } }) => setSubglote(value)}
      />
    </li>
  );
};

export default Subglote;
