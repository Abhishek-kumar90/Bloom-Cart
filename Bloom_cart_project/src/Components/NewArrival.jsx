import React from 'react'
import { useCart } from './CartContext';
import './NewArrivals.css'

const products = [
    {
        id:1,
        title:"jeans",
        price:90,
        image:"https://themewagon.github.io/kaira/images/banner-image-6.jpg"
    },
    {
        id:2,
        title:"jeans",
        price:90,
        image:"https://themewagon.github.io/kaira/images/banner-image-6.jpg"
    },
    {
        id:3,
        title:"jeans",
        price:90,
        image:"https://themewagon.github.io/kaira/images/banner-image-6.jpg"
    },
    {
        id:4,
        title:"jeans",
        price:90,
        image:"https://themewagon.github.io/kaira/images/banner-image-6.jpg"
    },
]
const NewArrival = () => {
    const {addToCart, addToWishlist } = useCart();
  return (
    <div>
      <section  className='arrivals-section'>
        <div className='arrivals-header'>
            <h2>New Arrivals</h2>
            <a href="">VIEW ALL PRODUCTS</a>
        </div>
        <div className='arrivals-grid'>
            {products.map((product) => (
               
                <div className='product-card'>
                    <img src={product.image} alt={product.title} />
                    <h3>{product.title}</h3>
                    <p>${product.price}</p>
                
                <button onClick={() => addToCart(product)}>Add to Cart</button>
                <button onClick={() => addToWishlist(product)}>Add to Whislist</button>

                </div>
               
            ))}
        </div>
      </section>
    </div>
  )
}

export default NewArrival
