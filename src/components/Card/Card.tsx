import React from 'react';
import styles from './Card.module.css';

interface CardProps {
  title: string;
  description?: string;
  footer?: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ title, description, footer }) => {
  return (
    <article className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      {description && <p className={styles.description}>{description}</p>}
      {footer && <div className={styles.footer}>{footer}</div>}
    </article>
  );
};