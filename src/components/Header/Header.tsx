import React from 'react';
import styles from './Header.module.css';

const HeaderComponent: React.FC = () => {
  return (
    <header>
      <h1 className={styles.title}>Design weekly</h1>
      <p className={styles.subtitle}>A board to keep track of design progress.</p>
    </header>
  );
};

export const Header = React.memo(HeaderComponent);
