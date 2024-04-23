import React from 'react'
import { LiaTimesSolid } from "react-icons/lia";
import { baseImgUrl } from '../../helpers/functions-general';
import { BsCart2 } from "react-icons/bs";
import { FaTrash } from 'react-icons/fa';
import { BsCartX } from "react-icons/bs";

const ModalCart = ({setCartShow, cartItem, setCartItem}) => {

    const handleClose = () => setCartShow(false);
    const handleEmptyCart = () => setCartItem([]);

    const getSubTotal = cartItem.reduce(
        (a, c) => a + Number(c.price),
        0,
    );

    const handleRemoveItem = (itemToRemove) => {
        const updatedCartItems = cartItem.filter(
          (item) => item.title !== itemToRemove.title
        );
        setCartItem(updatedCartItems);
    };

  return (
    <div className='modal fixed inset-0 flex justify-end items-center isolate'>
        <div className="backdrop h-screen w-full bg-black/40 absolute top-0 left-0 z-[-1]"></div>
        <div className="modal__main max-w-[400px] w-full h-screen bg-white">
            <div className='p-4 flex justify-between items-center border-b border-gray-300'>
                <h4 className='mb-0 flex gap-2 items-center font-bold text-2xl'><BsCart2 className='text-2xl'/>Cart</h4> 
                <div className='flex gap-4'>
                    {cartItem.length !== 0 && (
                        <button className='text-xl' onClick={handleEmptyCart}><FaTrash/></button>
                    )}
                    <button className='text-2xl' onClick={handleClose}><LiaTimesSolid/></button>
                </div>
                
            </div>

            <div className="px-4 py-10 max-h-[780px] h-full overflow-auto">
                {cartItem.map((item, key) =>(
                    <div className="cartItem mb-5 flex gap-4 items-center" key={key}>
                        <img src={`${baseImgUrl}/${item.img}`} alt="" className='rounded-full size-[70px]'/>
                        <div>
                            <h4 className>{item.title}s</h4>
                            <p>Php {item.price}</p>
                        </div>
                        <button onClick={() => handleRemoveItem(item)}>Remove</button>
                    </div>
                ))}

                {cartItem.length === 0 && (
                    <div className="empty__card flex flex-col justify-center items-center gap-3">
                        <BsCartX className='text-[80px] opacity-30'/>
                        <h3 className='font-bold opacity-25'>Cart Empty</h3>
                    </div>
                )}
                
            
            </div>

            <ul className='p-4 bg-accent text-white rounded-md flex justify-between text-xl mx-2'>
                <li className='font-bold '>Total</li>
                <li>Php {getSubTotal.toFixed(2)}</li>
            </ul>

        </div>
    </div>
  )
}

export default ModalCart