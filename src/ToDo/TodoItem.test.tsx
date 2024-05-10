import { render, fireEvent } from '@testing-library/react';
import TodoItem from './TodoItem';

test('renders TodoItem component with correct text and checkbox state for completed todo', () => {
  const todo = { id: 1, text: 'Completed Todo', completed: true };
  const { getByText, getByRole } = render(<TodoItem todo={todo} toggleTodo={() => {}} />);
  const todoText = getByText('Completed Todo');
  const checkbox = getByRole('checkbox');

  expect(todoText).toBeInTheDocument();
  expect(checkbox).toBeInTheDocument();
  expect(checkbox).toBeChecked();
});

test('calls toggleTodo function when checkbox is clicked', () => {
  const toggleTodoMock = jest.fn();
  const todo = { id: 1, text: 'Test Todo', completed: false };
  const { getByRole } = render(<TodoItem todo={todo} toggleTodo={toggleTodoMock} />);
  const checkbox = getByRole('checkbox');

  fireEvent.click(checkbox);

  expect(toggleTodoMock).toHaveBeenCalledWith(1);
});


test('renders TodoItem component with long text', () => {
  const todo = { id: 1, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', completed: false };
  const { getByText } = render(<TodoItem todo={todo} toggleTodo={() => {}} />);
  const todoText = getByText('Lorem ipsum dolor sit amet, consectetur adipiscing elit.');
  expect(todoText).toBeInTheDocument();
});

test('renders TodoItem component with empty text', () => {
  const todo = { id: 1, text: '', completed: false };
  const { getByText } = render(<TodoItem todo={todo} toggleTodo={() => {}} />);
  const todoText = getByText('');
  expect(todoText).toBeInTheDocument();
});

test('calls toggleTodo function when todo text is clicked', () => {
  const toggleTodoMock = jest.fn();
  const todo = { id: 1, text: 'Test Todo', completed: false };
  const { getByText } = render(<TodoItem todo={todo} toggleTodo={toggleTodoMock} />);
  const todoText = getByText('Test Todo');

  fireEvent.click(todoText);

  expect(toggleTodoMock).toHaveBeenCalledWith(1);
});

test('calls toggleTodo function when Enter key is pressed on todo text', () => {
  const toggleTodoMock = jest.fn();
  const todo = { id: 1, text: 'Test Todo', completed: false };
  const { getByText } = render(<TodoItem todo={todo} toggleTodo={toggleTodoMock} />);
  const todoText = getByText('Test Todo');

  fireEvent.keyPress(todoText, { key: 'Enter', code: 13, charCode: 13 });

  expect(toggleTodoMock).toHaveBeenCalledWith(1);
});
