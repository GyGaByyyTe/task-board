import React from 'react';
import styles from './Card.module.css';
import { AvatarProps } from '../Avatar';
import { AvatarGroup } from '../AvatarGroup';

interface CardProps {
  title: string;
  description?: string;
  avatars?: (AvatarProps & { id: string })[];
  footer?: React.ReactNode;
}

const CardComponent: React.FC<CardProps> = ({ title, description, avatars, footer }) => {
  return (
    <article className={styles.card}>
      {(avatars && avatars.length > 0) && (
        <div className={styles.header}>
          <AvatarGroup items={avatars} />
        </div>
      )}
      <h3 className={styles.title}>{title}</h3>
      {description && <p className={styles.description}>{description}</p>}
      {footer && <div className={styles.footer}>{footer}</div>}
    </article>
  );
};

export const Card = React.memo(CardComponent);
