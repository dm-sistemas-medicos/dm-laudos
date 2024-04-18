"use client";

import parentStyles from "../../videonasolaringoscopia.module.css";

import ExamItem from "../examitem/examitem";
import Observacoes from "../observacoes/observacoes";

const Rinofaringe = () => (
  <fieldset>
    <h2 className={parentStyles.tituloSecaoExame}>Rinofaringe</h2>
    <ul className={parentStyles.itensExame}>
      <ExamItem id="mucosa" label="Mucosa" initialText="normal" />
      <hr className={parentStyles.separator} />
      <ExamItem id="meatos" label="Meatos" initialText="pérvios" />
      <hr className={parentStyles.separator} />
      <ExamItem
        id="ostiostubarios"
        label="Óstios tubários"
        initialText="visualidados bilateralmente e pérvios"
      />
      <hr className={parentStyles.separator} />
      <ExamItem
        id="funcaovelofaringea"
        label="Função velofaringea"
        initialText="preservada"
      />
      <hr className={parentStyles.separator} />
      <ExamItem id="lesoes" initialText="Ausência de lesões" />
      <hr className={parentStyles.separator} />
      <Observacoes />
    </ul>
  </fieldset>
);

export default Rinofaringe;
