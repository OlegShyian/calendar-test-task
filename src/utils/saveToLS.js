import { getFromLS, setToLS } from './localStorage';

export const saveToLS = (data, userName) => {
  const user = getFromLS('user', {});
  const users = getFromLS('users', []);
  const editedUsers = users.map((user) => (user.userName === userName ? { ...user, tasks: data } : user));
  setToLS('user', { ...user, tasks: data });
  setToLS('users', editedUsers);
};
