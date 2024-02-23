import { useState } from 'react'
import Todoapp from './components/Todoapp'
import Todolist from './components/Todolist'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='text-center flex-col -'>
<Todoapp/>
<Todolist/>
<todolist/>
    </div>
  )
}

export default App
