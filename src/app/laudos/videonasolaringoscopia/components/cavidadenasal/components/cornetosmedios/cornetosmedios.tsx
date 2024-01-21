"use client";

import { useState } from "react";

import parentStyles from "../../../../videonasolaringoscopia.module.css";

const CornetosMedios = () => {
  const [cornetosMedios, setCornetosMedios] = useState("normotróficos");

  return (
    <li className={parentStyles.itemExame}>
      <label>Cornetos médios</label>
      <textarea
        rows={1}
        id="cornetosMedios"
        value={cornetosMedios}
        onChange={({ target: { value } }) => setCornetosMedios(value)}
      />
    </li>
  );
};

export default CornetosMedios;
