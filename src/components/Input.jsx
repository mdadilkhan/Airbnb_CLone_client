import React from "react";
import { BiDollar } from "react-icons/bi";
const Input = ({
  id,
  label,
  type,
  disabled,
  formatPrice,
  required,
  onChange,
  error,
}) => {

    console.log(id,label,type,disabled,formatPrice,required);
  return (
    <div className="w-full relative">
      {formatPrice && (
        <BiDollar
          size={24}
          className="
          text-neutral-700
          absolute
          top-5
          left-2
        "
        />
      )}
      <input
        id={id}
        disabled={disabled}
        placeholder=""
        type={type}
        onChange={onChange}
        className={`
        peer
        w-full
        p-4
        pt-6 
        font-light 
        bg-white 
        border-2
        rounded-md
        outline-none
        transition
        disabled:opacity-70
        disabled:cursor-not-allowed
        ${formatPrice ? "pl-9" : "pl-4"}
  
      `}
      />
      <label
        className={`
        absolute 
        text-md
        duration-150 
        transform 
        -translate-y-3 
        top-5 
        z-10 
        origin-[0] 
        ${formatPrice ? "left-9" : "left-4"}
        peer-placeholder-shown:scale-100 
        peer-placeholder-shown:translate-y-0 
        peer-focus:scale-75
        peer-focus:-translate-y-4

      `}
      >
        {label}
      </label>
    </div>
  );
};

export default Input;



// ${errors[id] ? "border-rose-500" : "border-neutral-300"}
// ${errors[id] ? "focus:border-rose-500" : "focus:border-black"}




// label
// ${errors[id] ? 'text-rose-500' : 'text-zinc-400'}