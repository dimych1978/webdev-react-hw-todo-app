import { useEffect, useState } from 'react';
import { AddTodoForm } from '../components/AddTodoForm';
import DeleteBtn from '../components/DeleteBtn';
import { getTodos } from '../api';
import { useLoading } from '../hooks/useLoading';
import { Spinner } from '../components/Spinner';

export default function TodosPage() {
  const [todos, setTodos] = useState([
    // { id: 1, text: "Купить молоко" },
    // { id: 2, text: "Купить хлеб" },
    // { id: 3, text: "Купить масло" },
  ]);

  const [isLoading, setIsLoading] = useLoading();

  useEffect(() => {
    setIsLoading(!isLoading);
    getTodos()
      .then(todos => setTodos(todos.todos))
      .then(() => setIsLoading(false))
      .catch(error => console.warn(error.message));
  }, []);
  return (
    <>
      {!isLoading ? (
        <div className='page'>
          <h1>Список задач</h1>
          <ul>
            {todos.map(todo => {
              return (
                <li className='todo-item' key={todo.id}>
                  {todo.text}
                  <DeleteBtn todos={todos} todo={todo.id} setTodos={setTodos} />
                </li>
              );
            })}
          </ul>
          <AddTodoForm todos={todos} setTodos={setTodos} />
        </div>
      ) : (
        <Spinner display={'block'} width='225px' />
      )}
    </>
  );
}
