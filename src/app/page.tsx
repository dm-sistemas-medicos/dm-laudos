"use client";

import styles from "./page.module.scss";

import DoctorLogo from "./components/DoctorLogo/DoctorLogo";
import PatientInfo from "./components/PatientInfo/PatientInfo";
import Videonasolaryngoscopy from "./templates/exams/Videonasolaryngoscopy/Videonasolaryngoscopy";
import DoctorSignature from "./components/DoctorSignature/DoctorSignature";
import DoctorInfo from "./components/DoctorInfo/DoctorInfo";

const Page = () => (
  <section className={styles.page}>
    <header className={styles.header}>
      <DoctorLogo />
      <PatientInfo />
    </header>
    <Videonasolaryngoscopy />
    <footer className={styles.footer}>
      <DoctorSignature />
      <hr />
      <DoctorInfo />
    </footer>
  </section>
);

export default Page;
