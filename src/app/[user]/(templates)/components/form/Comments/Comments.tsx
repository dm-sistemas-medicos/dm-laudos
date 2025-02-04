import { useState } from "react";

import parentStyles from "@/app/[user]/(templates)/layout.module.scss";

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
      data-testid={`${parentId ? `${parentId}-` : ""}comments-container`}
    >
      <textarea
        id={`${parentId ? `${parentId}-` : ""}comments`}
        data-testid={`${parentId ? `${parentId}-` : ""}comments`}
        className={parentStyles["exam-item-double"]}
        rows={1}
        placeholder="Observações"
        value={comments}
        onChange={({ target: { value } }) => setComments(value)}
      />
    </li>
  );
};

export default Comments;
