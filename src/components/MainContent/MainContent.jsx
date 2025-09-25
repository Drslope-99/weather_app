import styles from "./MainContent.module.css";

export default function MainContent({ children }) {
  return (
    <main className={`${styles.mainContent} container`}>
      <h1 className={styles.mainTitle}>How's the sky looking today?</h1>
      {children}
    </main>
  );
}
