import React, { useState } from 'react'
import updateLocalStorageCart from '../../utilities/updateLocalStorageCart';

const CartPageItem = ({item, cartItems ,setCartItems}) => {
    let [itemQty, setItemQty] = useState((item.qty >=1)? item.qty: 0);
    
    const handleQtyAction = (e)=>{
        // alert(e.target.value);
        if(e.target.value === '-'){
            item.qty -= 1;
            if(item.qty === 0){
                cartItems = cartItems.filter(currItem=>(currItem.id !== item.id));
                console.log(cartItems);
            }
            setItemQty(item.qty);
        }
        else{
            item.qty+=1;
            setItemQty(item.qty);
        }

        // console.log(cartItems.map(currItem=>{
        //     // if(currItem.id === item.id){
        //         if(currItem.id === item.id && item.qty>=1)
        //             currItem.qty = item.qty;
        //         else

        //     // }
        // }));
        
        // updateLocalStorageCart()

        console.log(cartItems);
        updateLocalStorageCart(cartItems);
        setCartItems(cartItems);
    }
  return (
    <div className={`${(itemQty<=0)? 'hidden': 'flex'} justify-between items-center gap-x-10 border-b-2 border-slate-500 w-full`}>
        <div className='flex flex-col justify-between gap-x-10 gap-y-2'>
            <div className='font-bold text-[orange] text-md'>{item.title}</div>
            <div className='text-lg text-slate-800'><span className='text-[orange]'>$</span> {item.price}</div>
        </div>

        <div className='flex gap-x-2'>
            <button className={'font-bold text-xl cursor-pointer'} onClick={handleQtyAction} value={'-'}>-</button>
            <label className='font-bold text-[black] text-xl text-slate-500'>{item.qty}</label>
            <button className='font-bold text-xl cursor-pointer' value={'+'} onClick={handleQtyAction}>+</button>

        </div>
    </div>
  )
}

export default CartPageItem