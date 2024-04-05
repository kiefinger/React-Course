import './App.css';
import {useState} from 'react';


import Todos from './components/Todos';
import Todo from './model/Todo';
import NewTodo from './components/NewTodo';


function App() {
    const [todos, setTodos] = useState<Todo[]>([]);

    const addTodoHandler = (todoText: string) => {
       const newTodo = new Todo(todoText);
       setTodos( (old) => ( [ ...old, newTodo]));

    }

  const onRemoveTodoHandler = (id: string) => {
    setTodos ((prev) => {
        return prev.filter( todo => todo.id !== id);
        });
  }

  return (
    <div className="App">
    <NewTodo onAddTodo={addTodoHandler} />
    <Todos items={todos} onRemoveTodo={onRemoveTodoHandler}/>
    </div>
  );
}

export default App;
