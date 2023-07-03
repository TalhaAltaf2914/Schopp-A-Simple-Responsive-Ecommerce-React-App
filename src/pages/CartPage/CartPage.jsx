import React, { useContext } from 'react'
import Footer from '../../components/Footer/Footer'
import { CartContext } from '../../context/CartContext'
import CartPageItem from './CartPageItem';

const CartPage = () => {

  let {cartItems, setCartItems} = useContext(CartContext);
  // const handleQtyAction = (cart, ) =>{

  // }
  return (
    <>
      <main className='mt-10 flex flex-col px-4 md:px-8 gap-y-10'>
        { cartItems.length>=1? cartItems.map(item=>(
            <CartPageItem key={item.id} item={item} cartItems={cartItems} setCartItems={setCartItems} />
            
        )):<h1 className='text-center'>No items added to Cart yet.</h1>}
      </main>
      <Footer />
    </>
    
  )
}

export default CartPage