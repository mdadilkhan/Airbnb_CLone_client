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
import toast from 'react-hot-toast';
import Button from './Button';
const RegisterModal = () => {
   const {isOpen} =useSelector((state)=>state.user);
   const [formData,setFormData]=useState({})
   const [isLoading,setIsLoading]=useState(false)


   const handleChange=(e)=>{
    setFormData({...formData,[e.target.name]: e.target.value})
   }


   const handleSubmit=()=>{
    //   e.preventDefault();
      setIsLoading(true);
      axios.post(`${URL}/register`,formData)
      .then(()=>{
        // setIsLoading(false)
        toast.success('Login SuccessFul')
      }).catch((error)=>{
        console.log(error);
        toast.error('something went wrong')
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
  const footerContent = () => {
    return (
      <div className="flex flex-col gap-4 mt-3">
        <hr />
        <Button
          outline
          label="Continue With Google"
          icon={FcGoogle}
          onClick={() => {
            alert("continue with google");
          }}
        />
        <Button
          outline
          label="Continue With Github"
          icon={AiFillGithub}
          onClick={() => {
            alert("continue with github");
          }}
        />
        <div
          className="
          text-neutral-500 
          text-center 
          mt-4 
          font-light
        "
        >
          <p>
            Already have an account?
            <span
              // onClick={onToggle}
              className="
              text-neutral-800
              cursor-pointer 
              hover:underline
            "
            >
              Log in
            </span>
          </p>
        </div>
      </div>
    );
  };

  return (
    <Modal 
      disabled={isLoading}
      isOpen={isOpen} 
      title="Register"
      actionLabel="Continue"
      onClose={onClose} 
      onSubmit={handleSubmit}
      body={bodyContent}
      footer={footerContent}
      /> 
     
  )
}

export default RegisterModal