import React from 'react';
import styles from './Pill.module.css';

export type PillVariant = 'gray' | 'pink';

interface PillProps {
  children: React.ReactNode;
  variant?: PillVariant;
}

const PillComponent: React.FC<PillProps> = ({ children, variant = 'pink' }) => {
  return <span className={`${styles.pill} ${styles[variant]}`}>{children}</span>;
};

export const Pill = React.memo(PillComponent);