import React, { useCallback, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "./Avatar";
import MenuItem from "./MenuItem";
import {useSelector} from 'react-redux'
import toast from 'react-hot-toast';
import { onOpenRegister,onCloseRegister} from '../redux/slices/userRegisterSlice'
import {onOpenLogin,onCloseLogin} from '../redux/slices/userLoginSlice'
import axios from "axios";
import { URL } from "../../config";


const UserMenu = () => {
  const {currentUser}=useSelector((state)=>state.userDetails)
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);
 
  const logout=()=>{
    axios.post(`${URL}/logout`).
    then((res)=>{
         if(res.status===200){
          toast.success("SuccessFully Logout")
          window.location.reload();
         }
    }).catch(()=>{
      toast.error("Failed to Logout")
    })
  } 

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          onClick={() => {}}
          className="hidden sm:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer"
        >
          Airbnb Your Home
        </div>
        <div
          onClick={toggleOpen}
          className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="absolute rounded-xl shadow-md md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm">
          <div className="flex flex-col cursor-pointer">
          {
            currentUser?
               <>
                <MenuItem onClick={()=>{alert("My trips")}} label="My trips"/>
                <MenuItem onClick={()=>{alert("My favourites")}} label="My favourites"/>
                <MenuItem onClick={()=>{alert("My reservations")}} label="My reservation"/>
                <MenuItem onClick={()=>{alert("My properties")}} label="My properties"/>
                <MenuItem onClick={()=>{alert("Airbnb my home")}} label="Airbnb my home"/>
                <hr/>
                <MenuItem onClick={()=>{logout()}} label="Logout"/>
               </>
            
            :(
              <>
              <MenuItem onClick={onOpenLogin}  label={"Login"} />
              <MenuItem onClick={onOpenRegister} label={"Signup"} />
            </>
            )}
            
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
