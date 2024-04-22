"use client";

import styles from "./MedicalReportDateInput.module.scss";

type MedicalReportDateInputProps = {
  medicalReportDate: string;
  setMedicalReportDate: (value: string) => void;
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
