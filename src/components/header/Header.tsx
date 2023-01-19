import React, { FC } from 'react';
import styles from './styles.module.scss';

export const Header: FC = () => (
  <header className={styles.header}>
    <h1 className={styles.title}>Ты сегодня покормил кота?</h1>
  </header>
);

