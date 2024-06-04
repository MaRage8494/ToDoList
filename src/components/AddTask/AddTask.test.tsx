import { render, screen, fireEvent } from '@testing-library/react';
import AddTask from './AddTask';

describe('AddTask component', () => {
  test('Добавление новой задачи', () => {
    const addTaskMock = jest.fn();
    render(<AddTask addTask={addTaskMock} />);

    const inputElement = screen.getByPlaceholderText('What needs to be done?');
    fireEvent.change(inputElement, { target: { value: 'Test Task' } });
    fireEvent.keyDown(inputElement, { key: 'Enter', code: 'Enter' });

    expect(addTaskMock).toHaveBeenCalledTimes(1);
    expect(addTaskMock).toHaveBeenCalledWith('Test Task');
  });
});
