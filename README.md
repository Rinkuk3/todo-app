# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

To run the Frontend containing the `TodoList` component, follow these steps:

Note: Node.js should be installed on your system.

Setup Instructions:

1. Clone the Repository:
   git clone <https://github.com/Rinkuk3/todo-app.git>

2. Navigate to the Directory
  go to ToDo directory

3. Install Dependencies
   Install the required dependencies using npm or yarn.
   npm install

4. Start the Development Server:
   Start the development server to run the application locally.
   npm start or yarn start

5. Access the Application:
   Once the development server is running, you can access the Application in your browser by navigating to the provided URL (usually `http://localhost:3000` by default).

Packaging Instructions:

If you want to package the application for deployment or distribution, you can do it with a build command.

For example, 
npm run build or yarn build

This command generates a production build of the application in the `build` directory, which can then be deployed to a web server.

## Learn More

Overview of Design and Architectural Choices
1. The app is divided into several components such as App, TodoList, TodoInput, and TodoItem for better organization and reusability.
2. App is the main component that holds the state of the todo list and manages adding, toggling, and filtering todos.
3. TodoList component renders the list of todos and passes down necessary props to child components.
4. TodoInput component handles user input for adding new todos.
5. TodoItem component represents each individual todo item in the list.
6. React useState hook is utilized for managing component-level state such as todos and filter.
7. localStorage is used to persist todos across page reloads, ensuring data persistence.
8. Adding Todos: Users can add new todos by typing into the input field and pressing the "Add" button.
9. Toggling Todos: Todos can be marked as completed or active by clicking on the checkbox beside each todo item.
10. Filtering Todos: Users can filter todos based on their completion status (All, Active, Completed).

What happens if localStorage is unavailable, or there’s invalid input?

If localStorage is unavailable due to browser settings or browser compatibility issues:
One approach is to provide a fallback mechanism, such as using in-memory storage or notifying the user about the unavailability of persistent storage.
or 
Log errors related to localStorage access for debugging purposes, which can help in diagnosing issues and troubleshooting.
For invalid input:
Provide feedback to the user when invalid input is detected. This could include displaying error messages, highlighting the input fields with invalid data, or disabling the action associated with invalid input until it's corrected