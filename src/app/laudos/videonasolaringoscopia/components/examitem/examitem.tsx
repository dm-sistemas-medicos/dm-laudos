"use client";

import { useState } from "react";

import parentStyles from "../../videonasolaringoscopia.module.css";

type ExamItemProps = {
  id: string;
  initialText: string;
  label?: string;
  ariaLabel?: string;
  rows?: number;
};

const ExamItem = ({
  id,
  initialText,
  label,
  ariaLabel,
  rows,
}: ExamItemProps) => {
  const [text, setText] = useState(initialText);

  return (
    <li className={parentStyles.examItem}>
      {label && <label htmlFor={id}>{label}</label>}
      <textarea
        className={!label ? parentStyles.examItemDouble : ""}
        id={id}
        rows={rows || 1}
        value={text}
        onChange={({ target: { value } }) => setText(value)}
        aria-label={ariaLabel}
      />
    </li>
  );
};

export default ExamItem;
