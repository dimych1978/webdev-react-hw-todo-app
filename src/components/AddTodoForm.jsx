import { useState } from 'react';
import { addTodos } from '../api';
import { useLoading } from '../hooks/useLoading';
import { Spinner } from './Spinner';
export function AddTodoForm({ setTodos }) {
  const [newTodoText, setNewTodoText] = useState('');
  const [isLoading, setIsLoading] = useLoading();
  const handleAddTodoClick = async () => {
    if (!newTodoText) {
      return;
    }

    setIsLoading(true);
    const newTodos = await addTodos(newTodoText);
    setIsLoading(false);

    setTodos(newTodos.todos);
    setNewTodoText('');
  };

  return (
    <div>
      <h3>Добавить задачу</h3>
      <input
        value={newTodoText}
        onChange={event => {
          setNewTodoText(event.target.value);
        }}
      />
      <button disabled={isLoading} onClick={handleAddTodoClick}>
        {isLoading ? 'Задача добавляется' : 'Добавить задачу'}
      </button>
      <Spinner display={isLoading ? 'inline-block' : 'none'} />
    </div>
  );
}
