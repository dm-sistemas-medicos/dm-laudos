"use client";

import { useState } from "react";

import parentStyles from "../../Videolaryngoscopy.module.scss";

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
    <li className={parentStyles["exam-item"]} data-testid={id}>
      {label && <label htmlFor={id}>{label}</label>}
      <textarea
        className={!label ? parentStyles["exam-item-double"] : ""}
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
