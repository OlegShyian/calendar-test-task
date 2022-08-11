import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import { MainLayoutView } from '../view';

export const Pages = ({ routes }) => {
  return (
    <Routes>
      <Route path='/' element={<MainLayoutView children={<Outlet />} />}>
        {routes.map(({ path, component: Component }) => {
          return <Route key={path} path={path} element={<Component />} />;
        })}
      </Route>
    </Routes>
  );
};
