"use client";

import { useState } from "react";

import TextInput from "./components/TextInput/TextInput";
import BirthdateInput from "./components/BirthdateInput/BirthdateInput";
import MedicalReportDateInput from "./components/MedicalReportDateInput/MedicalReportDateInput";

import styles from "./PatientInfo.module.scss";

const today = new Date();

const PatientInfo = () => {
  const [medicalReportDate, setMedicalReportDate] = useState(
    today.toISOString().substring(0, 10)
  );

  return (
    <form
      className={styles["patient-info"]}
      data-testid="patient-info-container"
    >
      <TextInput id="name" label="Nome" />
      <TextInput
        id="medicalRecordNumber"
        label="Prontuário"
        isSmallInput={true}
      />
      <MedicalReportDateInput
        medicalReportDate={medicalReportDate}
        setMedicalReportDate={setMedicalReportDate}
      />
      <TextInput
        id="requesterName"
        label="Solicitante"
        initialInfo="DRA MARIANA MACHOSKI"
      />
      <BirthdateInput medicalReportDate={medicalReportDate} />
      <TextInput
        id="operatorName"
        label="Operador"
        initialInfo="DRA MARIANA MACHOSKI"
      />
      <TextInput
        id="medicalInsuranceName"
        label="Convênio"
        hasDoubleContainer={true}
      />
    </form>
  );
};

export default PatientInfo;
