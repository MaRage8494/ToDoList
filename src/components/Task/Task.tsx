import React from 'react';
import styles from './Task.module.css';

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}
interface TodoItemProps {
  todo: Todo;
  toggleTodo: (id: number) => void;
}
export const Task: React.FC<TodoItemProps> = ({ todo, toggleTodo }) => {
  return (
    <li className={`${todo.completed ? styles.completed : ''} ${styles.todo}`}>
      <div className={styles.view}>
        <div className={styles.checkbox_wrapper}>
          <input
            id={todo.id.toString()}
            key={todo.id.toString()}
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleTodo(todo.id)}
          />
          <svg viewBox="0 0 35.6 35.6">
            <circle className={styles.background} cx="17.8" cy="17.8" r="17.8"></circle>
            <circle className={styles.stroke} cx="17.8" cy="17.8" r="14.37"></circle>
            <polyline
              className={styles.check}
              points="11.78 18.12 15.55 22.23 25.17 12.87"></polyline>
          </svg>
        </div>
        <label htmlFor={todo.id.toString()}>{todo.text}</label>
      </div>
    </li>
  );
};
