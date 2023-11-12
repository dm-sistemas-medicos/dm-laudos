"use client";

import { useState } from "react";

import { cornetosMediosOptions } from "./cornetosmedios.options";
import { cavidadeNasalOptions } from "../../cavidadenasal.options";

import parentStyles from "../../../../videonasolaringoscopia.module.css";

interface ICornetosMediosItem {
  ntr: boolean;
  htr: boolean;
  glb: boolean;
  dgn: boolean;
  src: boolean;
}

interface ICornetosMedios {
  [key: string]: ICornetosMediosItem;
}

const defaultCornetosMedios = {
  ntr: false,
  htr: false,
  glb: false,
  dgn: false,
  src: false,
};

export const CornetosMedios = () => {
  const [cornetosMedios, setCornetosMedios] = useState<ICornetosMedios>({
    direita: { ...defaultCornetosMedios },
    esquerda: { ...defaultCornetosMedios },
  });

  const getPrintableClassName = (condition: boolean) =>
    condition ? parentStyles.nonPrintable : "";

  return (
    <li className={parentStyles.itemExame}>
      <label>Cornetos médios</label>
      <ul className={parentStyles.itensExameDetalhes}>
        {cavidadeNasalOptions.narinas.map(({ value: narinaOption, text }) => (
          <div key={narinaOption}>
            <li>{text}</li>
            <ul className={parentStyles.itensExameDetalhesInternos}>
              {cornetosMediosOptions.options.map(
                ({ value: option, text }, i) => (
                  <li
                    key={i}
                    className={`${
                      parentStyles.itemExameDetalhes
                    } ${getPrintableClassName(
                      !cornetosMedios[narinaOption][
                        option as keyof ICornetosMediosItem
                      ]
                    )}`}
                  >
                    <input
                      type="checkbox"
                      value={option}
                      checked={
                        !!cornetosMedios[narinaOption][
                          option as keyof ICornetosMediosItem
                        ]
                      }
                      onChange={({ target: { value } }) =>
                        setCornetosMedios({
                          ...cornetosMedios,
                          [narinaOption]: {
                            ...cornetosMedios[narinaOption],
                            [value]:
                              !cornetosMedios[narinaOption][
                                value as keyof ICornetosMediosItem
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

export default CornetosMedios;
