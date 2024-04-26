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
type ImagesType = string[];
type SetImagesType = Dispatch<SetStateAction<ImagesType>>;

interface IImagesContext {
  maxAsideImages: MaxAsideImagesType;
  setMaxAsideImages: SetMaxAsideImagesType;
  images: ImagesType;
  setImages: SetImagesType;
}

type ImagesProviderProps = {
  children: ReactNode;
};

export const ImagesContext = createContext<IImagesContext>({
  maxAsideImages: 3,
  setMaxAsideImages: () => {},
  images: [],
  setImages: () => {},
});

export const ImagesProvider = ({ children }: ImagesProviderProps) => {
  const [maxAsideImages, setMaxAsideImages] = useState<MaxAsideImagesType>(3);
  const [images, setImages] = useState<ImagesType>([]);

  return (
    <ImagesContext.Provider
      value={{ maxAsideImages, setMaxAsideImages, images, setImages }}
    >
      {children}
    </ImagesContext.Provider>
  );
};
