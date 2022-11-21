import React from 'react'

export default function Todoslist({todo, onDelete}) {
  return (
    <>
       <div className='container details'>
        <h5>{todo.sno}</h5><hr/>
        <h4>{todo.title}</h4>
        <p>{todo.description}</p>
        <button className='btn btn-sm btn-danger' onClick={()=>{onDelete(todo)}}>Delete</button>
        </div>
    </>
  )
}
