import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = () => {
  // Retrieve and filter todos based on the current filter and search term from Redux store
  const filteredTodos = useSelector((state) => {
    const todos = state.todos;
    const filter = state.filter;
    const searchTerm = state.searchTerm.toLowerCase(); // Convert search term to lowercase for case-insensitive search

    return todos.filter((todo) => {
      // Determine if the todo matches the current filter
      const matchesFilter = (filter === 'COMPLETED' && todo.completed) ||
        (filter === 'INCOMPLETE' && !todo.completed) ||
        filter === 'ALL';

      // Check if the todo's text includes the search term
      const matchesSearch = todo.text.toLowerCase().includes(searchTerm);

      return matchesFilter && matchesSearch;
    });
  });

  // Log filtered todos for debugging purposes
  console.log('Filtered Todos:', filteredTodos);

  return (
    <ul className="space-y-4">
      {/* Placeholder item when there are no todos */}
      {filteredTodos.length === 0 ? (
        <li className="text-center text-gray-600 italic bg-gray-100 p-4 rounded-lg shadow-md">
          No Todos Found
        </li>
      ) : (
        filteredTodos.map((todo, index) => (
          <TodoItem key={index} todo={todo} index={index} />
        ))
      )}
    </ul>
  );
};

export default TodoList;
