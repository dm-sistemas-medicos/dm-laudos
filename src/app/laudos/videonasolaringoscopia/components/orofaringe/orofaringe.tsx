"use client";

import parentStyles from "../../videonasolaringoscopia.module.scss";

import ExamItem from "../examitem/examitem";
import Observacoes from "../observacoes/observacoes";

const Orofaringe = () => (
  <fieldset id="orofaringe">
    <h2 className={parentStyles.examSectionTitle}>Orofaringe</h2>
    <ul className={parentStyles.examItemList}>
      <ExamItem
        id="orofaringe-orofaringe"
        label="Orofaringe"
        initialText="e hipofaringe com mucosa normal"
      />
      <ExamItem
        id="orofaringe-baseLingua"
        label="Base da língua"
        initialText="sem alterações"
      />
      <ExamItem
        id="orofaringe-valeculas"
        label="Valéculas e seios piriformes"
        initialText="livres"
      />
      <Observacoes parentId="orofaringe" />
    </ul>
  </fieldset>
);

export default Orofaringe;
