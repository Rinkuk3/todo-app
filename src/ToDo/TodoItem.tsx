import React from 'react';

interface TodoItemProps {
  todo: {
    id: number;
    text: string;
    completed: boolean;
  };
  toggleTodo: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleTodo }) => {
  const handleToggle = () => {
    toggleTodo(todo.id);
  };

  return (
    <li  className="todo-input-form" style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
      <input type="checkbox" checked={todo.completed} onChange={handleToggle} />
      {todo.text}
    </li>
  );
};

export default TodoItem;
