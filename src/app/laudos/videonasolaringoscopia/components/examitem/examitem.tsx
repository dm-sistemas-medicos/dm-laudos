"use client";

import { useState } from "react";

import parentStyles from "../../videonasolaringoscopia.module.css";

type ExamItemProps = {
  id: string;
  label: string;
  initialText: string;
  rows?: number;
};

const ExamItem = ({ id, label, initialText, rows }: ExamItemProps) => {
  const [text, setText] = useState(initialText);

  return (
    <li className={parentStyles.itemExame}>
      <label>{label}</label>
      <textarea
        id={id}
        rows={rows || 1}
        value={text}
        onChange={({ target: { value } }) => setText(value)}
      />
    </li>
  );
};

export default ExamItem;
