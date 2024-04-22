"use client";

import { Dispatch, SetStateAction } from "react";

import styles from "./MedicalReportDateInput.module.scss";

type MedicalReportDateInputProps = {
  medicalReportDate: string;
  setMedicalReportDate: Dispatch<SetStateAction<string>>;
};

const MedicalReportDateInput = ({
  medicalReportDate,
  setMedicalReportDate,
}: MedicalReportDateInputProps) => (
  <div>
    <label htmlFor="medicalReportDate">Data:</label>
    <input
      id="medicalReportDate"
      className={styles.input}
      type="date"
      value={medicalReportDate}
      onChange={({ target: { value } }) => setMedicalReportDate(value)}
    />
  </div>
);

export default MedicalReportDateInput;
