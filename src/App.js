import './App.css';
import TodoTable from './components/TodoTable';
import { todos } from './todos';

function App() {

  const handleNewTodo = () => {
    if (todos.length > 0) {
      const newTodo = {
        rowNumber: todos.length + 1, 
        rowDescription: 'New Todo',
        rowAssigned: 'User Three'
      };
      todos.push(newTodo);
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
        </div>

      </div>
    </div>
  );
}

export default App;
