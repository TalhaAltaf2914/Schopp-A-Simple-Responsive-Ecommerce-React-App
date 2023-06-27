import React, { useEffect } from 'react'
import './Home.css';
import axios from 'axios';

const Home = () => {
    const getProducts = () =>{
        axios.get('https://dummyjson.com/products').then(res=>console.log(res)).catch(err=>console.log(err));
    }

    useEffect(()=>{
        getProducts();
    }, []);

  return (
    <main><div>Home</div></main>
  )
}

export default Home;