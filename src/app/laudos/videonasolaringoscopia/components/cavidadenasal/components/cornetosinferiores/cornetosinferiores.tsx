"use client";

import { useState } from "react";

import { cornetosInferioresOptions } from "./cornetosinferiores.options";
import { cavidadeNasalOptions } from "../../cavidadenasal.options";

import parentStyles from "../../../../videonasolaringoscopia.module.css";

interface ICornetosInferioresItem {
  ntr: boolean;
  htr: boolean;
  glb: boolean;
  dgn: boolean;
  src: boolean;
}

interface ICornetosInferiores {
  [key: string]: ICornetosInferioresItem;
}

const defaultCornetosInferiores = {
  ntr: false,
  htr: false,
  glb: false,
  dgn: false,
  src: false,
};

const getPrintableClassName = (condition: boolean) =>
  condition ? parentStyles.nonPrintable : "";

export const CornetosInferiores = () => {
  const [cornetosInferiores, setCornetosInferiores] =
    useState<ICornetosInferiores>({
      direita: { ...defaultCornetosInferiores },
      esquerda: { ...defaultCornetosInferiores },
    });

  return (
    <li className={parentStyles.itemExame}>
      <label>Cornetos inferiores</label>
      <ul className={parentStyles.itensExameDetalhes}>
        {cavidadeNasalOptions.narinas.map(({ value: narinaOption, text }) => (
          <div key={narinaOption}>
            <li>{text}</li>
            <ul className={parentStyles.itensExameDetalhesInternos}>
              {cornetosInferioresOptions.options.map(
                ({ value: option, text }, i) => (
                  <li
                    key={i}
                    className={`${
                      parentStyles.itemExameDetalhes
                    } ${getPrintableClassName(
                      !cornetosInferiores[narinaOption][
                        option as keyof ICornetosInferioresItem
                      ]
                    )}`}
                  >
                    <input
                      type="checkbox"
                      value={option}
                      checked={
                        !!cornetosInferiores[narinaOption][
                          option as keyof ICornetosInferioresItem
                        ]
                      }
                      onChange={({ target: { value } }) =>
                        setCornetosInferiores({
                          ...cornetosInferiores,
                          [narinaOption]: {
                            ...cornetosInferiores[narinaOption],
                            [value]:
                              !cornetosInferiores[narinaOption][
                                value as keyof ICornetosInferioresItem
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
    </li>
  );
};

export default CornetosInferiores;
