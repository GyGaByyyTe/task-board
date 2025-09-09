import React from 'react';
import styles from './Avatar.module.css';

export interface AvatarProps {
  src?: string;
  alt?: string;
  size?: number;
  children?: React.ReactNode; // fallback content (emoji/initial)
}

export const Avatar: React.FC<AvatarProps> = ({ src, alt = '', size = 18, children }) => {
  const style: React.CSSProperties = {
    width: size,
    height: size,
  };
  return (
    <span className={styles.avatar} style={style} aria-label={alt} role={alt ? 'img' : undefined}>
      {src ? <img className={styles.img} src={src} alt={alt} /> : children}
    </span>
  );
};