"use client";

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

type ImagesType = string[];
type SetImagesType = Dispatch<SetStateAction<ImagesType>>;

interface IImagesContext {
  images: ImagesType;
  setImages: SetImagesType;
}

type ImagesProviderProps = {
  children: ReactNode;
};

export const ImagesContext = createContext<IImagesContext | null>(null);

export const ImagesProvider = ({ children }: ImagesProviderProps) => {
  const [images, setImages] = useState<ImagesType>([]);

  return (
    <ImagesContext.Provider value={{ images, setImages }}>
      {children}
    </ImagesContext.Provider>
  );
};
