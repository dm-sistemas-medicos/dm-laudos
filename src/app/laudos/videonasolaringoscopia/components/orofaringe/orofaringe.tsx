"use client";

import parentStyles from "../../videonasolaringoscopia.module.css";

import ExamItem from "../examitem/examitem";
import Observacoes from "../observacoes/observacoes";

const Orofaringe = () => (
  <fieldset id="orofaringe">
    <h2 className={parentStyles.tituloSecaoExame}>Orofaringe</h2>
    <ul className={parentStyles.itensExame}>
      <ExamItem
        id="orofaringe-orofaringe"
        label="Orofaringe"
        initialText="e hipofaringe com mucosa normal"
      />
      <hr className={parentStyles.separator} />
      <ExamItem
        id="orofaringe-baseLingua"
        label="Base da língua"
        initialText="sem alterações"
      />
      <hr className={parentStyles.separator} />
      <ExamItem
        id="orofaringe-valeculas"
        label="Valéculas e seios piriformes"
        initialText="livres"
      />
      <hr className={parentStyles.separator} />
      <Observacoes parentId="orofaringe" />
    </ul>
  </fieldset>
);

export default Orofaringe;
