import React from 'react';
import './App.css';
import { Provider } from 'react-redux'; // Import Provider from react-redux
import store from './redux/store'; // Import the Redux store
import Todo from './components/Todo';

function App() {
  return (
    <Provider store={store}>
      {/* Now the Redux store is available to all components within App */}
      <>
        <Todo/>
      </>
    </Provider>
  );
}

export default App;
