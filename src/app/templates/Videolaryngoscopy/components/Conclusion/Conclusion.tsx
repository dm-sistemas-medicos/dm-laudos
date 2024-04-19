"use client";

import { useState } from "react";

import parentStyles from "../../Videolaryngoscopy.module.scss";

const Conclusion = () => {
  const [conclusion, setConclusion] = useState("");

  return (
    <fieldset>
      <h2 className={parentStyles["exam-section-title"]}>Conclusão</h2>
      <ul className={parentStyles["exam-item-list"]}>
        <li className={parentStyles["exam-item"]}>
          <textarea
            className={parentStyles["exam-item-double"]}
            rows={5}
            id="conclusion"
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
