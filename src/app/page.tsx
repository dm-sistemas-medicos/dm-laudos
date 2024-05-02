import Link from "next/link";

import styles from "./page.module.scss";
import DoctorLogo from "./components/DoctorLogo/DoctorLogo";

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
