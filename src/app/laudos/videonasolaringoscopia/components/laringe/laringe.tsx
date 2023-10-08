"use client";

import parentStyles from "../../videonasolaringoscopia.module.css";

import PregasVocais from "./components/pregasvocais/pregasvocais";
import BordosLivres from "./components/bordoslivres/bordoslivres";
import Coaptacao from "./components/coaptacao/coaptacao";
import Mucos from "./components/mucosa/mucosa";
import Subglote from "./components/subglote/subglote";
import Observacoes from "../observacoes/observacoes";

export const Laringe = () => (
  <fieldset>
    <h2 className={parentStyles.tituloSecaoExame}>Laringe</h2>
    <ul className={parentStyles.itensExame}>
      <PregasVocais />
      <hr />
      <BordosLivres />
      <hr />
      <Coaptacao />
      <hr />
      <Mucos />
      <hr />
      <Subglote />
      <hr />
      <Observacoes />
    </ul>
  </fieldset>
);

export default Laringe;
