"use client";

import { useState } from "react";

import parentStyles from "../../Videolaryngoscopy.module.scss";

type CommentsProps = {
  parentId?: string;
};

const Comments = ({ parentId }: CommentsProps) => {
  const [comments, setComments] = useState("");

  return (
    <li
      className={`${parentStyles["exam-item"]} ${
        !comments.length ? parentStyles["non-printable"] : ""
      }`}
      data-testid={`${parentId ? `${parentId}-` : ""}comments`}
    >
      <textarea
        className={parentStyles["exam-item-double"]}
        rows={1}
        id={`${parentId ? `${parentId}-` : ""}comments`}
        placeholder="Observações"
        value={comments}
        onChange={({ target: { value } }) => setComments(value)}
      />
    </li>
  );
};

export default Comments;
