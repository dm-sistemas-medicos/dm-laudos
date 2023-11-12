"use client";

import parentStyles from "../../videonasolaringoscopia.module.css";

import Mucosa from "./components/mucosa/mucosa";
import BaseLingua from "./components/baselingua/baselingua";
import Observacoes from "../observacoes/observacoes";

export const Orofaringe = () => (
  <fieldset>
    <h2 className={parentStyles.tituloSecaoExame}>Orofaringe</h2>
    <ul className={parentStyles.itensExame}>
      <Mucosa />
      <hr className={parentStyles.separator} />
      <BaseLingua />
      <hr className={parentStyles.separator} />
      <Observacoes />
    </ul>
  </fieldset>
);

export default Orofaringe;
