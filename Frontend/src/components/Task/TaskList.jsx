import { useEffect } from 'react';
import { useTaskStore } from '../../store/useTaskStore.js'
import TaskBox from './TaskBox.jsx';

const TaskList = () => {
  const {tasks, reRenderTasks, getAllTasks} = useTaskStore();

  useEffect(() => {
    getAllTasks();
  }, [reRenderTasks]);

  return (
    <section className='grid grid-cols-1 md:grid-cols-2 md:w-full gap-2'>
        {tasks.length > 0 ?
        tasks.map(task => (
            <TaskBox key={task._id} id={task._id} title={task.title} />
        )) :
        <p className='text-white text-2xl'>No tasks created yet!</p>}
    </section>
  )
}

export default TaskList