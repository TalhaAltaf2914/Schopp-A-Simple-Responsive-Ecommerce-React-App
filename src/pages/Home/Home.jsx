import React, { useContext, useEffect, useState } from 'react'
import './Home.css';
import axios from 'axios';
import Products from '../../components/Products/Products';
import Footer from '../../components/Footer/Footer';
import { CartContext } from '../../context/CartContext';

const Home = () => {
    let [products, setProducts] = useState([]);
    let [skip, setSkip] = useState(0);
    let [limit, setLimit] = useState(10);
    let {cartItems} = useContext(CartContext);
    
    const getProducts = () =>{
        axios.get(`https://dummyjson.com/products?skip=${skip}&limit=${limit}`).then(res=>{
            console.log(res.data.products);
            setProducts(res.data.products);
            console.log(res.data.skip);
            console.log(res.data.limit);
        }).catch(err=>console.log(err));
    }

    useEffect(()=>{
        getProducts();
        // console.log('called')
    }, []);

  return (
    <>
      <main >
        <Products products={products} setProducts={setProducts} />
      </main>
      <Footer />
    </>
  )
}

export default Home;