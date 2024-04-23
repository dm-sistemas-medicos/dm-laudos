"use client";

import { useEffect, useState } from "react";

import styles from "./BirthdateInput.module.scss";

type BirthdateInputProps = {
  medicalReportDate: string;
};

const BirthdateInput = ({ medicalReportDate }: BirthdateInputProps) => {
  const [birthdate, setBirthdate] = useState("");

  const [lifetime, setLifetime] = useState("");

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
    <div className={styles.container} data-testid="birthdate-input-container">
      <label htmlFor="birthdate">Nascimento:</label>
      <input
        id="birthdate"
        data-testid="birthdate-input"
        className={styles.input}
        type="date"
        value={birthdate}
        onChange={({ target: { value } }) => setBirthdate(value)}
      />
      <span data-testid="lifetime-span">{lifetime}</span>
    </div>
  );
};

export default BirthdateInput;
