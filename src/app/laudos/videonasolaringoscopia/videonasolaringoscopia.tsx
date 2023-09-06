"use client";

import styles from "./videonasolaringoscopia.module.css";

import CavidadeNasal from "./components/cavidadenasal/cavidadenasal";
import Rinofaringe from "./components/rinofaringe/rinofaringe";

export const VideoNasoLaringoscopia = () => (
  <>
    <h1 className={styles.tituloExame}>Videonasolaringoscopia</h1>
    <form>
      <CavidadeNasal />
      <Rinofaringe />
      {/* 
      <div>
        <h2>FARINGE</h2>
        <ul>
          <li>
            <label>Mucosa:</label>
            <select>
              <option>...</option>
              <option>...</option>
              <option>Sem alterações</option>
            </select>
          </li>
          <li>
            <label>Língua:</label>
            <select>
              <option>...</option>
              <option>...</option>
              <option>Sem alterações</option>
            </select>
          </li>
          <li>
            <label>Base de língua:</label>
            <select>
              <option>...</option>
              <option>...</option>
              <option>Sem alterações</option>
            </select>
          </li>
          <li>
            <label>Amígdalas:</label>
            <select>
              <option>...</option>
              <option>...</option>
              <option>Sem alterações</option>
            </select>
          </li>
          <li>
            <label>Orofaringe:</label>
            <select>
              <option>...</option>
              <option>...</option>
              <option>Sem alterações</option>
            </select>
          </li>
          <li>
            <label>Hipofaringe:</label>
            <select>
              <option>...</option>
              <option>...</option>
              <option>Sem alterações</option>
            </select>
          </li>
          <li>
            <label>Epiglote:</label>
            <select>
              <option>...</option>
              <option>...</option>
              <option>Sem alterações</option>
            </select>
          </li>
          <li>
            <label>Prega faringoepiglotica:</label>
            <select>
              <option>...</option>
              <option>...</option>
              <option>Sem alterações</option>
            </select>
          </li>
          <li>
            <textarea></textarea>
          </li>
        </ul>
      </div>
      <div>
        <h2>LARINGE</h2>
        <ul>
          <li>
            <label>Pregas ariepiglóticas:</label>
            <select>
              <option>...</option>
              <option>...</option>
              <option>Sem alterações</option>
            </select>
          </li>
          <li>
            <label>Aritenóides:</label>
            <select>
              <option>...</option>
              <option>...</option>
              <option>Sem alterações</option>
            </select>
          </li>
          <li>
            <label>Incisura interaritenóidea:</label>
            <select>
              <option>...</option>
              <option>...</option>
              <option>Sem alterações</option>
            </select>
          </li>
          <li>
            <label>Pregas vestibulares:</label>
            <select>
              <option>...</option>
              <option>...</option>
              <option>Sem alterações</option>
            </select>
          </li>
          <li>
            <label>Pregas vocais:</label>
            <select>
              <option>...</option>
              <option>...</option>
              <option>Sem alterações</option>
            </select>
          </li>
          <li>
            <label>Luz glótica:</label>
            <select>
              <option>...</option>
              <option>...</option>
              <option>Sem alterações</option>
            </select>
          </li>
          <li>
            <label>Recessos piriformes:</label>
            <select>
              <option>...</option>
              <option>...</option>
              <option>Sem alterações</option>
            </select>
          </li>
        </ul>
      </div>
      <div>
        <h2>CONCLUSÃO</h2>
        <textarea value="ADICIONAR OPÇÃO PARA SELECIONAR OS ITENS QUE DEVEM APARECER AQUI" />
      </div> 
    */}
    </form>
  </>
);

export default VideoNasoLaringoscopia;
