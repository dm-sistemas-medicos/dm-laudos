"use client";

import ExamItem from "../ExamItem/ExamItem";
import Comments from "../Comments/Comments";

import parentStyles from "../../exams/exams.module.scss";

const Rhinopharynx = () => (
  <fieldset data-testid="rhinopharynx-container">
    <h2 className={parentStyles["exam-section-title"]}>Rinofaringe</h2>
    <ul className={parentStyles["exam-item-list"]}>
      <ExamItem id="rhinopharynx-mucosa" label="Mucosa" initialText="normal" />
      <ExamItem id="rhinopharynx-meatus" label="Meatos" initialText="pérvios" />
      <ExamItem
        id="rhinopharynx-tubal-ostia"
        label="Óstios tubários"
        initialText="visualidados bilateralmente e pérvios"
      />
      <ExamItem
        id="rhinopharynx-velopharyngeal-function"
        label="Função velofaringea"
        initialText="preservada"
      />
      <ExamItem
        id="rhinopharynx-injuries"
        initialText="Ausência de lesões"
        ariaLabel="Lesões"
      />
      <Comments parentId="rhinopharynx" />
    </ul>
  </fieldset>
);

export default Rhinopharynx;
