import React from 'react';
import { useSelector } from 'react-redux';
import { MdDeleteForever } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { removeTodo } from '../Redux/features/todo/todoSlice';

const Todolist = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <div>
      {todos.map((todo) => (
        <div className='bg-slate-100 flex items-center p-2 max-w-4xl ml-80 mb-4' key={todo.id}>
          <p className='flex-grow text-center'>{todo.text}</p>
          {/* <span className='flex-grow text-center'>{todo.text}</span> */}
          <button className='text-3xl' onClick={() => dispatch(removeTodo(todo.id))}>
            <MdDeleteForever />
          </button>
        </div>
      ))}
    </div>
  );
};

export default Todolist;
