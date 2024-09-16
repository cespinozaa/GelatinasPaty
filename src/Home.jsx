/* eslint-disable no-unused-vars */
import React from 'react'
import Header from './Header.jsx'
import './Header.css'
import Products from './products.jsx'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <> 
        <div className="main__page">

        <div className="background-container">
          <Header/>
        <div className="app">
          <h1>Gelatinas Paty</h1>
        </div>

        <div className="card">
          <p>
            Small Description. Inserting dummy text. Short, sweet. Captivating palettes one at at time.
            Indulge in our delightful gelatins, crafted from the finest ingredients for a burst of flavor 
            in every bite. Available in a variety of vibrant colors and mouthwatering flavors, our gelatins 
            are perfect for parties, celebrations, or a sweet everyday snack. Whether you prefer classic fruit 
            flavors or unique combinations, our gelatins are sure to please everyone. 
          </p>
        </div>

      </div>
    
      <Products/>

    </div>


  
        
  </>

  )
}

export default Home