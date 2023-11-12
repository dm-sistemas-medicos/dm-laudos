"use client";

import parentStyles from "../../videonasolaringoscopia.module.css";

import Mucosa from "./components/mucosa/mucosa";
import Meatos from "./components/meatos/meatos";
import OstiosTubarios from "./components/ostiostubarios/ostiostubarios";
import FuncaoVelofaringea from "./components/funcaovelofaringea/funcaovelofaringea";
import Lesoes from "./components/lesoes/lesoes";
import Observacoes from "../observacoes/observacoes";

export const Rinofaringe = () => (
  <fieldset>
    <h2 className={parentStyles.tituloSecaoExame}>Rinofaringe</h2>
    <ul className={parentStyles.itensExame}>
      <Mucosa />
      <hr className={parentStyles.separator} />
      <Meatos />
      <hr className={parentStyles.separator} />
      <OstiosTubarios />
      <hr className={parentStyles.separator} />
      <FuncaoVelofaringea />
      <hr className={parentStyles.separator} />
      <Lesoes />
      <hr className={parentStyles.separator} />
      <Observacoes />
    </ul>
  </fieldset>
);

export default Rinofaringe;
