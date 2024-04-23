import React from 'react'
import { FaCheckCircle } from "react-icons/fa";

const Toast = ({setSuccess}) => {
    React.useEffect(() => { // it will run after the toast render in the modal
        setTimeout(() => {
            setSuccess(false)
        }, 900)
    }, [])
  return (
    <div className="toast fixed top-2 left-1/2 -translate-x-1/2 w-[300px] p-2 rounded-md bg-green-100 border-l-4 border-green-800 flex justify-between items-center shadow-md">
        <div className='flex gap-2 items-center'>
          <FaCheckCircle className='text-accent text-xl'/>
          <ul>
            <li><h5 className='font-bold'>Success</h5></li>
            <li><h5 className='text-sm'>Successfully Added to Cart!</h5></li>
          </ul>
        </div>
    </div>
  )
}

export default Toast