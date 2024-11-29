

import React from 'react'
import "./Figma2.css"
import img1 from "./Images/Avatar.png"
import img2 from "./Images/Logomark.png"
import big from "./Images/Screenshot (93).png"

import logo1 from "./Images/Fictional company logo (1).png"
import logo2 from "./Images/Fictional company logo (2).png"
import logo3 from "./Images/Fictional company logo (3).png"
import logo4 from "./Images/Fictional company logo (4).png"
import logo5 from "./Images/Fictional company logo (5).png"
import logo6 from "./Images/Fictional company logo (6).png"
import plus from "./Images/Icon wrap.png"


import l1 from "./Images/message-heart-circle.png"
import l2 from "./Images/message-smile-circle.png"
import l4 from "./Images/Fictional company logo (7).png"


import l6 from "./Images/Avatar.png"

import bigscreen from "./Images/Screen mockup (REPLACE FILL).png"
import smallscreen from "./Images/Screen mockup (REPLACE FILL) (1).png"
import label from "./Images/Avatar label group.png"
import logol from "./Images/Logo.png"
import lastpic from "./Images/Image (1).png"








const Main = () => {
  return (
    <div>


      <div className='main1'>
        <ul>
          <li>
            <img src={img2} alt="" className='img1' />
            Untitled UI

          </li>
          <li>Home</li>
          <li>products</li>
          <li>Resource</li>
          <li>pricing</li>
        </ul>

        <img src={img1} alt="" />




      </div>

      <div className='content2'>
        <div className='clr'>
          <button className='btn1'>New feature</button>
          Check out the team dashboard

        </div>

      </div>

      {/* content3 */}

      <div className='content3'>

        <h1>
          Beautiful Analytics to grow Smatter
        </h1>
        <h3>
          Powerful, self-serve product and growth analytics to help you convert,
        </h3>
        <h3>
          engage, and retain more users. Trusted by over 4,000 startups.
        </h3>


        <div>
          <button className='btn11'>Demo</button>
          <button className='btn12'>sign Up!</button>

        </div>

        <br /><br />


      </div>


      <div className='big'>

        <img src={big} alt="" />

      </div>


      <div className='logo'>

        <div><img src={logo1} alt="" /></div>
        <div><img src={logo2} alt="" /></div>
        <div><img src={logo3} alt="" /></div>
        <div><img src={logo4} alt="" /></div>
        <div><img src={logo5} alt="" /></div>
        <div><img src={logo6} alt="" /></div>

      </div>
      {/* ============================================================================= */}

      <div className='messy' style={{ border: "5px solid black", height: "800px", }}>


        <div className='firstbox'>
          <p style={{ color: "#7F56D9;}" }}>Featurs</p>
          <h1>
            Analytics that feels like it’s from the future
          </h1>

          <p>
            Powerful, self-serve product and growth analytics to help you convert, <br />
            engage, and retain more users.
            Trusted by over 4,000 startups.
          </p>
        </div>
        <br /><br /><br />

        <div className='secondbox'>



          <div className='box1'>
            <img src={l2} alt="" />
            <h2>Share team inboxes</h2>
            <p>
              Whether you have a team of 2 or 200, our shared team <br />
              inboxes keep everyone on the same page and in the loop.
            </p>

          </div>


          <div className='box1'>
            <img src={l2} alt="" />
            <h2>Share team inboxes</h2>
            <p>
              Whether you have a team of 2 or 200, our shared team <br />
              inboxes keep everyone on the same page and in the loop.
            </p>

          </div>


          <div className='box1'>
            <img src={l2} alt="" />
            <h2>Share team inboxes</h2>
            <p>
              Whether you have a team of 2 or 200, our shared team <br />
              inboxes keep everyone on the same page and in the loop.
            </p>

          </div>




        </div>
        <br />
        <br />
        <br />



        <div className='secondbox'>



          <div className='box1'>
            <img src={l2} alt="" />
            <h2>Share team inboxes</h2>
            <p>
              Whether you have a team of 2 or 200, our shared team <br />
              inboxes keep everyone on the same page and in the loop.
            </p>

          </div>


          <div className='box1'>
            <img src={l2} alt="" />
            <h2>Share team inboxes</h2>
            <p>
              Whether you have a team of 2 or 200, our shared team <br />
              inboxes keep everyone on the same page and in the loop.
            </p>

          </div>


          <div className='box1'>
            <img src={l2} alt="" />
            <h2>Share team inboxes</h2>
            <p>
              Whether you have a team of 2 or 200, our shared team <br />
              inboxes keep everyone on the same page and in the loop.
            </p>

          </div>





        </div>




      </div>
       <br/><br/><br/>

      {/* messyover============================================ */}



      <div className='l4'>
       
       <img src={l4} alt="" /><br/><br />
       <h1>
       We’ve been using Untitled to kick start every  <br />
       new project and can’t imagine working without it.
       </h1>
       <img src={l6} alt="" />
       <h1>Candice Wu</h1>
       <p>Product Manager ,Sisyphus</p>

      </div>

{/* ???=============================================== */}
<br /><br /><br />


         <div className='text' >
                <button className='txtbtn'>Features</button>
                <h1>
                Cutting-edge features for advanced analytics
                </h1>
                <h2>
                Powerful, self-serve product and growth analytics to help you convert, engage,<br/>
                 and retain more users. Trusted by over 4,000 startups.
                </h2>
         </div>

         {/* ++++++++++++++ */}
         <br /><br /><br />


         <div className='pics'>

                    
          <img className='smallscreen' src={smallscreen} alt="" />
          <img className='bigscreen' src={bigscreen} alt="" />


         </div>

   {/* ============================================================ */}
<br /><br /><br />


   
   <div className='secondbox'>



<div className='box11'>
  <img src={l2} alt="" />
  <h2>Share team inboxes</h2>
  <p>
    Whether you have a team of 2 or 200, our shared team <br />
    inboxes keep everyone on the same page and in the loop.
  </p>
   <p>Learn More</p>
</div>


<div className='box1'>
  <img src={l1} alt="" />
  <h2>Share team inboxes</h2>
  <p>
    Whether you have a team of 2 or 200, our shared team <br />
    inboxes keep everyone on the same page and in the loop.
  </p>
  <p>
   <p>Learn More</p>

  </p>

</div>


<div className='box1'>
  <img src={l2} alt="" />
  <h2>Share team inboxes</h2>
  <p>
    Whether you have a team of 2 or 200, our shared team <br />
    inboxes keep everyone on the same page and in the loop.
  </p>
  <p>
   <p>Learn More</p>

  </p>

</div>




</div>

{/* ++++===============================================questionspart=========== */}

    <br /><br /><br />
    
    <div className='plus'>





<h1>Frequently asked questions</h1>
        <p>Everything you need to know about the producttheir staus with all the things and billing.</p>
        <br/><br/>

      <div className='flexy'>is there a free trial avalibl  <img src={plus} alt="" />  </div> <hr/><br/>
        <div className='flexy'> a free trial avalible <img src={plus} alt="" /></div><hr/><br/>
        <div className='flexy'>itrial avalible <img src={plus} alt="" /></div><hr/><br/>
        <div className='flexy'> free trial avalible <img src={plus} alt="" /></div><hr/><br/>
        <div className='flexy'> hello<img src={plus} alt="" /></div><hr/><br/>
        <div className='flexy'>is everything fine <img src={plus} alt="" /></div><hr/><br/>
        <div className='flexy'>How does i change email <img src={plus} alt="" /></div><hr/><br/>

                                                                                             
   </div >
        
{/* ???+++++++++++++?????????????????????????????????????????????? */}
<br /><br /><br />


<div  className='fiveteen'>
   
   <div>
  <h4>Our Blog</h4>
  <h1>Veiw our latest blogs</h1>
  <h2>Tool and strategies for growing of the industry</h2>


   </div>
   <button className='veiw'>Veiw all post</button>



  </div>


     


<br /><br /><br /><br />




 
 <div className='complicated'>

  <div>
      <img src={lastpic} alt="" />
      <h4>Design</h4>
      <h2>UX review presentation</h2>
      <h3>How do you create compelling presentations that <br/>
         wow your impress your managers?</h3>
         <img src={label} alt="" />
     
      <br /><br />

  </div>
  <br/><br/>




  <div>
      <img src={lastpic} alt="" />
      <h4>Design</h4>
      <h2>UX review presentation</h2>
      <h3>How do you create compelling presentations that <br/>
         wow your impress your managers?</h3>
<br /><br />
         <img src={label} alt="" />

  </div>
  <br/><br/>




  
  <div>
      <img src={lastpic} alt="" />
      <h4>Design</h4>
      <h2>UX review presentation</h2>
      <h3>How do you create compelling presentations that <br/>
         wow your impress your managers?</h3>
         <br /><br />
         <img src={label} alt="" />


  </div>
  <br/><br/>





 </div>
   <br /><br /><br /><br />




     <div className='headings'>

      <h1>Start your free Trial</h1>
      <h2>
      Join over 4,000+ startups already growing with Untitled.
      </h2>
      <br /><br />

      <div className='bt'>
        <button className='btn11'>Learn More</button>
        <button className='btn12'>Get Started</button>
      </div>

     </div>
{/* ?////////////////////////////////////////////////////////// */}


<br /><br /><br />
<br /><br /><br />



    <div className='lists'>
      

       <div className='list'>
        <h2>Products</h2>
        <p>Overveiw</p>
        <p> veiw</p>
        <p>sloww</p>
        <p>solution</p>
        <p>pricing</p>
        <p>Releases</p>
       </div>
   
       
       <div className='list'>
        <h2>Products</h2>
        <p>Overveiw</p>
        <p> veiw</p>
        <p>sloww</p>
        <p>solution</p>
        <p>pricing</p>
        <p>Releases</p>
       </div>

       
       <div className='list'>
        <h2>Releases</h2>
        <p>Overveiw</p>
        <p> veiw</p>
        <p>sloww</p>
        <p>solution</p>
        <p>pricing</p>
        <p>Releases</p>
       </div>

       
       <div className='list'>
        <h2>Products</h2>
        <p>Overveiw</p>
        <p> veiw</p>
        <p>sloww</p>
        <p>solution</p>
        <p>pricing</p>
        <p>Releases</p>
       </div>

       
       <div className='list'>
        <h2>Company</h2>
        <p>Overveiw</p>
        <p> veiw</p>
        <p>sloww</p>
        <p>solution</p>
        <p>pricing</p>
        <p>Releases</p>
       </div>

       
       <div className='list'>
        <h2>Resources</h2>
        <p>Overveiw</p>
        <p> veiw</p>
        <p>sloww</p>
        <p>solution</p>
        <p>pricing</p>
        <p>Releases</p>
       </div>

       
       <div className='list'>
        <h2>Products</h2>
        <p>Overveiw</p>
        <p> veiw</p>
        <p>sloww</p>
        <p>solution</p>
        <p>pricing</p>
        <p>Releases</p>
       </div>


    </div>
<br /><br />
{/* ?????++++++++++++++++++++++++++ */}
< hr/>

<br /><br /><br /><br />
<div className='last'>
   <img src={logol} alt="" />
   <p>© 2077 Untitled UI. All rights reserved.</p>

</div>

{/* ????+++++++++++++++++++++++++++++++++++++++ */}----
<br /><br /><br />








    </div>
  )
}

export default Main




