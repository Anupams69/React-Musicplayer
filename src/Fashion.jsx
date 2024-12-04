import React from 'react'
import products from"./products.json"
import { Link } from 'react-router-dom'

function Fashion() {
  return (
    <div>

      <h1>
        Fashion
      </h1>
      <section className="products">

           
           {products.map(({Id,Title,img})=>{


            return <Link  classname = "product"  key={Id} to = {`/product-details/${Id}`}>
            
                 <img src={img} alt="" />
                <h4> {Title}</h4>
                
            
            </Link>

           }
           
           
           
           )}
        

      </section>









    </div>
  )
}

export default Fashion