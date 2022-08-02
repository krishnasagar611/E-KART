import React from 'react'
import Product from './Product'



const Home = () => {
  return (
    <>
    <div className="hero">
      <div className="card bg-dark text-white border-0">
        <img src="/assest/bg.jpg" className="card-img" alt="Background" height="700px" />
      
        <div className="card-img-overlay d-flex flex-column justify-content-center"> 
            <div className="container">
            <h1 className="card-title display-4 fw-bolder mb-0">NEW SEASON ARRIVALS</h1>
          <p className="card-text fs-2">
          CHECK OUT ALL THE TRENDS
          </p>
         

            </div> 

          
        </div>
      </div>
  <Product/>
    </div>
   

    </>
  )
}

export default Home
