import Modal from "./components/Modal"
import Navbar from "./components/Navbar"
import RegisterModal from './components/RegisterModal'

const App=()=> {


  return (
    <>
      <RegisterModal/>
      <Navbar/>
      <h1 className="text-rose-500 text-2xl">Hello Airbnb!</h1>
     
    </>
  )
}

export default App
