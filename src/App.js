import './App.css';
import { useState } from 'react';
import TodoTable from './components/TodoTable';
import NewTodoForm from './components/NewTodoForm';

function App() {

  const [todos, setTodos] = useState([
      {rowNumber: 1, rowDescription: 'Feed puppy', rowAssigned: "User One"},
      {rowNumber: 2, rowDescription: "Talk with Janette", rowAssigned: "User Two"},
      {rowNumber: 3, rowDescription: "Go to the gym", rowAssigned: "User One"},
      {rowNumber: 4, rowDescription: "Jump into the new one", rowAssigned: "Figure Out"}
    ]);

  const handleNewTodo = () => {
    if (todos.length > 0) {
      const newTodo = {
        rowNumber: todos.length + 1, 
        rowDescription: 'New Todo',
        rowAssigned: 'User Three'
      };
      setTodos(todos => [...todos, newTodo])
    }
  }

  return (
    <div className='mt-5 container'>
      <div className="card">
        <div className="card-header">
            Java Practice
        </div>
        <div className="card-body">
        <TodoTable todos={todos} />
        <button className='btn btn-primary' onClick={handleNewTodo}>
          Add New Todo</button>
          <NewTodoForm />
        </div>
      </div>
    </div>
  );
}

export default App;
