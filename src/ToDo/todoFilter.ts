export interface Todo {
    id: number;
    text: string;
    completed: boolean;
  }
  
  export const addTodo = (todos: Todo[], text: string): Todo[] => {
    const newTodo: Todo = { id: Date.now(), text, completed: false };
    return [...todos, newTodo];
  };
  
  export const toggleTodo = (todos: Todo[], id: number): Todo[] => {
    return todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
  };
  