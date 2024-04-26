import DoctorInfo from "../components/DoctorInfo/DoctorInfo";
import DoctorLogo from "../components/DoctorLogo/DoctorLogo";
import DoctorSignature from "../components/DoctorSignature/DoctorSignature";
import PatientInfo from "../components/PatientInfo/PatientInfo";

import styles from "./layout.module.scss";

const Layout = ({ children }: { children: React.ReactNode }) => (
  <section className={styles.page}>
    <header className={styles.header}>
      <DoctorLogo />
      <PatientInfo />
    </header>
    {children}
    <footer className={styles.footer}>
      <DoctorSignature />
      <hr />
      <DoctorInfo />
    </footer>
  </section>
);

export default Layout;
