import styles from './Header.module.css';

export default function Header() {
  return (
    <div className={styles.header}>
      <h4 className={styles.title}>Title</h4>
      <p className={styles.desc}>Check</p>
    </div>
  );
}
