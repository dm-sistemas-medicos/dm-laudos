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
      <ExamItem
        id="cavidadeNasal-cornetosMedios"
        label="Cornetos médios"
        initialText="normotróficos"
      />
      <ExamItem
        id="cavidadeNasal-cornetosInferiores"
        label="Cornetos inferiores"
        initialText="normotróficos"
      />
      <ExamItem
        id="cavidadeNasal-secrecao"
        label="Secreção"
        initialText="aquosa"
      />
      <ExamItem id="cavidadeNasal-mucosa" label="Mucosa" initialText="pálida" />

      <Observacoes parentId="cavidadeNasal" />
    </ul>
  </fieldset>
);

export default CavidadeNasal;
