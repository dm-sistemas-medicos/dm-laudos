"use client";

import { Dispatch, SetStateAction, createContext, useState, FC } from "react";

import Image from "next/image";

import styles from "./page.module.scss";

import DadosPaciente from "./components/dadospaciente/dadospaciente";
import VideoNasoLaringoscopia from "./laudos/videonasolaringoscopia/videonasolaringoscopia";
import DragAndDrop from "./components/draganddrop/draganddrop";
import Preview from "./components/preview/preview";
import Signature from "./components/signature/signature";
import DadosMedico from "./components/dadosmedico/dadosmedico";

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
          <DragAndDrop setImagens={setImagens} />
          <Preview
            imagens={imagens.length <= 4 ? imagens : imagens.slice(0, 4)}
            width={256}
            multiColumn={false}
          />
        </aside>
        {imagens.length > 4 && (
          <section className={styles.section}>
            <Preview
              imagens={imagens.slice(4)}
              width={256}
              multiColumn={true}
            />
          </section>
        )}
        <footer className={styles.footer}>
          <Signature />
          <hr />
          <DadosMedico />
        </footer>
      </section>
    </ImagensContext.Provider>
  );
};

export default Page;
