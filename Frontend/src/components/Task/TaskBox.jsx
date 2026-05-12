import { PenBox, Trash2 } from 'lucide-react';
import React from 'react'
import { useTaskStore } from '../../store/useTaskStore';

const TaskBox = ({id, title}) => {
  const {deleteTask} = useTaskStore();

  const handleUpdate = () => {

  }

  const handleDelete = (id) => {
    deleteTask({taskId: id});
  }

  return (
    <article className='flex justify-between items-center w-full bg-black/30 rounded-lg p-4 text-white'>
        <div className='flex justify-center items-center gap-2'>
            <input 
                type="checkbox" 
                className='w-5 h-5'
                // onChange={() => {}} handle toggle
            />
            <p className='text-base'>{title}</p>
        </div>

        <div className='flex justify-center items-center gap-2'>
            <PenBox />
            <Trash2 onClick={() => handleDelete(id)} />
        </div>
    </article>
  )
}

export default TaskBox