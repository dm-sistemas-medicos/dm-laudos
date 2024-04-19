"use client";

import parentStyles from "../../Videolaryngoscopy.module.scss";

import ExamItem from "../ExamItem/ExamItem";
import Comments from "../Comments/Comments";

const Larynx = () => (
  <fieldset id="larynx">
    <h2 className={parentStyles["exam-section-title"]}>Laringe</h2>
    <ul className={parentStyles["exam-item-list"]}>
      <ExamItem
        id="larynx-vocal-folds"
        label="Pregas vocais"
        initialText="com mobilidade preservada bilateralmente"
      />
      <ExamItem
        id="larynx-free-edges"
        label="Bordos livres"
        initialText="regulares, sem lesões"
      />
      <ExamItem id="larynx-coaptation" label="Coaptação" initialText="normal" />
      <ExamItem
        id="larynx-mucosa"
        label="Mucosa"
        initialText="com hiperemia e edema leve"
      />
      <ExamItem
        id="larynx-subglottis"
        label="Subglote"
        initialText="livre, sem lesões"
      />
      <Comments parentId="larynx" />
    </ul>
  </fieldset>
);

export default Larynx;
