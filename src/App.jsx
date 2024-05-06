import React, { useState } from 'react'
import './App.css'
import Product from './components/product'
import Navbar from './components/navbar'

function App() {
  
  return (
    <div>
      <Navbar></Navbar>
      <div className='product-container'>
      <Product/>
      <Product/>
      <Product/>
      <Product/>  
      </div>
      
    </div>
    
    )
}

export default App
