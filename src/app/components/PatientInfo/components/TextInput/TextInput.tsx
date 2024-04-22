"use client";

import { useState } from "react";

import styles from "./TextInput.module.scss";

type TextInputProps = {
  id: string;
  label: string;
  inputSize?: "small";
  initialInfo?: string;
};

const TextInput = ({ id, label, inputSize, initialInfo }: TextInputProps) => {
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

export default TextInput;
