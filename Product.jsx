import React, { useState, useEffect } from 'react'
import Skeleton from "react-loading-skeleton";

const Product = () => {
  const [data, setData] = useState([])
  const [filter, setFilter] = useState(data)
  const [loading, setLoading] = useState(false)
  // let componentMounted = true

  const getProduct = async () => {
    setLoading(true)
    const response = await fetch('https://fakestoreapi.com/products')

    if (response.status === 200) {
      setData(await response.clone().json())
      setFilter(await response.json())
      setLoading(false)
      console.log(filter)
    }
  }


  // .then((response) =>{
  //   console.log("response",response);
  //     if (response.status === 200) {
  //       setData(response.body)
  //     }
  //     setLoading(false)
  //   })
  //   .catch((error) =>{
  //     console.log(error);
  //     setLoading(false)
  //   })

  useEffect(() => {

    getProduct()
  }, []);

  const Loading = () => {
    return(
    <>
    <div className="col-md-3">
      <Skeleton height={350}/>
    </div>
    <div className="col-md-3">
      <Skeleton height={350}/>
    </div>
    <div className="col-md-3">
      <Skeleton height={350}/>
    </div>
    
    </>
    )
  };

  const filterProduct = (cat) => {
        const newList = data.filter((x)=>x.category===cat);
        setFilter(newList);
  }

  const ShowProduct = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center me-2 mb-5 pb-5">
          <button className="btn btn-outline-dark me-2" onClick={()=>setFilter(data)}>ALL</button>
          <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("men's clothing")}>Men's Clothing</button>
          <button className="btn btn-outline-dark me=2" onClick={()=>filterProduct("women's clothing")}>
            Women's Clothing
          </button>
          <button className="btn btn-outline-dark  me-2"  onClick={()=>filterProduct("jewelery")}>Jewelery</button>
          <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("electronics")}>Electronics</button>
        </div>
        {filter.map((Product) => {
          return (
            <React.Fragment key={Product.id}>
              <div className="col-md-3 mb-4" >
                <div className="card h-100 text-center p-4" >
                  <img src={Product.image} className="card-img-top" alt={Product.title} height="250px" />
                  <div className="card-body">
                    <h5 className="card-title mb-0">{Product.title.substring(0,12)}...</h5>
                    <p className="card-text lead fw-bold">
                     ${Product.price}
                    </p>
                    <a  className="btn btn-outline-dark">
                      Buy Now 
                    </a>
                  </div>
                </div>
              </div>
            </React.Fragment>
          )
        })}
      </>
    )
  }

  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">Latest Product</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Product /> : <ShowProduct />}
        </div>
      </div>
    </div>
  )
}

export default Product
