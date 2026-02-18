import React, { useEffect, useState } from 'react'
import Task from './components/Task';

function App() {

  const [taskArray, setTaskArray] = useState([]);
  const [task, setTask] = useState('');
  const [displayTask, setDisplayTask] = useState([]);


  function updateTasks() {
    setTaskArray(prevArray => [...prevArray, task]);
    console.log(taskArray);
  }
  useEffect(()=> {
    setDisplayTask(() => taskArray.map(t=><li key={t} className='task'>{t}</li>))
  },[taskArray])

 
  return (
    <main>
      <h1 className='text-4xl text-center'>Todo App</h1>
      <div className='bg-amber-200 w-2xl flex flex-col justify-center items-center m-auto mt-4'>
          <input placeholder='Your tasks here' className='p-4 border-none bg-amber-500 m-2 text-white' type='text' value={task} onChange={(e) => {
              setTask(() => e.target.value);
          }} />

          <button className='p-2 bg-amber-600 text-white' onClick={updateTasks} >Add Task</button>
          <ul className='w-full p-4'>{displayTask}</ul>
    

      </div>

    </main>
  )
}

export default App