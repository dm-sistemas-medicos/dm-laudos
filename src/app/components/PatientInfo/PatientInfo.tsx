"use client";

import { useEffect, useState } from "react";

import InfoInput from "./components/InfoInput/InfoInput";

import styles from "./PatientInfo.module.scss";

const today = new Date();

const PatientInfo = () => {
  const [medicalReportDate, setMedicalReportDate] = useState(
    today.toISOString().substring(0, 10)
  );

  const [birthdate, setBirthdate] = useState("");

  const [lifetime, setLifetime] = useState("");

  const [medicalInsuranceName, setMedicalInsuranceName] = useState("");

  useEffect(() => {
    const diffDias =
      (new Date(medicalReportDate).getTime() - new Date(birthdate).getTime()) /
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

    setLifetime(`${anosVidaTexto}${mesesVidaTexto}${diasVidaTexto}`);
  }, [medicalReportDate, birthdate]);

  return (
    <form className={styles["patient-info"]}>
      <InfoInput id="name" label="Nome" />
      <InfoInput
        id="medicalRecordNumber"
        label="Prontuário"
        inputSize="small"
      />
      <div>
        <label htmlFor="medicalReportDate">Data:</label>
        <input
          className={styles["medium-input"]}
          id="medicalReportDate"
          type="date"
          value={medicalReportDate}
          onChange={({ target: { value } }) => setMedicalReportDate(value)}
        />
      </div>
      <InfoInput
        id="requesterName"
        label="Solicitante"
        initialInfo="DRA MARIANA MACHOSKI"
      />
      <div className={styles["extra-info"]}>
        <label htmlFor="birthdate">Nascimento:</label>
        <input
          className={styles["medium-input"]}
          id="birthdate"
          type="date"
          value={birthdate}
          onChange={({ target: { value } }) => setBirthdate(value)}
        />
        <span>{lifetime}</span>
      </div>
      <InfoInput
        id="operatorName"
        label="Operador"
        initialInfo="DRA MARIANA MACHOSKI"
      />
      <div className={styles["extra-info"]}>
        <label htmlFor="medicalInsuranceName">Convênio:</label>
        <input
          className={styles["full-input"]}
          id="medicalInsuranceName"
          type="text"
          value={medicalInsuranceName}
          onChange={({ target: { value } }) => setMedicalInsuranceName(value)}
        />
      </div>
    </form>
  );
};

export default PatientInfo;