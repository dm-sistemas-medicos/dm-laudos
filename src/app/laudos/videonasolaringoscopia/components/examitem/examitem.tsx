"use client";

import { useState } from "react";

import parentStyles from "../../videonasolaringoscopia.module.css";

type ExamItemProps = {
  id: string;
  initialText: string;
  label?: string;
  rows?: number;
};

const ExamItem = ({ id, initialText, label, rows }: ExamItemProps) => {
  const [text, setText] = useState(initialText);

  return (
    <li className={parentStyles.examItem}>
      {label && <label>{label}</label>}
      <textarea
        className={!label ? parentStyles.examItemDouble : ""}
        id={id}
        rows={rows || 1}
        value={text}
        onChange={({ target: { value } }) => setText(value)}
      />
    </li>
  );
};

export default ExamItem;
