import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const View = () => {
    const[shopData,changeshopData]=useState(
        
            {"products":[]}
        

    )
              const fetchData=()=>{
            axios.get("https://dummyjson.com/products").then(
                (response)=>{

                    changeshopData(response.data)

                }
            ).catch()
        }


            useEffect(()=>{fetchData()},[])
  return (
    <div>

        <Navbar/>
<div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">


                        <div className="row p-3 g-5">
                            {shopData.products.map(
                                (value, index) => {
                                    return (

                                        
                                            <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 col-xxl-2">
                                                <div class="card h-100" >
                                            <img src={value.thumbnail}class="card-img-top" alt="..."></img>
                                            <div class="card-body">
                                                <h5 class="card-title">{value.title}</h5>
                                                <p class="card-text">{value.description}</p>
                                                <p class="card-text">{value.price}</p>
                                                <a href="#" class="btn btn-primary">BUY NOW</a>
                                            </div>
                                        </div>
                                        </div>
                                    )
                                }
                            )}


                        </div>
                    </div>
                </div>
            </div>





    </div>
  )
}

export default View