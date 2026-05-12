import TaskInput from '../components/Input/TaskInput.jsx'
import Task from '../components/Task/Task.jsx'

const LandingPage = () => {
  return (
    <section className='flex flex-col items-center gap-10 h-full pt-10 pb-10 w-11/12 md:w-1/2'>
        <TaskInput />
        
        <Task />
    </section>
  )
}

export default LandingPage