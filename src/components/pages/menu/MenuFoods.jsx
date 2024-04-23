import React from 'react'
import { food } from './data'
import { baseImgUrl } from '../../helpers/functions-general'

const MenuFoods = () => {
  return (
    <div className='mb-10'> 
        <h4 className='text-2xl font-bold mb-10 border-b border-gray-200 py-5'>Foods</h4>
        <div className="grid grid-cols-2 gap-5">

          {food.map((item, key) => (
            <div className='flex gap-6 items-center mb-6' key={key}>
              <img src={`${baseImgUrl}/${item.img}`} className='rounded-full size-[110px]' alt="" />
              <h5 className='text-base font-bold'>{item.title}</h5>
            </div>
          ))}
          
        </div>
    </div>
  )
}

export default MenuFoods