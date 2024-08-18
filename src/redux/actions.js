// actions.js

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
  
  // Action creator for adding a new todo item
  // It takes the text of the todo as a payload
  export const addTodo = (text) => ({
    type: ADD_TODO,
    payload: { text },
  });
  
  // Action creator for toggling the completion status of a todo item
  // It takes the id of the todo to be toggled as a payload
  export const toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    payload: { id },
  });
  
  // Action creator for removing a todo item
  // It takes the id of the todo to be removed as a payload
  export const removeTodo = (id) => ({
    type: REMOVE_TODO,
    payload: { id },
  });
  
  // Action creator for marking a specific todo item as completed
  // It takes the id of the todo to be marked as completed as a payload
  export const markCompleted = (id) => ({
    type: MARK_COMPLETED,
    payload: { id },
  });
  
  // Action creator for marking a specific todo item as incomplete
  // It takes the id of the todo to be marked as incomplete as a payload
  export const markIncomplete = (id) => ({
    type: MARK_INCOMPLETE,
    payload: { id },
  });
  
  // Action creator for filtering the todo list based on a specific filter
  // It takes the filter value (e.g., "All", "Completed", "Incomplete") as a payload
  export const filterTodos = (filter) => ({
    type: FILTER_TODOS,
    payload: { filter },
  });
  
  // Action creator for marking all todos in the list as completed
  // It does not require any payload
  export const markAllCompleted = () => ({
    type: MARK_ALL_COMPLETED,
  });
  
  // Action creator for updating the search term used to filter todos
  // It takes the search term entered by the user as a payload
  export const updateSearchTerm = (searchTerm) => ({
    type: UPDATE_SEARCH_TERM,
    payload: { searchTerm },
  });
  