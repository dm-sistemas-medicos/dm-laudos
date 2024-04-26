import ExamItem from "../ExamItem/ExamItem";
import Comments from "../Comments/Comments";

import parentStyles from "../../layout.module.scss";

const NasalCavity = () => (
  <fieldset data-testid="nasal-cavity-container">
    <h2 className={parentStyles["exam-section-title"]}>Cavidade Nasal</h2>
    <ul className={parentStyles["exam-item-list"]}>
      <ExamItem
        id="nasal-cavity-nasal-septum"
        label="Septo nasal"
        initialText="com desvio para direita, com esporão ósseo associado, parcialmente obstrutivo"
        rows={2}
      />
      <ExamItem
        id="nasal-cavity-middle-turbinates"
        label="Cornetos médios"
        initialText="normotróficos"
      />
      <ExamItem
        id="nasal-cavity-inferior-turbinates"
        label="Cornetos inferiores"
        initialText="hipertróficos"
      />
      <ExamItem
        id="nasal-cavity-secretion"
        label="Secreção"
        initialText="aquosa"
      />
      <ExamItem id="nasal-cavity-mucosa" label="Mucosa" initialText="pálida" />
      <Comments parentId="nasal-cavity" />
    </ul>
  </fieldset>
);

export default NasalCavity;
