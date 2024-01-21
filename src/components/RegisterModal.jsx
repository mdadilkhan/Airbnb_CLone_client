import React, { useState } from 'react'
import axios from 'axios';
import { AiFillGithub } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc'
import { URL } from '../../config';
import Modal from './Modal';
import { onClose,onOpen } from '../redux/slices/userSlice';
import { useDispatch,useSelector } from 'react-redux';
import Heading from './Heading';
import Input from './Input';
const RegisterModal = () => {
   const {isOpen} =useSelector((state)=>state.user);
   const [formData,setFormData]=useState({})
   const [isLoading,setIsLoading]=useState(false)


   const handleChange=(e)=>{
    setFormData({...formData,[e.target.name]: e.target.value})
   }


   const handleSubmit=(e)=>{
      e.preventDefault();
      setIsLoading(true);
      axios.post(`${URL}/register`,formData)
      .then(()=>{
        // setIsLoading(false)
      }).catch((error)=>{
        console.log(error);
        // setIsLoading(true);
      }).finally(()=>{
        setIsLoading(false);
      })
   }


  const bodyContent=()=>{
    return(
        <div className='flex flex-col gap-4'>
            <Heading
                title="Welcome to Airbnb"
                subtitle="Create an Account"
            />
            <Input 
                id="email"
                label="Email"
                type="email"
                disabled={isLoading}
                required
            />
            <Input 
                id="name"
                label="Name"
                type="text"
                disabled={isLoading}
                required
            />
            <Input 
                id="password"
                label="Password"
                type="password"
                disabled={isLoading}
                required
            />
        </div>
    )
  }

  return (
    <Modal 
      disabled={isLoading}
      isOpen={isOpen} 
      title="Register"
      actionLabel="Continue"
      onClose={onClose} 
      onSubmit={handleSubmit}
      body={bodyContent}
      /> 
     
  )
}

export default RegisterModal