"use client";

import { useState } from "react";

import { cornetosMediosOptions } from "./cornetosmedios.options";
import { cavidadeNasalOptions } from "../../cavidadenasal.options";

import parentStyles from "../../../../videonasolaringoscopia.module.css";

interface ICornetosMediosAlteradoItem {
  ntr: boolean;
  htr: boolean;
  glb: boolean;
  dgn: boolean;
  src: boolean;
}

interface ICornetosMediosAlterado {
  [key: string]: ICornetosMediosAlteradoItem;
}

const defaultCornetosMedios = {
  ntr: false,
  htr: false,
  glb: false,
  dgn: false,
  src: false,
};

export const CornetosMedios = () => {
  const [cornetosMedios, setCornetosMedios] = useState("");

  const [cornetosMediosAlterado, setCornetosMediosAlterado] =
    useState<ICornetosMediosAlterado>({
      direita: { ...defaultCornetosMedios },
      esquerda: { ...defaultCornetosMedios },
    });

  return (
    <li className={parentStyles.itemExame}>
      <label>Cornetos inferiores</label>
      <select
        id="cornetosMedios"
        value={cornetosMedios}
        onChange={({ target: { value } }) => setCornetosMedios(value)}
      >
        {cornetosMediosOptions.options.map(({ value: option, text }, i) => (
          <option key={i} value={option}>
            {text}
          </option>
        ))}
      </select>
      {cornetosMedios === "alt" && (
        <ul className={parentStyles.itensExameDetalhes}>
          {cavidadeNasalOptions.narinas.map(({ value: narinaOption, text }) => (
            <div key={narinaOption}>
              <li>{text}</li>
              <ul className={parentStyles.itensExameDetalhesInternos}>
                {cornetosMediosOptions.alt.map(
                  ({ value: alteracao, text }, i) => (
                    <li key={i} className={parentStyles.itemExameDetalhes}>
                      <input
                        type="checkbox"
                        value={alteracao}
                        checked={
                          !!cornetosMediosAlterado[narinaOption][
                            alteracao as keyof ICornetosMediosAlteradoItem
                          ]
                        }
                        onChange={({ target: { value } }) =>
                          setCornetosMediosAlterado({
                            ...cornetosMediosAlterado,
                            [narinaOption]: {
                              ...cornetosMediosAlterado[narinaOption],
                              [value]:
                                !cornetosMediosAlterado[narinaOption][
                                  value as keyof ICornetosMediosAlteradoItem
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

export default CornetosMedios;
