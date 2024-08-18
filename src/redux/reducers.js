// reducers.js

// Importing action type constants from the actionTypes file
import {
    ADD_TODO,
    TOGGLE_TODO,
    REMOVE_TODO,
    MARK_COMPLETED,
    MARK_INCOMPLETE,
    FILTER_TODOS,
    MARK_ALL_COMPLETED,
    UPDATE_SEARCH_TERM,
  } from './actionTypes';
  
  // Initial state for the todo list, including an array for todos, 
  // a filter for viewing todos, and a search term for filtering todos by text
  const initialState = { 
    todos: [], 
    filter: 'ALL', 
    searchTerm: '' 
  };
  
  // Reducer function to manage the state of the todo list
  // Based on the action type, the reducer will return a new state
  const todoReducer = (state = initialState, action) => {
    switch (action.type) {
      // Handling the addition of a new todo
      case ADD_TODO:
        return {
          ...state,
          todos: [...state.todos, { text: action.payload.text, completed: false }],
        };
  
      // Handling the toggling of a todo's completion status
      case TOGGLE_TODO:
        return {
          ...state,
          todos: state.todos.map((todo, index) =>
            index === action.payload.id ? { ...todo, completed: !todo.completed } : todo
          ),
        };
  
      // Handling the removal of a todo item
      case REMOVE_TODO:
        return {
          ...state,
          todos: state.todos.filter((todo, index) => index !== action.payload.id),
        };
  
      // Handling marking a specific todo item as completed
      case MARK_COMPLETED:
        return {
          ...state,
          todos: state.todos.map((todo, index) =>
            index === action.payload.id ? { ...todo, completed: true } : todo
          ),
        };
  
      // Handling marking a specific todo item as incomplete
      case MARK_INCOMPLETE:
        return {
          ...state,
          todos: state.todos.map((todo, index) =>
            index === action.payload.id ? { ...todo, completed: false } : todo
          ),
        };
  
      // Handling filtering of the todos based on the selected filter
      case FILTER_TODOS:
        return {
          ...state,
          filter: action.payload.filter,
        };
  
      // Handling updating the search term for filtering todos
      case UPDATE_SEARCH_TERM:
        return {
          ...state,
          searchTerm: action.payload.searchTerm,
        };
  
      // Handling marking all todos in the list as completed
      case MARK_ALL_COMPLETED:
        return {
          ...state,
          todos: state.todos.map((todo) => ({ ...todo, completed: true })),
        };
  
      // Default case to return the current state if the action type doesn't match
      default:
        return state;
    }
  };
  
  export default todoReducer;
  