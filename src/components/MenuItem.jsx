import React from 'react'
import {useDispatch} from 'react-redux'
import { onClose,onOpen } from '../redux/slices/userSlice';
const MenuItem = ({onClick,label}) => {
  const dispatch=useDispatch()

  return (
    <div onClick={()=>{dispatch(onClick())}} className='py-3 px-4 hover:bg-neutral-100 transition font-semibold'>
     {label}
    </div>
  )
}

export default MenuItem