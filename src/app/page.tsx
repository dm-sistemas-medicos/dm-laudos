import styles from "./page.module.scss";

const Page = () => (
  <section className={styles.page}>
    <h1 className={styles.title}>DM Laudos</h1>
    <p className={styles.description}>Sistema para geração de laudos médicos</p>
  </section>
);

export default Page;
