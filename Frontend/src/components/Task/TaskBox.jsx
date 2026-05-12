import { PenBox, Trash2 } from 'lucide-react';
import React from 'react'

const TaskBox = ({id, title}) => {
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
            <Trash2 />
        </div>
    </article>
  )
}

export default TaskBox