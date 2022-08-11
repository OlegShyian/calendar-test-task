import { getFromLS } from '../../utils';
import { userConstants } from '../constants';

const user = getFromLS('user', {});
const initialState = user.userName ? { loggedIn: true, user } : { loggedIn: false, user: {} };

console.log(initialState);
export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case userConstants.USER_LOGIN:
      return { ...state, loggedIn: true, user: payload };
    case userConstants.SAVE_USER_TASKS:
      return { ...state, user: { ...state.user, tasks: { ...payload } } };
    case userConstants.LOGOUT:
      return { ...state, loggedIn: false, user: {} };
    default:
      return state;
  }
};
