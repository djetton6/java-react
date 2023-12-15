import './App.css';
import TodoTable from './components/TodoTable';
import { todos } from './todos';

function App() {

  return (
    <div className='mt-5 container'>
      <div className="card">
        <div className="card-header">
            Java Practice
        </div>
        <div className="card-body">
        <TodoTable todos={todos} />
        </div>
      </div>
    </div>
  );
}

export default App;
