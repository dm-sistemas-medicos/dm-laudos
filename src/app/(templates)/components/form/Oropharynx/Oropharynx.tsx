import ExamItem from "../ExamItem/ExamItem";
import Comments from "../Comments/Comments";

import parentStyles from "@/app/(templates)/layout.module.scss";

const Oropharynx = () => (
  <fieldset>
    <h2 className={parentStyles["exam-section-title"]}>Orofaringe</h2>
    <ul className={parentStyles["exam-item-list"]}>
      <ExamItem
        id="oropharynx-oropharynx"
        label="Orofaringe"
        initialText="e hipofaringe com mucosa normal"
      />
      <ExamItem
        id="oropharynx-base-of-tongue"
        label="Base da língua"
        initialText="sem alterações"
      />
      <ExamItem
        id="oropharynx-vallecula-pyriform-sinuses"
        label="Valéculas e seios piriformes"
        initialText="livres"
      />
      <Comments parentId="oropharynx" />
    </ul>
  </fieldset>
);

export default Oropharynx;
