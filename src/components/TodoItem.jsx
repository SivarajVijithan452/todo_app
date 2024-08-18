import { useDispatch } from 'react-redux';
import {
  toggleTodo,
  removeTodo,
  markCompleted,
  markIncomplete,
} from '../redux/actions';
import { FaToggleOn, FaToggleOff, FaTrash, FaCheck, FaTimes } from 'react-icons/fa';

// Component to display individual todo items with action buttons and status
const TodoItem = ({ todo, index }) => {
  const dispatch = useDispatch();

  return (
    <li className="flex flex-col sm:flex-row sm:items-center justify-between border-b-2 py-4 px-6 bg-white shadow-md rounded-lg mb-4 transition-transform transform hover:scale-105">
      <div className="flex items-center flex-grow">
        {/* Display the index of the todo item */}
        <span className="mr-4 text-gray-600 font-medium text-lg">
          {index + 1}.
        </span>
        {/* Display the todo text, with line-through styling if completed */}
        <span className={`mr-4 text-lg ${todo.completed ? 'line-through text-gray-400' : 'text-gray-800'}`}>
          {todo.text}
        </span>
        {/* Display status */}
        <span className={`text-sm font-medium ${todo.completed ? 'text-green-600' : 'text-yellow-600'}`}>
          {todo.completed ? 'Completed' : 'Pending'}
        </span>
      </div>
      <div className='flex items-center gap-3 ml-4'>
        {/* Toggle completion status button */}
        <button
          className="text-lg bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition duration-300"
          onClick={() => dispatch(toggleTodo(index))}
        >
          {todo.completed ? <FaToggleOff /> : <FaToggleOn />}
        </button>
        {/* Remove todo button */}
        <button
          className="text-lg bg-red-600 text-white p-2 rounded-full hover:bg-red-700 transition duration-300"
          onClick={() => dispatch(removeTodo(index))}
        >
          <FaTrash />
        </button>
        {/* Mark as completed button (visible only if todo is not completed) */}
        {!todo.completed && (
          <button
            className="text-lg bg-green-600 text-white p-2 rounded-full hover:bg-green-700 transition duration-300"
            onClick={() => dispatch(markCompleted(index))}
          >
            <FaCheck />
          </button>
        )}
        {/* Mark as incomplete button (visible only if todo is completed) */}
        {todo.completed && (
          <button
            className="text-lg bg-yellow-600 text-white p-2 rounded-full hover:bg-yellow-700 transition duration-300"
            onClick={() => dispatch(markIncomplete(index))}
          >
            <FaTimes />
          </button>
        )}
      </div>
    </li>
  );
};

export default TodoItem;
