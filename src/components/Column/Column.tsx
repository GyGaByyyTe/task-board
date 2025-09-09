import React from 'react';
import styles from './Column.module.css';

interface ColumnProps {
  title: string;
  children: React.ReactNode;
}

const ColumnComponent: React.FC<ColumnProps> = ({ title, children }) => {
  return (
    <section className={styles.column}>
      <div className={styles.header}>
        <span className={styles.titleChip}>{title}</span>
      </div>
      <div className={styles.stack}>{children}</div>
    </section>
  );
};

export const Column = React.memo(ColumnComponent);
