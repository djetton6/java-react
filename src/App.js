import './App.css';
import TodoTable from './components/TodoTable';

function App() {

  return (
    <div className='mt-5 container'>
      <div className="card">
        <div className="card-header">
            Java Practice
        </div>
        <TodoTable />
      </div>
    </div>
  );
}

export default App;
