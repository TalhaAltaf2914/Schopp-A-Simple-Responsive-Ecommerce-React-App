import React, { useContext } from 'react'
import { FaCartPlus } from 'react-icons/fa'
import { CartContext } from '../../context/CartContext';

const Product = ({product}) => {
    
    let {cartItems, setCartItems} = useContext(CartContext);

    const handleAddToCart = (e) =>{
        e.preventDefault();
        console.log(cartItems);
        let itemPreviouslyAdded = cartItems.find(item => item.id === product.id);

        if(itemPreviouslyAdded){
            cartItems.map(item=>{
                if(item.id === product.id)
                    item.qty++;
            });

            console.log('item previously added:');
            console.log(`updated cart items list: ${cartItems}`)

            setCartItems(cartItems);
            localStorage.setItem('cart', JSON.stringify(cartItems));

            return;
        }

        cartItems.push({...product, qty:1});
        localStorage.setItem('cart', JSON.stringify(cartItems));
        setCartItems(JSON.parse(localStorage.getItem('cart')));
        // alert(`${cartItems.length}`)
    }

  return (
    <div className='flex flex-col items-center gap-y-4 lg:w-fit'>
        <img src={product.thumbnail} className='rounded-xl w-full h-full object-cover' alt='product-pic' />
        
        <div className='flex flex-col gap-y-2.5 w-full p-3'>
            <div className='self-start font-bold text-[orange] text-lg'>{product.title}</div>
            <div className='text-slate-700'>{product.description}</div>
            
            <div className='flex justify-between text-slate-700'>
                <div><span className='text-[orange]'>$</span> {product.price}</div>
                <div>{product.rating} / <span className='text-[orange]'>5</span></div>     
            </div>
            <div className='text-slate-700'><b>Stock:</b> {product.stock}</div>
        </div>

        <button onClick={handleAddToCart} className='bg-[orange] rounded-xl w-full p-3 flex items-center justify-center gap-x-4 text-white font-bold hover:bg-[#e7e7e7] hover:text-[orange] text-xl'><FaCartPlus /> Add to Cart</button>
        
    </div>
  )
}

export default Product