import React, { useState, useEffect } from 'react';
import TodoList from './ToDo/TodoList';

enum Filter {
  All,
  Active,
  Completed,
}

const App: React.FC = () => {
  const [todos, setTodos] = useState<{ id: number; text: string; completed: boolean }[]>([]);
  const [filter, setFilter] = useState(Filter.All);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos') || '[]');
    setTodos(storedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text: string) => {
    const newTodo = { id: Date.now(), text, completed: false };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div>
        <TodoList 
          todos={todos}
          addTodo={addTodo}
          toggleTodo={toggleTodo}
          filter={filter}
          setFilter={setFilter} />
      </div>
  );
};

export default App;
