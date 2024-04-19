"use client";

import parentStyles from "../../videonasolaringoscopia.module.css";

import ExamItem from "../examitem/examitem";
import Observacoes from "../observacoes/observacoes";

const Laringe = () => (
  <fieldset id="laringe">
    <h2 className={parentStyles.examSectionTitle}>Laringe</h2>
    <ul className={parentStyles.examItemList}>
      <ExamItem
        id="laringe-pregasVocais"
        label="Pregas vocais"
        initialText="com mobilidade preservada bilateralmente"
      />
      <ExamItem
        id="laringe-bordosLivres"
        label="Bordos livres"
        initialText="regulares, sem lesões"
      />
      <ExamItem id="laringe-coaptacao" label="Coaptação" initialText="normal" />
      <ExamItem
        id="laringe-mucosa"
        label="Mucosa"
        initialText="com hiperemia e edema leve"
      />
      <ExamItem
        id="laringe-subglote"
        label="Subglote"
        initialText="livre, sem lesões"
      />
      <Observacoes parentId="laringe" />
    </ul>
  </fieldset>
);

export default Laringe;
