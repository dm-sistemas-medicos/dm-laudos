"use client";

import { useState } from "react";

import parentStyles from "../../layout.module.scss";

const Conclusion = () => {
  const [conclusion, setConclusion] = useState("");

  return (
    <fieldset data-testid="conclusion-container">
      <h2 className={parentStyles["exam-section-title"]}>Conclusão</h2>
      <ul className={parentStyles["exam-item-list"]}>
        <li className={parentStyles["exam-item"]}>
          <textarea
            id="conclusion"
            data-testid="conclusion"
            className={parentStyles["exam-item-double"]}
            rows={5}
            value={conclusion}
            onChange={({ target: { value } }) => setConclusion(value)}
            aria-label="Conclusão"
          />
        </li>
      </ul>
    </fieldset>
  );
};

export default Conclusion;
