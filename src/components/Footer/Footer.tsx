import React from 'react';
import styles from './Footer.module.css';

interface FooterProps {
  count: number;
  clearCompleted: () => void;
  filter: string;
  setFilter: (filter: string) => void;
}

const Footer: React.FC<FooterProps> = ({ count, clearCompleted, filter, setFilter }) => {
  return (
    <footer className={styles.footer}>
      <span className={styles.todo_count}>
        <strong>{count}</strong> items left
      </span>
      <ul className={styles.filters}>
        <li>
          <a
            href="#/"
            className={filter === 'all' ? `${styles.selected}` : ''}
            onClick={() => setFilter('all')}>
            All
          </a>
        </li>
        <li>
          <a
            href="#/active"
            className={filter === 'active' ? `${styles.selected}` : ''}
            onClick={() => setFilter('active')}>
            Active
          </a>
        </li>
        <li>
          <a
            href="#/completed"
            className={filter === 'completed' ? `${styles.selected}` : ''}
            onClick={() => setFilter('completed')}>
            Completed
          </a>
        </li>
      </ul>
      <button className={styles.clear_completed} onClick={clearCompleted}>
        Clear completed
      </button>
    </footer>
  );
};

export default Footer;
