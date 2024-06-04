import React from 'react';
import styles from './App.module.css';
import AddTask from '../components/AddTask/AddTask';
import { Todo } from '../components/Task/Task';
import Footer from '../components/Footer/Footer';
import TasksList from '../components/TasksList/TasksList';

const App: React.FC = () => {
  const [tasks, setTasks] = React.useState<Todo[]>(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [filter, setFilter] = React.useState('all');
  React.useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text: string) => {
    const newTask: Todo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (id: number) => {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)),
    );
  };

  const clearCompleted = () => {
    setTasks(tasks.filter((task) => !task.completed));
  };

  const filteredTodos = tasks.filter((task) => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  return (
    <>
      <h1 className={styles.title}>todos</h1>
      <div className={styles.todoapp}>
        <AddTask addTask={addTask} />
        <TasksList todos={filteredTodos} toggleTodo={toggleTask} />
        <Footer
          count={tasks.filter((task) => !task.completed).length}
          clearCompleted={clearCompleted}
          filter={filter}
          setFilter={setFilter}
        />
      </div>
    </>
  );
};

export default App;
