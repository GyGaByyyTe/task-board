import React from 'react';
import styles from './Board.module.css';

interface BoardProps {
  children: React.ReactNode;
}

const BoardComponent: React.FC<BoardProps> = ({ children }) => {
  return <div className={styles.board}>{children}</div>;
};

export const Board = React.memo(BoardComponent);
