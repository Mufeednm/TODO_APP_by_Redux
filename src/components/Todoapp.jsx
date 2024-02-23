import React from 'react'
import { useState } from 'react'
import {  useDispatch } from 'react-redux'
import { addTodo  } from '../Redux/features/todo/todoSlice'
const Todoapp = () => {
  const [input,setInput]= useState ("")
  const dispatch = useDispatch()

  const addtodohandler = (e)=>{
    e.preventDefault(),
    dispatch(addTodo(input))
    setInput (" ")

  }
  return (
 
<div>
    <h1 className='text-5xl m-10 text-center text-zinc-300 '>todooo</h1>
    <form onSubmit={addtodohandler} className='flex justify-center m-16' action=" ">
        <input 
        value={input }
        onChange={(e)=>setInput(e.target.value)}
        className='bg-orange-400 py-1 px-6 text-center  outline-none'
         type="text" />
        <button type='submit' className='bg-orange-300 py-2 px-6 r text-lg' >add to do </button>
    </form>
</div>



  )
}

export default Todoapp