import styles from './Conteiner.module.css';

type conteinerProps = {
  children: React.ReactNode;
};

export function Conteiner({ children }: conteinerProps) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>{children}</div>
    </div>

  );
}