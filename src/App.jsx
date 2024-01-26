import Modal from "./components/Modal"
import Navbar from "./components/Navbar"
import RegisterModal from './components/RegisterModal'
import LoginModal from "./components/LoginModal"
import ToasterProvider from "./providers/ToasterProvider"
import axios from "axios"
axios.defaults.withCredentials = true;

const App=()=> {


 

  return (
    <>
      <ToasterProvider/>
      <RegisterModal/>
      <LoginModal/>
      <Navbar/>
      <h1 className="text-rose-500 text-2xl">Hello Airbnb!</h1>
     

   
    </>
  )
}

export default App
