import React from 'react'

function Watches(props) {
  return (
    <div>
     
     

   <h1>{props.count}</h1>
   <button onClick={props.inc}>+</button>
   <button onClick={props.dec}>-</button>
      
    </div>
  )
}

export default Watches