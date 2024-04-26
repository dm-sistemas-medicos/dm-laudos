import { ImagesProvider } from "../contexts/images-context";
import { AsideImagesProvider } from "../contexts/aside-images-context";

import DoctorLogo from "../components/DoctorLogo/DoctorLogo";
import DoctorInfo from "../components/DoctorInfo/DoctorInfo";
import AsideImages from "./components/AsideImages/AsideImages";
import SectionImages from "./components/SectionImages/SectionImages";
import DoctorSignature from "../components/DoctorSignature/DoctorSignature";
import PatientInfo from "../components/PatientInfo/PatientInfo";
import DragAndDrop from "./components/DragAndDrop/DragAndDrop";

import styles from "./layout.module.scss";

const Layout = ({ children }: { children: React.ReactNode }) => (
  <section className={styles.page}>
    <header className={styles.header}>
      <DoctorLogo />
      <PatientInfo />
    </header>
    <ImagesProvider>
      <AsideImagesProvider>
        <main className={styles.main}>{children}</main>
        <aside className={styles.aside}>
          <DragAndDrop />
          <AsideImages />
        </aside>
        <section className={styles.section}>
          <SectionImages />
        </section>
      </AsideImagesProvider>
    </ImagesProvider>
    <footer className={styles.footer}>
      <DoctorSignature />
      <hr />
      <DoctorInfo />
    </footer>
  </section>
);

export default Layout;
