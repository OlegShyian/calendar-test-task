import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { dateFormatter, removeFromLS } from '../../utils';
import styles from './style.module.scss';
import { logout } from '../../redux';
import { useNavigate } from 'react-router-dom';
import { UserTasks } from './tasks';
import { Button } from '../../components/button';
import { IconImage } from '../../components/icons';

export const CalendarView = () => {
  const currentDate = dateFormatter();
  const [selectedDate, setSelectedDate] = useState(currentDate);
  const dispatch = useDispatch();
  const user = useSelector((store) => store.userReducer.user);
  const navigate = useNavigate();

  const handleDecreaseDay = () => {
    const date = new Date(selectedDate);
    date.setDate(date.getDate() - 1);
    setSelectedDate(dateFormatter(date));
  };

  const handleIncreaseDay = () => {
    const date = new Date(selectedDate);
    date.setDate(date.getDate() + 1);
    setSelectedDate(dateFormatter(date));
  };

  const handleLogOut = () => {
    dispatch(logout());
    removeFromLS('user');
    navigate('/login');
  };
  if (!user) {
    dispatch(logout());
  }

  return (
    <div className={styles.mainContainer}>
      <aside>
        <div className={styles.userInfo}>
          <div className={styles.userIcon}>
            <IconImage icon='defaultUser' className={styles.icon} />
          </div>
          <span>{user.userName}</span>
          <Button title='Sign Out' onClick={handleLogOut} />
        </div>
      </aside>
      <article>
        <div className={styles.headerContainer}>
          <h1>My tasks</h1>
          <div className={styles.dateNav}>
            <button onClick={handleDecreaseDay} className={styles.navButton}>
              {'<'}
            </button>
            <input type='date' value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} />
            <button onClick={handleIncreaseDay} className={styles.navButton}>
              {'>'}
            </button>
          </div>
        </div>
        <UserTasks date={selectedDate} />
      </article>
    </div>
  );
};
