import Link from "next/link";

import styles from "./page.module.scss";
import DoctorLogo from "./components/DoctorLogo/DoctorLogo";

const Page = () => (
  <section className={styles.page}>
    <DoctorLogo />
    <Link className={styles.button} href="/templates/videonasolaringoscopia">
      VIDEONASOLARINGOSCOPIA
    </Link>
    <Link className={styles.button} href="/templates/videonasoscopia">
      VIDEONASOSCOPIA
    </Link>
  </section>
);

export default Page;
