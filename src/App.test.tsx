
import { render, fireEvent } from '@testing-library/react';
import App from './App';
// Mocking localStorage
const localStorageMock = (() => {
  let store: Record<string, string> = {};

  return {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: string) => {
      store[key] = value.toString();
    },
    removeItem: (key: string) => {
      delete store[key];
    },
    clear: () => {
      store = {};
    },
  };
})();

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
});

test('renders App component without crashing', () => {
  render(<App />);
});

test('initial state is set correctly', () => {
  const { getByText } = render(<App />);
  expect(getByText('Todo App')).toBeInTheDocument();
});

test('adds new todo when addTodo function is called', () => {
  const { getByPlaceholderText, getByText, getByLabelText } = render(<App />);
  const input = getByPlaceholderText('Add new todo...');
  const addButton = getByText('Add');

  fireEvent.change(input, { target: { value: 'New Todo' } });
  fireEvent.click(addButton);

  expect(getByText('New Todo')).toBeInTheDocument();
});

test('toggles completion state of todo when toggleTodo function is called', () => {
  const { getByText } = render(<App />);
  const todoText = getByText('New Todo');
  const checkbox = getByText('New Todo').previousElementSibling as HTMLInputElement;

  fireEvent.click(checkbox);

  expect(todoText).toHaveStyle('text-decoration: line-through');
});

test('todos are saved to localStorage', () => {
  render(<App />);
  const storedTodos = JSON.parse(localStorage.getItem('todos') || '[]');
  expect(storedTodos).toHaveLength(1);
});
