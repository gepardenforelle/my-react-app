import React, { useState } from 'react'
import './App.css'
import Product from './components/product'
import Navbar from './components/navbar'
import ShoppingCart from './components/shoppingcart'

function App() {
  
  return (
    <div>
      <Navbar/>
      <ShoppingCart/>      
      <div className='product-container'>
      <Product title ="Tomaten" image="oranges.jpg"/>
      <Product title ="Trauben" image="blueberries.jpg"/>
      <Product title ="Erdbeeren" image="raspberries.jpg"/>
      <Product/>  
      </div>
      
    </div>
    
    )
}

export default App
