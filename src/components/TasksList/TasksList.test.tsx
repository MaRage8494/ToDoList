import { render, screen, fireEvent } from '@testing-library/react';
import TasksList from './TasksList';
import { Todo } from '../Task/Task';
import styles from './TasksList.module.css';

const sampleTasks: Todo[] = [
  { id: 1, text: 'Test Task 1', completed: false },
  { id: 2, text: 'Test Task 2', completed: true },
];

describe('TasksList component', () => {
  test('Проверка на нажатие чекбокса', () => {
    const toggleTodoMock = jest.fn();
    render(<TasksList todos={sampleTasks} toggleTodo={toggleTodoMock} />);

    const firstTaskCheckbox = screen.getByLabelText('Test Task 1');
    fireEvent.click(firstTaskCheckbox);

    expect(toggleTodoMock).toHaveBeenCalledTimes(1);
    expect(toggleTodoMock).toHaveBeenCalledWith(1);
  });

  test('Рендер задач с правильными стилями', () => {
    render(<TasksList todos={sampleTasks} toggleTodo={jest.fn()} />);

    const completedTask = screen.getByText('Test Task 2').closest('li');
    expect(completedTask).toHaveClass(styles.completed);
  });
});
