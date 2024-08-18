import { composeWithDevTools } from 'redux-devtools-extension';
// Importing the createStore function from Redux to create the store
import { createStore } from 'redux';

// Importing the reducer that will handle the state of the todos
import todoReducer from './reducers';

// Creating the Redux store with the todoReducer, which will manage the todo list state
const store = createStore(todoReducer, composeWithDevTools());

// Exporting the store so it can be used throughout the React application
export default store;
