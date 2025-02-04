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
  <div data-testid="medical-report-date-container">
    <label htmlFor="medical-report-date">Data:</label>
    <input
      data-testid="medical-report-date"
      id="medical-report-date"
      className={styles.input}
      type="date"
      value={medicalReportDate}
      onChange={({ target: { value } }) => setMedicalReportDate(value)}
    />
  </div>
);

export default MedicalReportDateInput;
