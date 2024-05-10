import React from 'react';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';

enum Filter {
    All,
    Active,
    Completed,
}

interface TodoListProps {
  todos: { id: number; text: string; completed: boolean }[];
  addTodo: (text: string) => void;
  toggleTodo: (id: number) => void;
  filter: Filter;
  setFilter: React.Dispatch<React.SetStateAction<Filter>>;
}
const TodoList: React.FC<TodoListProps> = ({ todos, addTodo, toggleTodo, filter, setFilter }) => {
  const filteredTodos = todos.filter(todo => {
    if (filter === Filter.Active) {
      return !todo.completed;
    }
    if (filter === Filter.Completed) {
      return todo.completed;
    }
    return true;
  });

  return (
    <div>
      <h1>Todo App</h1> 
      <TodoInput addTodo={addTodo} />
    
      <div>
        <br></br>
        <button onClick={() => setFilter(Filter.All)}>All</button>&nbsp; 
        <button onClick={() => setFilter(Filter.Active)}>Active</button> &nbsp; 
        <button onClick={() => setFilter(Filter.Completed)}>Completed</button>
      </div>
      <ul>
        {filteredTodos.map(todo => (
          <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
        ))}
      </ul>
    </div>
  );
};
  
export default TodoList;
