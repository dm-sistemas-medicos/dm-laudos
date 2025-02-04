import Link from "next/link";

import DoctorLogo from "./components/DoctorLogo/DoctorLogo";

import styles from "./page.module.scss";

const Page = async ({ params }: { params: Promise<{ user: string }> }) => {
  const user = (await params).user;

  return (
    <section className={styles.page}>
      <DoctorLogo user={user} />
      <Link className={styles.button} href={`/${user}/videonasolaringoscopia`}>
        VIDEONASOLARINGOSCOPIA
      </Link>
      <Link className={styles.button} href={`/${user}/videonasoescopia`}>
        VIDEONASOESCOPIA
      </Link>
    </section>
  );
};

export default Page;
