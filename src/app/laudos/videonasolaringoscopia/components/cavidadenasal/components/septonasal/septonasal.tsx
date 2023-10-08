"use client";

import { useState } from "react";

import { septoNasalOptions } from "./septonasal.options";
import { cavidadeNasalOptions } from "../../cavidadenasal.options";

import styles from "./septonasal.module.css";
import parentStyles from "../../../../videonasolaringoscopia.module.css";

interface ISeptoNasalDesvioItem {
  cottle: boolean;
  grauCottle: string;
  areaCottle: string[];
  eei: boolean;
  alt: boolean;
}

interface ISeptoNasalDesvio {
  [key: string]: ISeptoNasalDesvioItem;
}

const defaultSeptoNasalDesvio = {
  cottle: false,
  grauCottle: "",
  areaCottle: [],
  eei: false,
  alt: false,
};

export const SeptoNasal = () => {
  const [septoNasal, setSeptoNasal] = useState("");

  const [septoNasalDesvio, setSeptoNasalDesvio] = useState<ISeptoNasalDesvio>({
    direita: { ...defaultSeptoNasalDesvio },
    esquerda: { ...defaultSeptoNasalDesvio },
  });

  const getPrintableClassName = (condition: boolean) =>
    condition ? parentStyles.nonPrintable : "";

  return (
    <li className={parentStyles.itemExame}>
      <label>Septo nasal</label>
      <select
        id="septoNasal"
        value={septoNasal}
        onChange={({ target: { value } }) => setSeptoNasal(value)}
      >
        {septoNasalOptions.options.map(({ value: option, text }, i) => (
          <option key={i} value={option}>
            {text}
          </option>
        ))}
      </select>
      {septoNasal === "des" && (
        <ul className={parentStyles.itensExameDetalhes}>
          {cavidadeNasalOptions.narinas.map(({ value: narinaOption, text }) => (
            <div key={narinaOption}>
              <li>{text}</li>
              <ul className={parentStyles.itensExameDetalhesInternos}>
                <li
                  className={`${
                    parentStyles.itemExameDetalhes
                  } ${getPrintableClassName(
                    !septoNasalDesvio[narinaOption].cottle
                  )}`}
                >
                  <div className={styles.itemExameDesvioGrid}>
                    <input
                      type="checkbox"
                      checked={septoNasalDesvio[narinaOption].cottle}
                      onChange={() =>
                        setSeptoNasalDesvio({
                          ...septoNasalDesvio,
                          [narinaOption]: {
                            ...septoNasalDesvio[narinaOption],
                            cottle: !septoNasalDesvio[narinaOption].cottle,
                          },
                        })
                      }
                    />
                    grau
                    <ul className={styles.itemExameDesvioGridList}>
                      {septoNasalOptions.des.grauCottle.map(
                        ({ value: grauCottle, text }, i) => (
                          <li
                            key={i}
                            className={getPrintableClassName(
                              grauCottle !==
                                septoNasalDesvio[narinaOption].grauCottle
                            )}
                          >
                            <input
                              className={styles.itemExameDesvioGridListItem}
                              type="radio"
                              value={grauCottle}
                              checked={
                                grauCottle ===
                                septoNasalDesvio[narinaOption].grauCottle
                              }
                              onChange={({ target: { value } }) =>
                                setSeptoNasalDesvio({
                                  ...septoNasalDesvio,
                                  [narinaOption]: {
                                    ...septoNasalDesvio[narinaOption],
                                    grauCottle: value,
                                  },
                                })
                              }
                            />
                            <label>{text}</label>
                          </li>
                        )
                      )}
                    </ul>
                    em área
                    <ul className={styles.itemExameDesvioGridList}>
                      {septoNasalOptions.des.areaCottle.map(
                        ({ value: areaCottle, text }, i) => (
                          <li
                            key={i}
                            className={getPrintableClassName(
                              septoNasalDesvio[narinaOption].areaCottle.some(
                                (v) => v !== areaCottle
                              )
                            )}
                          >
                            <input
                              className={styles.itemExameDesvioGridListItem}
                              type="checkbox"
                              value={areaCottle}
                              checked={septoNasalDesvio[
                                narinaOption
                              ].areaCottle.some((v) => v === areaCottle)}
                              onChange={({ target: { value, checked } }) => {
                                let areaCottle: string[] = [];

                                if (checked) {
                                  areaCottle = [
                                    ...septoNasalDesvio[narinaOption]
                                      .areaCottle,
                                    value,
                                  ];
                                } else {
                                  areaCottle = septoNasalDesvio[
                                    narinaOption
                                  ].areaCottle.filter((v) => v !== value);
                                }

                                setSeptoNasalDesvio({
                                  ...septoNasalDesvio,
                                  [narinaOption]: {
                                    ...septoNasalDesvio[narinaOption],
                                    areaCottle,
                                  },
                                });
                              }}
                            />
                            <label>{text}</label>
                          </li>
                        )
                      )}
                    </ul>
                    de Cottle
                  </div>
                </li>
                {septoNasalOptions.des.simplificado.map(
                  ({ value: simplificado, text }, i) => (
                    <li
                      key={i}
                      className={`${
                        parentStyles.itemExameDetalhes
                      } ${getPrintableClassName(
                        !septoNasalDesvio[narinaOption][
                          simplificado as keyof ISeptoNasalDesvioItem
                        ]
                      )}`}
                    >
                      <input
                        type="checkbox"
                        value={simplificado}
                        checked={
                          !!septoNasalDesvio[narinaOption][
                            simplificado as keyof ISeptoNasalDesvioItem
                          ]
                        }
                        onChange={({ target: { value } }) =>
                          setSeptoNasalDesvio({
                            ...septoNasalDesvio,
                            [narinaOption]: {
                              ...septoNasalDesvio[narinaOption],
                              [value]:
                                !septoNasalDesvio[narinaOption][
                                  value as keyof ISeptoNasalDesvioItem
                                ],
                            },
                          })
                        }
                      />
                      <label>{text}</label>
                    </li>
                  )
                )}
              </ul>
            </div>
          ))}
        </ul>
      )}
    </li>
  );
};

export default SeptoNasal;
