import { useState } from "react";

export function AddTodoForm({ setTodos, todos }) {
  const [newTodoText, setNewTodoText] = useState("");

  const handleAddTodoClick = () => {
    if (!newTodoText) {
      return;
    }

    setTodos([...todos, { id: Date.now(), text: newTodoText }]);
    setNewTodoText("");
  };

  return (
    <div>
      <h3>Добавить задачу</h3>
      <input
        value={newTodoText}
        onChange={(event) => {
          setNewTodoText(event.target.value);
        }}
      />
      <button onClick={handleAddTodoClick}>Добавить задачу</button>
    </div>
  );
}
