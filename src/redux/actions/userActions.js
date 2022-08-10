import { userConstants } from '../constants';

export const login = (user) => {
  return { type: userConstants.USER_LOGIN, payload: user };
};

export const logout = () => {
  return { type: userConstants.LOGOUT };
};

export const saveUserTasks = (tasks) => {
  return { type: userConstants.SAVE_USER_TASKS, payload: tasks };
};
