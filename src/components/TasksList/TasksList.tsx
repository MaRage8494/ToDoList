import React from 'react';
import { Task, Todo } from '../Task/Task';
import styles from './TasksList.module.css';

interface TodoListProps {
  todos: Todo[];
  toggleTodo: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo }) => {
  return (
    <ul className={styles.todo_list}>
      {todos.map((todo) => (
        <Task key={todo.id} todo={todo} toggleTodo={toggleTodo} />
      ))}
    </ul>
  );
};

export default TodoList;
