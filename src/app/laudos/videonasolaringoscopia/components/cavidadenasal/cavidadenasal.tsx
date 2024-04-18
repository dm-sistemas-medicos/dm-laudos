"use client";

import parentStyles from "../../videonasolaringoscopia.module.css";

import ExamItem from "../examitem/examitem";
import Observacoes from "../observacoes/observacoes";

const CavidadeNasal = () => (
  <fieldset>
    <h2 className={parentStyles.tituloSecaoExame}>Cavidade Nasal</h2>
    <ul className={parentStyles.itensExame}>
      <ExamItem
        id="septoNasal"
        label="Septo nasal"
        initialText="desvio para direita, com esporão ósseo associado, parcialmente obstrutivo"
        rows={2}
      />
      <hr className={parentStyles.separator} />
      <ExamItem
        id="cornetosMedios"
        label="Cornetos médios"
        initialText="normotróficos"
      />
      <hr className={parentStyles.separator} />
      <ExamItem
        id="cornetosInferiores"
        label="Cornetos inferiores"
        initialText="normotróficos"
      />
      <hr className={parentStyles.separator} />
      <ExamItem id="secrecao" label="Secreção" initialText="aquosa" />
      <hr className={parentStyles.separator} />
      <ExamItem id="mucosa" label="Mucosa" initialText="pálida" />
      <hr className={parentStyles.separator} />
      <Observacoes />
    </ul>
  </fieldset>
);

export default CavidadeNasal;
