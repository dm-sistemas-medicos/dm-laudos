"use client";

import parentStyles from "../../videonasolaringoscopia.module.css";

import ExamItem from "../examitem/examitem";
import Observacoes from "../observacoes/observacoes";

const CavidadeNasal = () => (
  <fieldset id="cavidadeNasal">
    <h2 className={parentStyles.examSectionTitle}>Cavidade Nasal</h2>
    <ul className={parentStyles.examItemList}>
      <ExamItem
        id="cavidadeNasal-septoNasal"
        label="Septo nasal"
        initialText="desvio para direita, com esporão ósseo associado, parcialmente obstrutivo"
        rows={2}
      />
      <hr className={parentStyles.separator} />
      <ExamItem
        id="cavidadeNasal-cornetosMedios"
        label="Cornetos médios"
        initialText="normotróficos"
      />
      <hr className={parentStyles.separator} />
      <ExamItem
        id="cavidadeNasal-cornetosInferiores"
        label="Cornetos inferiores"
        initialText="normotróficos"
      />
      <hr className={parentStyles.separator} />
      <ExamItem
        id="cavidadeNasal-secrecao"
        label="Secreção"
        initialText="aquosa"
      />
      <hr className={parentStyles.separator} />
      <ExamItem id="cavidadeNasal-mucosa" label="Mucosa" initialText="pálida" />
      <hr className={parentStyles.separator} />
      <Observacoes parentId="cavidadeNasal" />
    </ul>
  </fieldset>
);

export default CavidadeNasal;
