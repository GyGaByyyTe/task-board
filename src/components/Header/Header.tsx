import React from 'react';
import styles from './Header.module.css';

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Design weekly</h1>
      <p className={styles.subtitle}>A board to keep track of design progress.</p>
    </header>
  );
};
