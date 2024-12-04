

import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./Omdb.css"


const Omdb = () => {

  let [data, setData] = useState([])
  let[movie ,setmovie]=useState("")

  let moviefetch = async () => {



    let URL = `http://www.omdbapi.com/?s=${movie}&apikey=ad5e05d8`
    let responce = await fetch(URL)

    let finaldata = await responce.json()
    console.log(finaldata);

    setData(finaldata.Search)



  }


  return (
       <div className="Top" >
        <h1 className="heading">OMDB Movie ApI</h1>
        <input type="text" 
        placeholder="Enter the Movie"
        onChange={(e)=>{ setmovie(e.target.value) }}
       /> 

      <br />

      <button  onClick={moviefetch} >Get Movie</button>
      <br />
       <br />


    <div className="Main">
          
     
      
      { data.map((m)=>{

           return(
       <div className="picture">

            <img src={m.Poster} alt="image" />
           <h1>{m.Title}</h1>
            <h1>{m.Type}</h1>
            <h1>{m.Year}</h1>
            {/* <h1>{m.imbID}</h1> */}
            <a href={`https://www.imdb.com/title/${m?.imdbID}/`}> Movie</a>
       </div>
            

             )
      })}

    </div>
    </div>

  )
}

export default Omdb




// ?????????????????????????????????????????????????????????????







// ?============ omdb  fetching by using use reducer ================================




// import React from 'react'
// import { useState } from 'react'
// import { useEffect } from 'react'

// function Omdb() {

//   const [data, setdata] = useState([]);
//    const [movie, setmovie] = useState("");

//   let fetchmovie = async()=>{

    
//   let URL = `http://www.omdbapi.com/?s=${movie}&apikey=ad5e05d8`
//   let dataa = await fetch(URL)
//   console.log(dataa);
   

//       setdata(dataa)

//   }

//   fetchmovie()
  

    

//   return (
//     <div>





//     </div>
//   )
// }

// export default Omdb








// import { type } from "@testing-library/user-event/dist/type";
// import React from "react";
// import { useEffect } from "react";
// import { useState } from "react";
// import { useReducer } from "react";
// import "./Omdb.css"

// const reducer  = ( state , action)=>{
       

//   switch (action.type) {
//     case "fetchsuccess":
//       return{ ...state,data:action.payload  }
      

//       break;

//       // case "getmovie":
//       // return (e)=>
//         // { e.target.value}

      
//       // break;
  
//     default: return state
//       break;
//   }
// }






// const Main = () => {

//   // let [data, setData] = useState([])
//   // let[movie ,setmovie]=useState("")

//   const[state ,dispatch] =useReducer(reducer , {
          
//     data:[],
//     // movie:""
//    })
  

//   let moviefetch = async () => {



//     let URL = `http://www.omdbapi.com/?s=avengers&apikey=ad5e05d8`
//     // let URL = `http://www.omdbapi.com/?s=${movie}&apikey=ad5e05d8`

//     let responce = await fetch(URL)

//     let finaldata = await responce.json()
//     console.log(finaldata);

//     // setData(finaldata.Search)

//     dispatch({type: "fetchsuccesss" , payload:finaldata.Search})

//     //~================================================================================



//   }

//   moviefetch()


//   return (
//        <div className="Top" >
//         {/* <h1 className="heading">OMDB Movie ApI</h1>
//         <input type="text" 
//         placeholder="Enter the Movie"
//         // onChange={(e)=>{ setmovie(e.target.value) }}

//        /> 

//       <br />

//       <button  onClick={moviefetch} >Get Movie</button>
//       <br />
//        <br />
//  */}

//     <div className="Main">
          
     
      
//       { state.data.map((m)=>{

//            return(
//        <div className="picture">

//             <img src={m.Poster} alt="image" />
//            <h1>{m.Title}</h1>
//             <h1>{m.Type}</h1>
//             <h1>{m.Year}</h1>
//             <h1>{m.imbID}</h1>

//        </div>
            

//              )
//       })}

//     </div>
//     </div>

//   )
// }

// export default Main