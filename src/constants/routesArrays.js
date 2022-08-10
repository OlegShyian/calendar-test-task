import { Navigate } from 'react-router-dom';
import { CalendarView, LoginSignInView } from '../view';

export const commonRoutes = [
  { path: '/', component: () => <Navigate to='/login' replace /> },
  { path: '/*', component: () => <Navigate to='/login' replace /> },
  { path: '/login', component: () => <LoginSignInView /> },
];

export const privateRoutes = [
  { path: '/', component: () => <Navigate to='/calendar' replace /> },
  { path: '/*', component: () => <Navigate to='/calendar' replace /> },
  { path: '/calendar', component: () => <CalendarView /> },
];
