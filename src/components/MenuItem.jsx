import React from 'react'

const MenuItem = ({onClick,label}) => {
    console.log(onClick);
    console.log(label);
  return (
    <div onClick={onClick} className='py-3 px-4 hover:bg-neutral-100 transition font-semibold'>
     {label}
    </div>
  )
}

export default MenuItem