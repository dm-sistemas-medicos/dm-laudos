"use client";

import { useRef, useState } from "react";

import styles from "./dragdrop.module.css";

export const DragDrop = ({ setImagens }) => {
  const [dragActive, setDragActive] = useState(false);

  const inputRef = useRef(null);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleImagesUpload = (images) => {
    if (images) {
      const uploadedImages = [];

      Array.from(images).forEach((image) => {
        uploadedImages.push(URL.createObjectURL(image));
      });

      setImagens(uploadedImages);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();

    setDragActive(false);

    handleImagesUpload(e.dataTransfer.files);
  };

  const handleChange = (e) => {
    e.preventDefault();

    handleImagesUpload(e.target.files);
  };

  const onButtonClick = () => {
    inputRef.current.click();
  };

  return (
    <form
      id="dragdropForm"
      className={styles.dragdropForm}
      onDragEnter={handleDrag}
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        id="dragdrogInput"
        className={styles.dragdrogInput}
        ref={inputRef}
        type="file"
        multiple={true}
        onChange={handleChange}
        accept="image/*"
      />
      <label
        id="dragdropLabel"
        className={`${styles.dragdropLabel} ${
          dragActive ? styles.dragdropLabelHidden : ""
        }`}
        htmlFor="dragdrogInput"
      >
        <p className={styles.dragdropLabelText}>Arraste as imagens aqui</p>
        <p className={styles.dragdropLabelText}>OU</p>
        <button className={styles.dragdropLabelButton} onClick={onButtonClick}>
          Selecione as imagens
        </button>
      </label>
      {dragActive && (
        <div
          id="dropElement"
          className={styles.dropElement}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <p className={styles.dragdropLabelText}>Solte as imagens aqui</p>
        </div>
      )}
    </form>
  );
};

export default DragDrop;
