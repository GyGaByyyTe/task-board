import React from 'react';
import styles from './AvatarGroup.module.css';
import { Avatar, AvatarProps } from '../Avatar';

interface AvatarGroupProps {
  items: (AvatarProps & { id: string })[];
}

export const AvatarGroup: React.FC<AvatarGroupProps> = ({ items }) => {
  return (
    <div className={styles.group}>
      {items.map((a) => (
          <Avatar key={a.id} {...a} />
      ))}
    </div>
  );
};