"use client";

import parentStyles from "../../videonasolaringoscopia.module.css";

import ExamItem from "../examitem/examitem";
import Observacoes from "../observacoes/observacoes";

const Orofaringe = () => (
  <fieldset>
    <h2 className={parentStyles.tituloSecaoExame}>Orofaringe</h2>
    <ul className={parentStyles.itensExame}>
      <ExamItem
        id="orofaringe"
        label="Orofaringe"
        initialText="e hipofaringe com mucosa normal"
      />
      <hr className={parentStyles.separator} />
      <ExamItem
        id="baseLingua"
        label="Base da língua"
        initialText="sem alterações"
      />
      <hr className={parentStyles.separator} />
      <ExamItem
        id="valeculas"
        label="Valéculas e seios piriformes"
        initialText="livres"
      />
      <hr className={parentStyles.separator} />
      <Observacoes />
    </ul>
  </fieldset>
);

export default Orofaringe;
