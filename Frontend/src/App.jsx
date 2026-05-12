import LandingPage from "./pages/LandingPage.jsx"
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <section className='w-full flex items-center justify-center h-screen bg-brand-primary'>
        <LandingPage />
      </section>

      <Toaster />
    </>
  )
}

export default App
