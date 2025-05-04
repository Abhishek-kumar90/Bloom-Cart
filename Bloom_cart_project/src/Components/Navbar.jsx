import React from 'react'
import './Navbar.css'
import { useCart } from './CartContext'
const Navbar = () => {
    const {cart,wishlist} =  useCart();
  return (

    <header className='navbar'>
        <div className="navbar-logo">
            BloomCart
        </div>
        <nav className='navbar-menu'>
            <a href="">Home</a>
            <a href="">Shop</a>
            <a href="">Blog</a>
            <a href="">Contact</a>
            <a href="">Search</a>
        </nav>
        <div className="navbar-links">
            <span>Whishlist ({wishlist.length})</span>
            <span>Cart ({cart.length})</span>
        </div>
    </header>
  )
}

export default Navbar
