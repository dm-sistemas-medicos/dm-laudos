"use client";

import parentStyles from "../../videonasolaringoscopia.module.css";

import ExamItem from "../examitem/examitem";
import Observacoes from "../observacoes/observacoes";

const Laringe = () => (
  <fieldset>
    <h2 className={parentStyles.tituloSecaoExame}>Laringe</h2>
    <ul className={parentStyles.itensExame}>
      <ExamItem
        id="pregasVocais"
        label="Pregas vocais"
        initialText="com mobilidade preservada bilateralmente"
      />
      <hr className={parentStyles.separator} />
      <ExamItem
        id="bordosLivres"
        label="Bordos livres"
        initialText="regulares, sem lesões"
      />
      <hr className={parentStyles.separator} />
      <ExamItem id="coaptacao" label="Coaptação" initialText="normal" />
      <hr className={parentStyles.separator} />
      <ExamItem
        id="mucosa"
        label="Mucosa"
        initialText="com hiperemia e edema leve"
      />
      <hr className={parentStyles.separator} />
      <ExamItem
        id="subglote"
        label="Subglote"
        initialText="livre, sem lesões"
      />
      <hr className={parentStyles.separator} />
      <Observacoes />
    </ul>
  </fieldset>
);

export default Laringe;
