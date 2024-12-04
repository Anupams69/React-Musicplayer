import React from 'react'
import { useParams } from 'react-router-dom'
import products from"./products.json"


function ProductDetails() {

//   console.log(useParams());

  let {pid} = useParams()
  console.log(pid)

  let product = products.find(({Id})=>{
  
       return Id===pid


  })

  return (
    <div>
      
      <h1>
      ProductDetails

      </h1>

      <div>
    
         <img src={product.img} alt="" />
         <h1>{product.Title}</h1>


      </div>
     
     




    </div>
  )
}

export default ProductDetails