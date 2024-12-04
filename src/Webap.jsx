
import React from 'react'
import { BrowserRouter,Routes ,Route } from 'react-router-dom'
import Home1 from './Home1'
import About1 from './About1'
import Login1 from './Login1'
import Signup1 from './Signup1'
import Navbar1 from './Navbar1'
import Product1 from './Product1'
import Mobile from './Mobile'
import Laptop from './Laptop'
import Watches from './Watches'
import Fashion from './Fashion'
import ProductDetails from './ProductDetails'

//   import React from 'react'
  
  



function Webap() 
 {
  return (
  
    <BrowserRouter>
         <Navbar1/>
         
       <Routes>

           <Route  path = "/" element ={<Home1/>}/>

                  

           <Route  path = "/products" element ={<Product1/>}>

              <Route  path = "mobile" element ={<Mobile/>}/>
              <Route  path = "laptop" element ={<Laptop/>}/>
              <Route  path = "watches" element ={<Watches/>}/>
              <Route  path = "fashion" element ={<Fashion/>}/>

             
            </Route>
               
              <Route  path = "product-details/:pid" element ={<ProductDetails/>}/>

              <Route  path = "/login" element ={<Login1/>}/>
              <Route  path = "/about" element ={<About1/>}/>
              <Route  path = "/signup" element ={<Signup1/>}/>
          



                      

        </Routes>
         
         
         
         
         
         
    </BrowserRouter>








  
  )
}

export default Webap


