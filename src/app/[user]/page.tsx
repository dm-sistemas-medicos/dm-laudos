import { use } from "react";

import Link from "next/link";

import { User } from "@/users";

import DoctorLogo from "./components/DoctorLogo/DoctorLogo";

import styles from "./page.module.scss";

type PageProps = {
  params: Promise<{ user: User }>;
};

const Page = ({ params }: PageProps) => {
  const { user } = use(params);

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
