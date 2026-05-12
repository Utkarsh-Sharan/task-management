import { PenBox, Trash2 } from 'lucide-react';
import React, { useState } from 'react'
import { useTaskStore } from '../../store/useTaskStore';

const TaskBox = ({id, title}) => {
  const {
    toggleTaskCompletion, 
    updateTask, 
    deleteTask,
  } = useTaskStore();

  const [isUpdatingTask, setIsUpdatingTask] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [taskCompleted, setTaskCompleted] = useState(false);

  const toggleCompletion = (id) => {
    toggleTaskCompletion({taskId: id});
    setTaskCompleted(prev => !prev);
  }

  const toggleUpdate = () => {
    setIsUpdatingTask((prev) => !prev);
  }

  const handleUpdate = (id) => {
    updateTask({taskId: id, title: newTitle});
    setNewTitle("");
    toggleUpdate();
  }

  const handleDelete = (id) => {
    deleteTask({taskId: id});
  }

  return (
    <article className='flex justify-between items-center w-full bg-black/30 rounded-lg p-4 text-white'>
        <div className='flex justify-center items-center gap-2'>
            
            {isUpdatingTask ?
            <input 
                ref={inputRef}
                type="text"
                className='w-full bg-brand-secondary text-white rounded-md pl-2'
                placeholder='Enter new title'
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
            /> :
            <>
                <input 
                    type="checkbox" 
                    className='w-5 h-5'
                    checked={taskCompleted}
                    onChange={() => toggleCompletion(id)}
                />
                <p className={`text-base ${taskCompleted ? "line-through text-gray-500" : ""}`}>{title}</p>
            </>
            }
        </div>

        {isUpdatingTask ?
        <button 
            className='bg-brand-tertiary text-white px-2 py-1 rounded-md'
            onClick={() => handleUpdate(id)}
        >
            Save
        </button> :
        <div className='flex justify-center items-center gap-2'>
            <PenBox onClick={toggleUpdate} />
            <Trash2 onClick={() => handleDelete(id)} />
        </div>}
    </article>
  )
}

export default TaskBox