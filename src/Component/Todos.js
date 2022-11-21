import React from 'react'
import Todoslist from './Todoslist'

export default function Todos(props) {
  return (
    <>
      <div className='container' style={{ paddingLeft: "8rem" }}>
        <h3 className='my-3'>Todos List</h3></div>
      <div className='conatiner list text-center'>
        {props.todo.length === 0 ? "No Any todos " :
          props.todo.map((todo) => {
            return <Todoslist todo={todo} key={todo.sno} onDelete={props.onDelete} />
          })
        }
      </div>
    </>
  )
}
