"use client";

import parentStyles from "../../videonasolaringoscopia.module.css";

import Observacoes from "../observacoes/observacoes";

export const Rinofaringe = () => (
  <fieldset>
    <h2 className={parentStyles.tituloSecaoExame}>Rinofaringe</h2>
    <ul className={parentStyles.itensExame}>
      <hr />
      <Observacoes />
    </ul>
  </fieldset>
);

export default Rinofaringe;
