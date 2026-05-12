import { ListCheck } from 'lucide-react'
import React from 'react'

const TaskHeader = () => {
  return (
    <section className='flex justify-start items-center gap-2 text-2xl text-brand-text pb-2'>
        <ListCheck />
        <h2>Checklist</h2>
    </section>
  )
}

export default TaskHeader