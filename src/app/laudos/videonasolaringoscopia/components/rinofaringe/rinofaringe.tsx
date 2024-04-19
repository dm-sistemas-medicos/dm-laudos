"use client";

import parentStyles from "../../videonasolaringoscopia.module.css";

import ExamItem from "../examitem/examitem";
import Observacoes from "../observacoes/observacoes";

const Rinofaringe = () => (
  <fieldset id="rinofaringe">
    <h2 className={parentStyles.examSectionTitle}>Rinofaringe</h2>
    <ul className={parentStyles.examItemList}>
      <ExamItem id="rinofaringe-mucosa" label="Mucosa" initialText="normal" />
      <hr className={parentStyles.separator} />
      <ExamItem id="rinofaringe-meatos" label="Meatos" initialText="pérvios" />
      <hr className={parentStyles.separator} />
      <ExamItem
        id="rinofaringe-ostiostubarios"
        label="Óstios tubários"
        initialText="visualidados bilateralmente e pérvios"
      />
      <hr className={parentStyles.separator} />
      <ExamItem
        id="rinofaringe-funcaovelofaringea"
        label="Função velofaringea"
        initialText="preservada"
      />
      <hr className={parentStyles.separator} />
      <ExamItem id="rinofaringe-lesoes" initialText="Ausência de lesões" />
      <hr className={parentStyles.separator} />
      <Observacoes parentId="rinofaringe" />
    </ul>
  </fieldset>
);

export default Rinofaringe;
