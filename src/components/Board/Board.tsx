import React from 'react';
import styles from './Board.module.css';

interface BoardProps {
  children: React.ReactNode;
}

export const Board: React.FC<BoardProps> = ({ children }) => {
  return <div className={styles.board}>{children}</div>;
};
