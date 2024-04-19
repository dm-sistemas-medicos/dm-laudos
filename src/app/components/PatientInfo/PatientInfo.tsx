"use client";

import { useEffect, useState } from "react";

import styles from "./PatientInfo.module.scss";

const PatientInfo = () => {
  const today = new Date();

  const [name, setName] = useState("");

  const [medicalRecordNumber, setMedicalRecordNumber] = useState("");

  const [medicalReportDate, setMedicalReportDate] = useState(
    today.toISOString().substring(0, 10)
  );

  const [requesterName, setRequesterName] = useState("DRA MARIANA MACHOSKI");

  const [birthdate, setBirthdate] = useState("");

  const [lifetime, setLifetime] = useState("");

  const [operatorName, setOperatorName] = useState("DRA MARIANA MACHOSKI");

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
      <div>
        <label htmlFor="name">Nome:</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={({ target: { value } }) => setName(value)}
        />
      </div>
      <div>
        <label htmlFor="medicalRecordNumber">Prontuário:</label>
        <input
          className={styles["small-input"]}
          id="medicalRecordNumber"
          type="text"
          width={48}
          value={medicalRecordNumber}
          onChange={({ target: { value } }) => setMedicalRecordNumber(value)}
        />
      </div>
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
      <div>
        <label htmlFor="requesterName">Solicitante:</label>
        <input
          id="requesterName"
          type="text"
          value={requesterName}
          onChange={({ target: { value } }) => setRequesterName(value)}
        />
      </div>
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
      <div>
        <label htmlFor="operatorName">Operador:</label>
        <input
          id="operatorName"
          type="text"
          value={operatorName}
          onChange={({ target: { value } }) => setOperatorName(value)}
        />
      </div>
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
