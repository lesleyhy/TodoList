import { useState } from 'react';
import './App.css';

import Todo from "./components/Todo"


function App() {

  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const todoItem = {
    text:newTodo,
    complete:false
  }

  
 //Create
  const handleNewTodoSubmit = (e) =>{
    e.preventDefault();
    if(newTodo.length === 0){
      return;
    }
    setTodos([...todos, todoItem]) //all old todos plus new todo
    setNewTodo("")
  }
 //Delete
  const todoDelete = (delIdx) =>{
    const filteredTodos = todos.filter((todo,i)=>{
      return i !== delIdx;
    })
    setTodos(filteredTodos);
  }
  // CheckBox
  const handleCheck = (idx) => {
    const updatedTodos = todos.map((todo,i) =>{
      if(i === idx){
        todo.complete = !todo.complete;
        // const updatedTodos = {...todo, complete: !todo.complete};
        // return updatedTodos;
      }
      return todo;
    });
    setTodos(updatedTodos);
  }

  return (
    <div className="App">
      <form onSubmit={(e)=>{
        handleNewTodoSubmit(e)
      }}>
        <input onChange={(e)=>{
          setNewTodo(e.target.value);
        }} type="text" value={newTodo}/>

        <button>Add</button>
      </form>

      {
        todos.map((todo,i)=>{


          return <Todo 
          key={i}
          i={i}
          todo={todo} 
          handleCheck={handleCheck}
          todoDelete={todoDelete}
          />
        })
      }

    </div>
  );
}

export default App;
