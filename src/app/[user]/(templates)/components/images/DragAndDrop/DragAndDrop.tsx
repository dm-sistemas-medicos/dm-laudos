"use client";

import {
  useRef,
  useState,
  DragEvent,
  ChangeEvent,
  useEffect,
  useContext,
} from "react";

import styles from "./DragAndDrop.module.scss";
import { ImagesContext } from "@/app/contexts/images-context";

const DragAndDrop = () => {
  const { setImages } = useContext(ImagesContext);

  const [dragActive, setDragActive] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleDragEvents = (e: MouseEvent) => {
      e.preventDefault();
    };

    window.addEventListener("dragover", handleDragEvents);
    window.addEventListener("drop", handleDragEvents);

    return () => {
      window.removeEventListener("dragover", handleDragEvents);
      window.removeEventListener("drop", handleDragEvents);
    };
  }, []);

  const handleDrag = (e: DragEvent<HTMLDivElement | HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();

    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleImagesUpload = (images: FileList | null) => {
    if (images) {
      const uploadedImages: string[] = [];

      Array.from(images)
        .reverse()
        .forEach((image) => {
          uploadedImages.push(URL.createObjectURL(image));
        });

      setImages(uploadedImages);
    }
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();

    setDragActive(false);

    handleImagesUpload(e.dataTransfer.files);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    if (e.target.files?.length) {
      handleImagesUpload(e.target.files);
    }
  };

  const onButtonClick = () => {
    inputRef?.current?.click();
  };

  return (
    <form
      data-testid="drag-and-drop-container"
      className={styles["drag-and-drop"]}
      onDragEnter={handleDrag}
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        data-testid="drag-and-drop-input"
        ref={inputRef}
        type="file"
        multiple={true}
        onChange={handleChange}
        accept="image/*"
      />
      <label
        data-testid="drag-and-drop-label"
        className={`${styles["drag-and-drop-label"]} ${
          dragActive ? styles["drag-and-drop-label-hidden"] : ""
        }`}
        htmlFor="drag-and-drop-input"
      >
        <p>Arraste as imagens aqui</p>
        <p>OU</p>
        <button onClick={onButtonClick}>Selecione as imagens</button>
      </label>
      {dragActive && (
        <div
          data-testid="drop-area"
          className={styles["drop-area"]}
          draggable={true}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <p>Solte as imagens aqui</p>
        </div>
      )}
    </form>
  );
};

export default DragAndDrop;
