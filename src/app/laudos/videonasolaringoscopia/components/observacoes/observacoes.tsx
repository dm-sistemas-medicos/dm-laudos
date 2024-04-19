"use client";

import { useState } from "react";

import parentStyles from "../../videonasolaringoscopia.module.css";

type ObservacoesProps = {
  parentId?: string;
};

const Observacoes = ({ parentId }: ObservacoesProps) => {
  const [observacoes, setObservacoes] = useState("");

  return (
    <li
      className={`${parentStyles.examItem} ${
        !observacoes.length ? parentStyles.nonPrintable : ""
      }`}
    >
      <textarea
        className={parentStyles.examItemDouble}
        rows={1}
        id={`${parentId ? `${parentId}-` : ""}observacoes`}
        placeholder="Observações"
        value={observacoes}
        onChange={({ target: { value } }) => setObservacoes(value)}
      />
    </li>
  );
};

export default Observacoes;
