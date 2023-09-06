"use client";

import parentStyles from "../../videonasolaringoscopia.module.css";

import SeptoNasal from "./components/septonasal/septonasal";
import CornetosInferiores from "./components/cornetosinferiores/cornetosinferiores";
import CornetosMedios from "./components/cornetosmedios/cornetosmedios";
import Secrecao from "./components/secrecao/secrecao";
import Mucosa from "./components/mucosa/mucosa";
import Observacoes from "../observacoes/observacoes";

export const CavidadeNasal = () => (
  <fieldset>
    <h2 className={parentStyles.tituloSecaoExame}>Cavidade Nasal</h2>
    <ul className={parentStyles.itensExame}>
      <SeptoNasal />
      <hr />
      <CornetosInferiores />
      <hr />
      <CornetosMedios />
      <hr />
      <Secrecao />
      <hr />
      <Mucosa />
      <hr />
      <Observacoes />
    </ul>
  </fieldset>
);

export default CavidadeNasal;
