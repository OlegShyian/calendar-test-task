import { useMemo, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { Button } from '../../../components/button';
import { IconImage } from '../../../components/icons';
import Modal from '../../../components/modal/Modal';
import { useModal } from '../../../hooks';
import { saveUserTasks } from '../../../redux';
import { saveToLS } from '../../../utils/saveToLS';
import styles from './styles.module.scss';

export const UserTasks = ({ date }) => {
  const [textError, setError] = useState('');
  const textRef = useRef(null);
  const { open, close, isOpen } = useModal();
  const dispatch = useDispatch();
  const { tasks, userName } = useSelector((store) => store.userReducer.user);
  const renderTask = useMemo(() => {
    return tasks[date] || [];
  }, [date, tasks]);
  console.log(tasks);
  const handleChangeStatus = (taskId) => {
    const changed = tasks[date].map((task) => {
      const { id, isDone } = task;
      return id === taskId ? { ...task, isDone: !isDone } : task;
    });
    dispatch(saveUserTasks({ ...tasks, [date]: changed }));
    saveToLS({ ...tasks, [date]: changed }, userName);
  };

  const handleRemoveTask = (taskId) => {
    const changed = tasks[date].filter((task) => task.id !== taskId);
    dispatch(saveUserTasks({ ...tasks, [date]: changed }));
    saveToLS({ ...tasks, [date]: changed }, userName);
  };

  const handleAddTask = () => {
    const taskText = textRef.current.value;
    if (!taskText) {
      setError('input field cannot be empty');
      return;
    }
    const task = { text: taskText, id: Date.now(), isDone: false };
    if (!tasks.hasOwnProperty(date)) {
      dispatch(saveUserTasks({ ...tasks, [date]: [task] }));
      saveToLS({ ...tasks, [date]: [task] }, userName);
    } else {
      const save = {
        ...tasks,
        [date]: [...tasks[date], task],
      };
      dispatch(saveUserTasks(save));
      saveToLS(save, userName);
    }
    textRef.current.value = '';
    close();
    setError('');
  };

  return (
    <div className={styles.taskContainer}>
      <Modal
        isOpen={isOpen}
        close={() => {
          close();
          setError();
          textRef.current.value = '';
        }}
        onSubmit={handleAddTask}
      >
        <textarea ref={textRef}></textarea>
        <div className={styles.errorContainer}>
          <span className={styles.errorMessage}>{textError}</span>
        </div>
      </Modal>
      <ul>
        {renderTask.map(({ isDone, text, id }) => (
          <li key={id}>
            <input type='checkbox' name='name' checked={isDone} onChange={() => handleChangeStatus(id)} />
            <span className={isDone ? styles.done : ''}>{text}</span>
            <IconImage icon='remove' className={styles.iconImage} onClick={() => handleRemoveTask(id)} />
          </li>
        ))}
      </ul>
      <div>
        <Button title='Add new task ...' onClick={open} />
      </div>
    </div>
  );
};
