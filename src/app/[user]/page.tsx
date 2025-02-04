import Link from "next/link";

import DoctorLogo from "./components/DoctorLogo/DoctorLogo";

import styles from "./page.module.scss";

const Page = () => (
  <section className={styles.page}>
    <DoctorLogo />
    <Link className={styles.button} href="/videonasolaringoscopia">
      VIDEONASOLARINGOSCOPIA
    </Link>
    <Link className={styles.button} href="/videonasoescopia">
      VIDEONASOESCOPIA
    </Link>
  </section>
);

export default Page;
