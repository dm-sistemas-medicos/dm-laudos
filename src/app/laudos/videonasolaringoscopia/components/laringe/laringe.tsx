"use client";

import parentStyles from "../../videonasolaringoscopia.module.css";

import ExamItem from "../examitem/examitem";
import Observacoes from "../observacoes/observacoes";

const Laringe = () => (
  <fieldset id="laringe">
    <h2 className={parentStyles.tituloSecaoExame}>Laringe</h2>
    <ul className={parentStyles.itensExame}>
      <ExamItem
        id="laringe-pregasVocais"
        label="Pregas vocais"
        initialText="com mobilidade preservada bilateralmente"
      />
      <hr className={parentStyles.separator} />
      <ExamItem
        id="laringe-bordosLivres"
        label="Bordos livres"
        initialText="regulares, sem lesões"
      />
      <hr className={parentStyles.separator} />
      <ExamItem id="laringe-coaptacao" label="Coaptação" initialText="normal" />
      <hr className={parentStyles.separator} />
      <ExamItem
        id="laringe-mucosa"
        label="Mucosa"
        initialText="com hiperemia e edema leve"
      />
      <hr className={parentStyles.separator} />
      <ExamItem
        id="laringe-subglote"
        label="Subglote"
        initialText="livre, sem lesões"
      />
      <hr className={parentStyles.separator} />
      <Observacoes parentId="laringe" />
    </ul>
  </fieldset>
);

export default Laringe;
