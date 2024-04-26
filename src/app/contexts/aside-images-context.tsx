"use client";

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

type MaxAsideImagesType = number;
type SetMaxAsideImagesType = Dispatch<SetStateAction<MaxAsideImagesType>>;

interface IAsideImagesContext {
  maxAsideImages: MaxAsideImagesType;
  setMaxAsideImages: SetMaxAsideImagesType;
}

type AsideImagesProviderProps = {
  children: ReactNode;
};

export const AsideImagesContext = createContext<IAsideImagesContext>({
  maxAsideImages: 4,
  setMaxAsideImages: () => {},
});

export const AsideImagesProvider = ({ children }: AsideImagesProviderProps) => {
  const [maxAsideImages, setMaxAsideImages] = useState<MaxAsideImagesType>(4);

  return (
    <AsideImagesContext.Provider value={{ maxAsideImages, setMaxAsideImages }}>
      {children}
    </AsideImagesContext.Provider>
  );
};
