import React from 'react';
import { Outlet } from 'react-router-dom';
import { FooterView } from '../footer';
import { HeaderView } from '../header';
import styles from './style.module.scss';

export const MainLayoutView = () => {
  return (
    <div className={styles.wrapper}>
      <HeaderView />
      <main>
        <Outlet />
      </main>
      <FooterView />
    </div>
  );
};
