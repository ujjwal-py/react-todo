import React, { useEffect, useState } from 'react';

function App() {
  const [taskArray, setTaskArray] = useState(() => {
    // gettings tasks from local storage
    const saved = localStorage.getItem('tasks');
    return saved ? JSON.parse(saved) : [];
  });

  const [task, setTask] = useState('');


// saving changes in local storage
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(taskArray));
  }, [taskArray]);

    //function to update taskarray 
  function updateTasks() {
    const trimmed = task.trim();
    if (!trimmed) {
      window.alert('Input is empty!');
      return;
    }

    setTaskArray((prevArray) => [...prevArray, trimmed]);
    setTask('');
  }

  // filtering tasks on the basis of index
  const removeByIndex = (idx) => {
    setTaskArray((prev) => prev.filter((_, i) => i !== idx));
  };

  return (
    <main>
      <h1 className='text-4xl text-center text-white'>Todo App</h1>
      <div className='bg-amber-200 w-2xl flex flex-col m-auto mt-4 min-h-52 rounded-2xl'>
        <div className='flex flex-row justify-center w-full'>
          <input
            placeholder='Your tasks here'
            className='p-4 border-none bg-amber-500 x text-white w-3/4'
            type='text'
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button
            className='p-2 bg-amber-600 text-white w-1/4 hover:bg-amber-400'
            onClick={updateTasks}
          >
            Add Task
          </button>
        </div>

        <ul className='w-full p-4'>
          {taskArray.map((t, i) => (
            <div className='task' key={i}>
              <li>{t}</li>
              <button
                className='text-green-400 hover:text-green-200 cursor-pointer'
                onClick={() => removeByIndex(i)}
              >
                Done
              </button>
            </div>
          ))}
        </ul>
      </div>
    </main>
  );
}

export default App;
