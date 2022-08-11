import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { getFromLS, setToLS } from '../../utils';
import styles from './styles.module.scss';
import { login } from '../../redux';

export const LoginSignInView = () => {
  const [enteredData, setEntered] = useState({ userName: '', password: '' });
  const [passError, setError] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEntered((current) => ({ ...current, [name]: value }));
  };

  const signIn = ({ password, ...user }) => {
    dispatch(login(user));
    setToLS('user', user);
    navigate('/calendar');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { userName, password } = enteredData;
    const users = getFromLS('users', []);
    const user = users.find((user) => user.userName === userName);

    if (user) {
      if (user.password === password) {
        signIn(user);
      } else {
        setError('password is incorrect');
      }
    } else {
      const newUser = { userName, password, tasks: {} };
      setToLS('users', [...users, newUser]);
      signIn(newUser);
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <h3>Please, log in or sign up</h3>
        <input
          type='text'
          placeholder='Login'
          name='userName'
          value={enteredData.userName}
          onChange={handleInputChange}
          required
        />
        <input
          type='password'
          placeholder='Password'
          name='password'
          value={enteredData.password}
          onChange={handleInputChange}
          required
        />
        <div>
          <span>{passError}</span>
        </div>
        <button>Login/Sign up</button>
      </form>
    </div>
  );
};
