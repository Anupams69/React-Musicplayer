import React from 'react'
import { Link, Outlet } from 'react-router-dom'


const Product1 = () => {
  return (
    <div>


        <h1>Products</h1>
 <nav>
  
  <Link to ="mobile">Mobiles</Link>
  <Link to ="watches">Watches</Link>
  <Link to ="laptop">Laptop</Link>
  <Link to ="fashion">Fashion</Link>






    </nav>

    <div>
        <Outlet/>
    </div>
    



    </div>
   
   

  

  
    
  )
}

export default Product1