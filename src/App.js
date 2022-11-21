import { useState } from 'react';
import './App.css';
import Addtodo from './Component/Addtodo';
import Footer from './Component/Footer';
import Navbar from './Component/Navbar';
import Todos from './Component/Todos';

function App() {
  const [todos, setTodos] = useState([]);

  const onDelete=(todo)=>{
     setTodos(todos.filter((e)=>{ 
        return e!==todo;
     }))
  }
  
  const addTodo =(title, description)=>{
     console.log("I am durgesh add todo", title,description);
     let  sno;
     if(todos.length == 0)
     {
       sno = 1;
     }else{
        sno = todos[todos.length-1].sno+1;
     }

     const myTodo = {
      sno: sno,
     title:title,
      description: description
     }
     setTodos([...todos, myTodo]);
  }
  
  return (
    <>
      <Navbar title="Todos List" />
      <Addtodo addTodo = {addTodo}/>
      <Todos todo = {todos} onDelete = {onDelete}/>
      <Footer/>
    </>
  );
}

export default App;
