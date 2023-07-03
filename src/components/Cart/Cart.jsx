import React, { useContext, useEffect, useState } from 'react'
import {FaCartArrowDown} from 'react-icons/fa';

import './Cart.css';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

export const Cart = () => {

    
    let {cartItems} = useContext(CartContext);
    // let [cartItemsCount, setCartItemsCount] = useState(cartItems.length || 0);
    let [showCart, setShowCart] = useState(false);
    // let [cartItemsLength, setCartItemsLength] = useState(cartItems.length);


    let cartContainerStyles = {
        display: 'flex',
        flexDirection: (showCart === true)?'column':'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        padding: '0.2rem 0.4rem',
        /* width: 4rem; */
        // columnGap: '0.7rem',
        // cursor: 'pointer',
        width: '14rem',
        position: 'relative',
        left: '0rem',
        color: 'orange'
        // position: 'absolute',
        // left: '10rem',
        // top: (showCart === true)? '1rem': 'initial'
        // border: '1px solid black'
    };
    
  return (
    <div style={cartContainerStyles} >
        <div onClick={()=>{console.log(showCart); setShowCart(!showCart); console.log(showCart)}} className='flex items-center gap-x-[0.7rem] hover:bg-[#ffd993] hover:text-white font-bold rounded-xl p-2 cursor-pointer'><FaCartArrowDown className='text-[1.6rem]'/> <span className='text-xl'>{cartItems.length}</span></div>
        {showCart && (
            
            <div className='bg-[#e7e7e7] overflow-hidden absolute inset-x-0 top-12 rounded-lg py-2 text-[#000] font-bold w-full lg:w-[20rem] '>
                {(cartItems.length === 0)?<div className='no-items-added-msg text-center'>No items added to Cart yet.</div>:
                    <ul className='flex flex-col gap-y-5'>
                        {
                            cartItems.map(item=>(
                                
                                <Link to='cart' className='hover:bg-[lightgray] w-full px-2 rounded-md'>
                                    <div key={item.id} className='flex items-center justify-between gap-y-1 w-full border-b-2 border-slate-500 last:border-b-0'>
                                        <div className='flex flex-col '>
                                            <div className='font-bold text-[orange] text-md'>{item.title}</div>
                                            <div className='font-bold text-[black] text-sm text-slate-500'>Qty: {item.qty}</div>
                                        </div>
                                        
                                        <div className='flex flex-col items-center self-start text-slate-700 gap-y-1 lg:gap-y-2'>
                                            <div className='text-sm'><span className='text-[orange]'>$</span> {item.price}</div>
                                            <div className='text-sm'>{item.rating} / <span className='text-[orange]'>5</span></div>     
                                        </div>
                                        {/* <div className='text-slate-700'><b>Stock:</b> {item.stock}</div> */}
                                    </div>
                                </Link>
                            ))
                        }
                    </ul>
                }
            </div>
        )}
    </div>
  )
}
