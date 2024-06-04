import React from 'react';
import styles from './AddTask.module.css';

interface AddTaskProps {
  addTask: (text: string) => void;
}
const AddTask: React.FC<AddTaskProps> = ({ addTask }) => {
  const [text, setText] = React.useState('');

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && text.trim()) {
      addTask(text);
      setText('');
    }
  };

  return (
    <input
      className={styles.new_todo}
      placeholder="What needs to be done?"
      autoFocus
      value={text}
      onChange={(e) => setText(e.target.value)}
      onKeyDown={handleKeyDown}
    />
  );
};

export default AddTask;
