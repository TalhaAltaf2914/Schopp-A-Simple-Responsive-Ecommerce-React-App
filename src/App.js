import { Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav/Nav';
import Home from './pages/Home/Home';
import { CartContext } from './context/CartContext';
import { useState } from 'react';
import CartPage from './pages/CartPage/CartPage';

function App() {
  let [cartItems, setCartItems] = useState(localStorage.getItem('cart')? JSON.parse(localStorage.getItem('cart')) : []);

  return (
    
    <CartContext.Provider value={{cartItems, setCartItems}}>
      <Routes>
          <Route path='/' element={<Nav />}>
            <Route index element={<Home />}/>
            <Route path='cart' element={<CartPage />}/>
          </Route>
        
      </Routes>
    </CartContext.Provider>
    );
}

export default App;
