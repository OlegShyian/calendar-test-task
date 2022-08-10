import styles from './styles.module.scss';

const Modal = ({ isOpen, close, onSubmit, children }) => {
  return (
    <div className={styles.background} style={{ display: isOpen ? 'block' : 'none' }}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h4>Add new Task</h4>
          <button onClick={close}>
            <span className={styles.symbolClose}>✕</span>
          </button>
        </div>
        <div>{children}</div>

        <div>
          <button className={styles.confirmButton} onClick={onSubmit}>
            <span>Add</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
