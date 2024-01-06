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

  const handleNewTodo = (assigned, description) => {
    let rowNumber = 0;
    if (todos.length > 0) {
      rowNumber = todos[todos.length - 1].rowNumber + 1;
    } else {
      rowNumber = 1;
    }
      const newTodo = {
        rowNumber: rowNumber, 
        rowDescription: description,
        rowAssigned: assigned
      };
      setTodos(todos => [...todos, newTodo])
    }

  const deleteTodo = (deleteTodoRowNumber) => {
    let filtered = todos.filter(function (value) {
      return value.rowNumber !== deleteTodoRowNumber;
    });
    setTodos(filtered);
  }
  
  return (
    <div className='mt-5 container'>
      <div className="card">
        <div className="card-header">
            Java Practice
        </div>
        <div className="card-body">
        <TodoTable todos={todos} deleteTodo={deleteTodo} />
        <button className='btn btn-primary' onClick={handleNewTodo}>
          Add New Todo</button>
          <NewTodoForm addTodo={handleNewTodo} />
        </div>
      </div>
    </div>
  );
}

export default App;
