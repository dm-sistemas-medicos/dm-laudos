import { PropsWithChildren, use } from "react";

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

type LayoutProps = PropsWithChildren<{
  params: Promise<{ user: string }>;
}>;

const Layout = ({ params, children }: LayoutProps) => {
  const { user } = use(params) as { user: User };

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
        <DoctorSignature user={user} />
        <hr />
        <DoctorInfo user={user} />
      </footer>
    </section>
  );
};

export default Layout;
