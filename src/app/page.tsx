"use client";

import { Dispatch, SetStateAction, createContext, useState, FC } from "react";

import Image from "next/image";

import styles from "./page.module.css";

import DadosPaciente from "./components/dadospaciente/dadospaciente";
import VideoNasoLaringoscopia from "./laudos/videonasolaringoscopia/videonasolaringoscopia";
import DragDrop from "./components/dragdrop/dragdrop";
import Preview from "./components/preview/preview";

export type ImagensType = string[];
export type SetImagensType = Dispatch<SetStateAction<ImagensType>>;

interface IImagensContext {
  imagens: ImagensType;
  setImagens: SetImagensType;
}

const ImagensContext = createContext<IImagensContext>({
  imagens: [],
  setImagens: () => {},
});

const Page = () => {
  const [imagens, setImagens] = useState<ImagensType>([]);

  return (
    <ImagensContext.Provider value={{ imagens, setImagens }}>
      <section className={styles.page}>
        <header className={styles.header}>
          <Image
            src={"/logo.png"}
            alt=""
            width={400}
            height={123}
            priority={true}
          />
          <DadosPaciente />
        </header>
        <main className={styles.main}>
          <VideoNasoLaringoscopia />
        </main>
        <aside className={styles.aside}>
          <DragDrop setImagens={setImagens} />
          <Preview
            imagens={imagens.length <= 4 ? imagens : imagens.slice(0, 4)}
            width={300}
            multiColumn={false}
          />
        </aside>
        {imagens.length > 4 && (
          <section className={styles.section}>
            <Preview
              imagens={imagens.slice(4)}
              width={270}
              multiColumn={true}
            />
          </section>
        )}
        <footer className={styles.footer}>
          <Image
            src={"/assinatura.png"}
            width={75}
            height={75}
            alt="Assinatura"
          />
          <hr />
          <p className={styles.dadosMedico}>
            Dra. Mariana Machoski, CRM/SC 35098, RQE/SC 23991 - Email:
            marianamachoskilo@gmail.com - Instagram: @marimachoski
          </p>
        </footer>
      </section>
    </ImagensContext.Provider>
  );
};

export default Page;
