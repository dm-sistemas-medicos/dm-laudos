"use client";

import { useState } from "react";

import styles from "./TextInput.module.scss";

type TextInputProps = {
  id: string;
  label: string;
  hasDoubleContainer?: boolean;
  isSmallInput?: boolean;
  initialInfo?: string;
};

const TextInput = ({
  id,
  label,
  hasDoubleContainer = false,
  isSmallInput = false,
  initialInfo,
}: TextInputProps) => {
  const [text, setText] = useState(initialInfo);

  return (
    <div
      className={hasDoubleContainer ? styles["double-container"] : undefined}
    >
      <label htmlFor={id}>{label}:</label>
      <input
        id={id}
        className={isSmallInput ? styles["small-input"] : undefined}
        type="text"
        value={text}
        onChange={({ target: { value } }) => setText(value)}
      />
    </div>
  );
};

export default TextInput;
