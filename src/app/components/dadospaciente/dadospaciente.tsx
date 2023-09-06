"use client";

import { useEffect, useState } from "react";

import styles from "./dadospaciente.module.css";

export const DadosPaciente = () => {
  const hoje = new Date();

  const [nomePaciente, setNomePaciente] = useState("");

  const [numeroProntuario, setNumeroProntuario] = useState("");

  const [dataLaudo, setDataLaudo] = useState(
    hoje.toISOString().substring(0, 10)
  );

  const [nomeSolicitante, setNomeSolicitante] = useState(
    "DRA MARIANA MACHOSKI"
  );

  const [dataNascimento, setDataNascimento] = useState("");

  const [tempoVida, setTempoVida] = useState("");

  const [nomeOperador, setNomeOperador] = useState("DRA MARIANA MACHOSKI");

  const [nomeConvenio, setNomeConvenio] = useState("");

  useEffect(() => {
    const diffDias =
      (new Date(dataLaudo).getTime() - new Date(dataNascimento).getTime()) /
      1000 /
      60 /
      60 /
      24;

    const anosVida = Math.trunc(diffDias / 365);
    const mesesVida = Math.trunc((diffDias % 365) / 30);
    const diasVida = Math.trunc((diffDias % 365) % 30);

    const anosVidaTexto = anosVida ? ` ${anosVida}a` : "";
    const mesesVidaTexto = mesesVida ? ` ${mesesVida}m` : "";
    const diasVidaTexto = diasVida ? ` ${diasVida}d` : "";

    setTempoVida(`${anosVidaTexto}${mesesVidaTexto}${diasVidaTexto}`);
  }, [dataLaudo, dataNascimento]);

  return (
    <form className={styles.dadosPaciente}>
      <div className={styles.dadoPaciente}>
        <label>Nome:</label>
        <input
          className={styles.dadoPacienteInput}
          id="nomePaciente"
          type="text"
          value={nomePaciente}
          onChange={({ target: { value } }) => setNomePaciente(value)}
        />
      </div>
      <div className={styles.dadoPaciente}>
        <label>Prontuário:</label>
        <input
          className={`${styles.dadoPacienteInput} ${styles.dadoPacienteInputSmall}`}
          id="numeroProntuario"
          type="text"
          width={48}
          value={numeroProntuario}
          onChange={({ target: { value } }) => setNumeroProntuario(value)}
        />
      </div>
      <div className={styles.dadoPaciente}>
        <label>Data:</label>
        <input
          className={`${styles.dadoPacienteInput} ${styles.dadoPacienteInputMedium}`}
          id="dataLaudo"
          type="date"
          value={dataLaudo}
          onChange={({ target: { value } }) => setDataLaudo(value)}
        />
      </div>
      <div className={styles.dadoPaciente}>
        <label>Solicitante:</label>
        <input
          className={styles.dadoPacienteInput}
          id="nomeSolicitante"
          type="text"
          value={nomeSolicitante}
          onChange={({ target: { value } }) => setNomeSolicitante(value)}
        />
      </div>
      <div className={`${styles.dadoPaciente} ${styles.dadoPacienteExtra}`}>
        <label>Nascimento:</label>
        <input
          className={`${styles.dadoPacienteInput} ${styles.dadoPacienteInputMedium}`}
          id="dataNascimento"
          type="date"
          value={dataNascimento}
          onChange={({ target: { value } }) => setDataNascimento(value)}
        />
        <span>{tempoVida}</span>
      </div>
      <div className={styles.dadoPaciente}>
        <label>Operador:</label>
        <input
          className={styles.dadoPacienteInput}
          id="nomeOperador"
          type="text"
          value={nomeOperador}
          onChange={({ target: { value } }) => setNomeOperador(value)}
        />
      </div>
      <div className={`${styles.dadoPaciente} ${styles.dadoPacienteExtra}`}>
        <label>Convênio:</label>
        <input
          className={`${styles.dadoPacienteInput} ${styles.dadoPacienteInputFull}`}
          id="nomeConvenio"
          type="text"
          value={nomeConvenio}
          onChange={({ target: { value } }) => setNomeConvenio(value)}
        />
      </div>
    </form>
  );
};

export default DadosPaciente;
