import React, { useState } from 'react'

export default function Addtodo({addTodo}) {
    const [title, settitle] = useState('');
    const [desc, setdesc] = useState('');

    const submit= (e)=>{
       e.preventDefault();
       if(!title || !desc)
       {
         alert("title and description cannot be blank");
        }else{
           addTodo(title, desc);
       }
    }
    return (
        <>
              <h2 className='text-center my-4'>Add List</h2>
            <form className='container my-3 Writetext ' onSubmit={submit}>
                <div class="mb-3">
                    <label for="title" class="form-label">Title</label>
                    <input type="text" class="form-control"  value={title} id="title" aria-describedby="emailHelp" onChange={(e)=>{settitle(e.target.value)}}/>
                
                </div>
                <div class="mb-3">
                    <label for="desc" class="form-label">Description</label>
                    <input type="text" class="form-control" id="desc" value={desc}  onChange={(e)=>{setdesc(e.target.value)}}/>
                </div>
                <div className='text-center'>
                <button type="submit" class="btn btn-primary ">Submit</button></div>
            </form>
        </>
    )
}
