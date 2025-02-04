import { ImagesProvider } from "@/app/contexts/images-context";
import { AsideImagesProvider } from "@/app/contexts/aside-images-context";

import { User } from "@/users";

import DoctorLogo from "../components/DoctorLogo/DoctorLogo";
import DoctorInfo from "../components/DoctorInfo/DoctorInfo";
import DragAndDrop from "./components/images/DragAndDrop/DragAndDrop";
import AsideImages from "./components/images/AsideImages/AsideImages";
import SectionImages from "./components/images/SectionImages/SectionImages";
import DoctorSignature from "../components/DoctorSignature/DoctorSignature";
import PatientInfo from "../components/PatientInfo/PatientInfo";

import styles from "./layout.module.scss";

const Layout = async ({
  params,
  children,
}: {
  params: Promise<{ user: User }>;
  children: React.ReactNode;
}) => {
  const user = (await params).user;

  return (
    <section className={styles.page}>
      <header className={styles.header}>
        <DoctorLogo user={user} />
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
};

export default Layout;
