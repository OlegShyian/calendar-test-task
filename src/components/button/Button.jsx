import styles from './styles.module.scss';

export const Button = ({ title, onClick }) => {
  return (
    <button onClick={onClick} className={styles.base}>
      <span>{title}</span>
    </button>
  );
};
