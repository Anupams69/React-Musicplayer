// // import React from 'react'
// // import { useState } from 'react'

// // const Child = (props) => {


// //   let [toggle , settoggle ] = useState(false)

// //   // let x=  <p>
// //   //      Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet possimus consequatur
// //   //        nesciunt autem ullam
// //   //       Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur, ullam commodi? Ex adipisci suscipit fugiat ipsam tenetur quam odio aliquam laborum eveniet magni! Expedita autem quae nobis odio libero nostrum.
// //   //      </p>

  
// //   let showpara = ()=>{
// //     settoggle(true)
// //   }

  
// //   let hidepara = ()=>{
// //     settoggle(false)
// //   }


// //   return (
// //     <div>
      
          
// //       Hello world !
      
// //       <br />
          
// //      { toggle===true && props.x}

      
// //       <button  onClick={hidepara} > 
// //         hidepara
// //       </button>


// //        <button onClick={showpara}>showpara</button> 
// //        <br />

      
      


        
// //         {/* <button onClick ={props.hidepara}>hidepara</button> */}
// //         {/* <button onClick={props.showpara}>showpara</button> */}
// //         {/* <button onClick={props.Reset}>Reset</button> */}


// //     </div>
// //   )
// // }

// // export default Child

// // ?=======================================




// import React from 'react'
// import { useState } from 'react'

// const Child = ({s}) => {

//   let[visible , setvisible] = useState(false)

//   let visiblefunc = ()=>{
//     setvisible(!visible)
//   }
   


//   return (
//     <div>
 


// {visible ? <p>{s}</p>: <p> {s.slice(0,10)}</p>}
// {/* {visible ? <p>{data1}</p>: <p> {data1.slice(0,10)}</p>} */}
// {/* {visible ? <p>{data1}</p>: <p>{data1.slice(0,10)}</p>} */}




//  <button onClick={visiblefunc}>{ visible? "Show less":"Show More"}</button>
//  <br />



 
//  {/* {visible ? data2: data2.substring(0,10)} */}
//  {/* <button></button> */}
//  <br />
//  {/* {visible ? data3: data3.substring(0,10)} */}
//  {/* <button></button> */}
      
      
       




//     </div>
//   )
// }

// export default Child



import React from 'react'
import { useState } from 'react';

function Child({s}) {
  
  const [visible, setvisible] = useState(true);

  function visiblee(){
    setvisible(!visible)
  }

  return (
    
               


  <div>
    
    { visible?  <p>{s}</p>:<p>{s.slice(0,5)}</p>}
    
         <button onClick={visiblee}>show more</button>
                        




  </div>

                
  )
}

export default Child

// ?=========================pagination=============

// import React from 'react'

// const Child = () => {
//   return (
//     <div  className='pagination'>
     
//      <button></button>
//      <button></button>
//      <button></button>

          
//     </div>
//   )
// }

// export default Child


