"use client";

import { useState } from "react";

import styles from "./InfoInput.module.scss";

type InfoInputProps = {
  id: string;
  label: string;
  inputSize?: "small";
  initialInfo?: string;
};

const InfoInput = ({ id, label, inputSize, initialInfo }: InfoInputProps) => {
  const [info, setInfo] = useState(initialInfo);

  return (
    <div>
      <label htmlFor={id}>{label}:</label>
      <input
        id={id}
        className={inputSize ? styles[`${inputSize}-input`] : undefined}
        type="text"
        value={info}
        onChange={({ target: { value } }) => setInfo(value)}
      />
    </div>
  );
};

export default InfoInput;
