import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TodoList from './TodoList';
import FilterButtons from './FilterButtons';
import { BsSearch, BsPlus } from 'react-icons/bs';
import { addTodo, updateSearchTerm } from '../redux/actions';

const Todo = () => {
  // Retrieve the todos and filter state from Redux store
  const todos = useSelector((state) => state.todos);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  // Local state to manage new todo text and search term
  const [newTodoText, setNewTodoText] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  // Dispatch action to add a new todo
  const handleAddTodo = (text) => {
    dispatch(addTodo(text));
  };

  // Handler for the Add Todo button click
  const handleAddTodoClick = () => {
    if (newTodoText.trim() !== '') {
      handleAddTodo(newTodoText.trim());
      setNewTodoText(''); // Clear the input field after adding the todo
    }
  };

  // Dispatch action to update the search term
  const handleSearchChange = (value) => {
    setSearchTerm(value);
    dispatch(updateSearchTerm(value));
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500 shadow-xl rounded-xl">
      {/* Title of the application */}
      <h2 className="text-5xl font-extrabold text-gray-900 mb-8 text-center">
        TODO App
      </h2>
      <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
        {/* Input field for adding a new todo */}
        <input
          id="addTodoInput"
          className="flex-grow p-5 border border-gray-400 rounded-lg bg-white text-lg focus:outline-none focus:ring-4 focus:ring-purple-400 transition duration-200"
          type="text"
          placeholder="Add New Todo"
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)} // Update local state on input change
        />
        {/* Button to add the new todo */}
        <button
          className="p-5 bg-gradient-to-r from-teal-500 to-cyan-600 text-white rounded-full shadow-xl hover:shadow-2xl transition-shadow duration-300 flex items-center justify-center"
          onClick={handleAddTodoClick} // Call the handler to add the todo on button click
        >
          <BsPlus size={28} />
        </button>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
        {/* Component for filtering todos */}
        <FilterButtons />
        <div className="flex items-center gap-6">
          {/* Input field for searching todos */}
          <input
            className="flex-grow p-5 border border-gray-400 rounded-lg bg-white text-lg focus:outline-none focus:ring-4 focus:ring-purple-400 transition duration-200"
            type="text"
            placeholder="Search Todos"
            value={searchTerm}
            onChange={(e) => handleSearchChange(e.target.value)} // Update search term on input change
          />
          {/* Button to trigger search action */}
          <button className="p-5 bg-gradient-to-r from-teal-500 to-cyan-600 text-white rounded-full shadow-xl hover:shadow-2xl transition-shadow duration-300 flex items-center justify-center">
            <BsSearch size={28} />
          </button>
        </div>
      </div>

      {/* Component to display the list of todos */}
      <TodoList />
    </div>
  );
};

export default Todo;
