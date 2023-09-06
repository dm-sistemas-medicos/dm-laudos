"use client";

import Image from "next/image";

import styles from "./page.module.css";

import DadosPaciente from "./components/dadospaciente/dadospaciente";
import VideoNasoLaringoscopia from "./laudos/videonasolaringoscopia/videonasolaringoscopia";

export const Page = () => (
  <section className={styles.page}>
    <header className={styles.header}>
      <Image src={"/logo.png"} alt="" width={400} height={123} />
      <DadosPaciente />
    </header>
    <main className={styles.main}>
      <VideoNasoLaringoscopia />
    </main>
    <aside className={styles.aside}>
      <form className={styles.imagensExameForm}>
        <Image src={"/exame.jpeg"} alt="" width={200} height={200} />
        <Image src={"/exame.jpeg"} alt="" width={200} height={200} />
        <Image src={"/exame.jpeg"} alt="" width={200} height={200} />
        <Image src={"/exame.jpeg"} alt="" width={200} height={200} />
      </form>
    </aside>
    <footer className={styles.footer}>
      <hr />
      <p className={styles.dadosMedico}>
        Dra. Mariana Machoski, CRM/SC 35098, RQE/SC 23991 - Email:
        marianamachoskilo@gmail.com - Instagram: @marimachoski
      </p>
    </footer>
  </section>
);

export default Page;
