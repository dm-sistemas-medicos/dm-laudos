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
      <hr />
      <Meatos />
      <hr />
      <OstiosTubarios />
      <hr />
      <FuncaoVelofaringea />
      <hr />
      <Lesoes />
      <hr />
      <Observacoes />
    </ul>
  </fieldset>
);

export default Rinofaringe;
