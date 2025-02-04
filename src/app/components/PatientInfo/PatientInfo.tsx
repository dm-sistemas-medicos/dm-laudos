"use client";

import { useState } from "react";

import TextInput from "./components/TextInput/TextInput";
import BirthdateInput from "./components/BirthdateInput/BirthdateInput";
import MedicalReportDateInput from "./components/MedicalReportDateInput/MedicalReportDateInput";

import users from "@/users";

import styles from "./PatientInfo.module.scss";

const today = new Date();

const PatientInfo = () => {
  const userInfo = users["mariana-machoski"];

  const [medicalReportDate, setMedicalReportDate] = useState(
    today.toISOString().substring(0, 10)
  );

  return (
    <form className={styles["patient-info"]}>
      <TextInput id="name" label="Nome" />
      <TextInput
        id="medical-record-number"
        label="Prontuário"
        isSmallInput={true}
      />
      <MedicalReportDateInput
        medicalReportDate={medicalReportDate}
        setMedicalReportDate={setMedicalReportDate}
      />
      <TextInput
        id="requester-name"
        label="Solicitante"
        initialInfo={userInfo.defaultRequester}
      />
      <BirthdateInput medicalReportDate={medicalReportDate} />
      <TextInput
        id="operator-name"
        label="Operador"
        initialInfo={userInfo.defaultOperator}
      />
      <TextInput
        id="medical-insurance-name"
        label="Convênio"
        hasDoubleContainer={true}
      />
    </form>
  );
};

export default PatientInfo;
