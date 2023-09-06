"use client";

import { useState } from "react";

import { cornetosInferioresOptions } from "./cornetosinferiores.options";
import { cavidadeNasalOptions } from "../../cavidadenasal.options";

import parentStyles from "../../../../videonasolaringoscopia.module.css";

interface ICornetosInferioresAlteradoItem {
  ntr: boolean;
  htr: boolean;
  glb: boolean;
  dgn: boolean;
  src: boolean;
}

interface ICornetosInferioresAlterado {
  [key: string]: ICornetosInferioresAlteradoItem;
}

const defaultCornetosInferiores = {
  ntr: false,
  htr: false,
  glb: false,
  dgn: false,
  src: false,
};

export const CornetosInferiores = () => {
  const [cornetosInferiores, setCornetosInferiores] = useState("");

  const [cornetosInferioresAlterado, setCornetosInferioresAlterado] =
    useState<ICornetosInferioresAlterado>({
      direita: { ...defaultCornetosInferiores },
      esquerda: { ...defaultCornetosInferiores },
    });

  return (
    <li className={parentStyles.itemExame}>
      <label>Cornetos inferiores:</label>
      <select
        id="cornetosInferiores"
        value={cornetosInferiores}
        onChange={({ target: { value } }) => setCornetosInferiores(value)}
      >
        {cornetosInferioresOptions.options.map(({ value: option, text }, i) => (
          <option key={i} value={option}>
            {text}
          </option>
        ))}
      </select>
      {cornetosInferiores === "alt" && (
        <ul className={parentStyles.itensExameDetalhes}>
          {cavidadeNasalOptions.narinas.map(({ value: narinaOption, text }) => (
            <div key={narinaOption}>
              <li>{text}</li>
              <ul className={parentStyles.itensExameDetalhesInternos}>
                {cornetosInferioresOptions.alt.map(
                  ({ value: alteracao, text }, i) => (
                    <li key={i} className={parentStyles.itemExameDetalhes}>
                      <input
                        type="checkbox"
                        value={alteracao}
                        checked={
                          !!cornetosInferioresAlterado[narinaOption][
                            alteracao as keyof ICornetosInferioresAlteradoItem
                          ]
                        }
                        onChange={({ target: { value } }) =>
                          setCornetosInferioresAlterado({
                            ...cornetosInferioresAlterado,
                            [narinaOption]: {
                              ...cornetosInferioresAlterado[narinaOption],
                              [value]:
                                !cornetosInferioresAlterado[narinaOption][
                                  value as keyof ICornetosInferioresAlteradoItem
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

export default CornetosInferiores;
