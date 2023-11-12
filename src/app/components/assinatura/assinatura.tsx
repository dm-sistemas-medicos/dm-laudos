"use client";

import Image from "next/image";

import styles from "./assinatura.module.css";

const Assinatura = () => (
  <div className={styles.assinatura}>
    <Image src={"/assinatura.png"} width={75} height={75} alt="Assinatura" />
    <p>Dra. Mariana Carolina C. Machoski</p>
    <p>Médica Otorrinolaringologista</p>
    <p>CRM-SC 35.098 | RQE 23.991</p>
  </div>
);

export default Assinatura;
