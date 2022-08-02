import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg bg-white py-3 shadow-sm">
          <div className="container">
            <NavLink to="/" className="navbar-brand fw-bold fs-4 " >SR COLLECTION</NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0 fw-bold">
                <li className="nav-item">
                  <NavLink className="nav-link active" aria-current="page" to="/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link active" aria-current="page" to="/Product">
                    Product
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link active" aria-current="page" to="/About">
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link active" aria-current="page" to="/Contact">
                    Contact
                  </NavLink>
                </li>
              </ul>
                <div className="buttons">

                    <NavLink  to="/Login"  className="btn btn-outline-dark" >
                        
                    <i className="fa-sign-up"></i> Login</NavLink>
                    <NavLink to="/Register" className="btn btn-outline-dark ms-2" >
                        
                        <i className=" fa-user-plus"></i> Register</NavLink>
                        <NavLink to="/Cart" className="btn btn-outline-dark ms-2" >
                        
                        <i className=" fa-shopping-cart "></i> Cart (0)</NavLink>
                       
                </div>

            </div>
          </div>
        </nav>
      </div>
    </>
  )
}

export default Navbar
