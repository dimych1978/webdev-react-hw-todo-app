import { deleteTodos } from '../api';
import { useLoading } from '../hooks/useLoading';
import { Spinner } from './Spinner';

const DeleteBtn = ({ todo, setTodos }) => {
  const [isLoading, setIsLoading] = useLoading();

  const handleDelete = async () => {
    setIsLoading(true);
    const newTodos = await deleteTodos(todo);

    setTodos(newTodos.todos);
    setIsLoading(false);
    // Удаление из своего списка
    //  setTodos(todos.filter(item => item.id !== todo));
  };

  return (
    <>
      <button disabled={isLoading} onClick={handleDelete}>
        {isLoading ? 'Удаление...' : 'Удалить'}
      </button>
      <Spinner display={isLoading ? 'inline-block' : 'none'} />
    </>
  );
};

export default DeleteBtn;
