import React, { useState } from 'react'
import './App.css'
import Product from './components/product'
import Navbar from './components/navbar'

function App() {
  
  return (
    <div>
      <Navbar></Navbar>
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
