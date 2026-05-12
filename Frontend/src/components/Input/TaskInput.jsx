import { useState } from "react"
import { useTaskStore } from "../../store/useTaskStore.js";

const TaskInput = () => {
  const [task, setTask] = useState("");
  const {getAllTasks, createTask} = useTaskStore();

  const handleClick = () => {
    getAllTasks();
    createTask({title: task});

    setTask("");
  }

  return (
    <article className='w-full flex justify-center gap-5'>
        <input 
          type="text"
          className='bg-black/30 w-4/5 h-16 rounded-md text-white pl-2 text-xl'
          placeholder={`What's in your mind?`}
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <button 
          className='bg-brand-secondary text-white text-4xl text-center bg-brand w-1/5 h-16 rounded-md'
          onClick={handleClick}
        >+</button>
    </article>
  )
}

export default TaskInput