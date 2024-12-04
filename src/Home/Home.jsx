import React from 'react'
import Homestyle from "./Home.module.css"
import { TypeAnimation } from 'react-type-animation';
import { FaArrowRight } from "react-icons/fa";
const Home = () => {
  return (
    <div className={Homestyle.Home}>
    
   <section>

   <h1>
      With test yantra global..
    </h1>

    <h2>
      
    
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'We produce food for Mice',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'We produce food for Hamsters',
        1000,
        'We produce food for Guinea Pigs',
        1000,
        'We produce food for Chinchillas',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />


    </h2>
    
    <p>

    Test Yantra Global's 5,000+ employees provide a range ofbr
    <br/> innovative technology solutions to digitally transform your organization.<br/> <br/>

From IT consulting, application design and development, <br /> to automated AI enabled test management platform that unifies web, android,<br /> iOS, API, and DB testing, we have the expertise, technology, <br/>
experience, and tools to help transform your business.
    </p>


   </section>


   <article>


   <button className={Homestyle.btn}> Get Started Free 
      <FaArrowRight />
      </button>

   </article>


   <div>
    <h1></h1>
   </div>
    
    </div>
  )
}

export default Home