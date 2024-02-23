import React from 'react'

const Todoapp = () => {
  return (
 
<div>
    <h1 className='text-5xl m-10 text-center text-zinc-300 '>todooo</h1>
    <form className='flex justify-center m-16' action=" ">
        <input className='bg-orange-400 py-1 px-6 text-center  outline-none' type="text" />
        <button className='bg-orange-300 py-2 px-6 r text-lg' >add to do </button>
    </form>
</div>


//   <div class="flex">
    
//         <h1 class="text-2xl font-bold mb-4 text-center">Todo App</h1>

//     <div class=" flex">
//             <input type="text" id="todoInput" placeholder="Add a new todo" class=" p-2 border rounded-l focus:outline-none focus:border-blue-500"/>
//             <button onclick="addTodo()" class="px-4 bg-blue-500 text-white rounded-r">Add</button>
//         </div>
//     </div>
  )
}

export default Todoapp