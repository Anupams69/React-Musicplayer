import react from'react'

// import Navbar from './Navbar'
// import Section from './Section'
import Musicplayer from './Musicplayer'

const Main =()=>{

    return(

        <div>
            {/* <h1> Hello world i am Main </h1> */}
            {/* <Navbar/> */}
            {/* <Section/> */}
   <Musicplayer/>

        </div>
    )

}

export default Main

// ?  two types of component 1 rafce  ,       2 rcc

// ?

// ?  (rafce) is bsically used for the component arrow function to export functional based component
// ?  react arrow function component for export the class based component

// import React from 'react'

// const Main = () => {
//   return (
//     <div>

//     </div>
//   )
// }

// export default Main

// ?rcc - it helps for the creation of the class based component
// ?react class component

//  import React, { Component } from 'react';

//  class Main extends Component {
//     render() {
//         return (
//             <div>
//                 React component
//             </div>
//         );
//     }
//  }

//  export default Main;

//???????????????????????????class based component

// import React, { Component } from 'react';

// class Main extends Component {
//     render() {
//         return (
//             <div>
//                 <h1>Hi i am  class tag</h1>
//             </div>
//         );
//     }
// }

// export default Main;

// ????????????  render to table by simple data.....

// import React, { Component } from 'react';

// class Main extends Component {

//     constructor(props){

//         super(props)
//         this.state = {

//             emp_details:[{

//                 emp_id:"101",
//                 empname:"jay",
//                 empsalary:"30k",
//                 emp_location:"Russia"
//             },
//                 {
//                     emp_id:"102",
//                 empname:"divya",
//                 empsalary:"40k",
//                 emp_location:"india"

//                 }

//         ]
//         }
//     }

//     render() {
//         return (
//             <div>

//                 <table>
//                     <thead>
//                         <th>id</th>
//                         <th>name</th>
//                         <th>salary</th>
//                         <th>location</th>
//                     </thead>

//                     <tbody>
//                         {this.state.emp_details.map((m)=>{

//                             return(
//                             <tr>
//                                 <td>{m.emp_id}</td>
//                                 <td>{m.empname}</td>
//                                 <td>{m.empsalary}</td>
//                                 <td>{m.emp_location}</td>
//                             </tr>
//                             )

//                         })}
//                     </tbody>
//                 </table>
//             </div>
//         );
//     }
// }

// export default Main;

// ? rendring data by json file..............................................

// import React, { Component } from 'react';
// import PRODUCTS from "./products.json"
// import "./Global.css"

// class Main extends Component {

//     constructor(props) {
//       super(props)

//       this.state = {
//          emp_products: PRODUCTS
//       }
//     }
//     render() {
//         return (
//             <div>

//                   <table>

//                     <thead>
//                        <th>Id</th>
//                        <th>Maker</th>
//                        <th>image</th>
//                        <th>url</th>
//                        <th>tittle</th>
//                        <th>Description</th>
//                        <th>Rating</th>
//                     </thead>

//                     <tbody>
//                        {this.state.emp_products.map((m)=>{
//                         console.log(m);

//                         return(
//                             <tr>
//                                 <td>{m.Id}</td>
//                                 <td>{m.Maker}</td>
//                                 <td><img src={m.img} alt="" /></td>
//                                 <td><a href={m.Url}>link</a></td>
//                                 <td>{m.Title}</td>
//                                 <td>{m.Description.slice(0,20)}</td>
//                                 <td>{m.Ratings}</td>
//                             </tr>
//                         )

//                        })}
//                     </tbody>

//                   </table>

//             </div>
//         );
//     }
// }

// export default Main;




// ?????? functional based coponent by using state

// ? in functional based , state basically we store the data  ,here we dont want to need to make constructor tht we need need in class based component
//  ? * for creation of data  we want hooks for the makinf of state , without state we cant store te data

// import React, { useState } from 'react'
// import PRODUCTS from "./products.json"

// import "./Global.css"

// const Main = () => {

//     let[state , setState] = useState(PRODUCTS)
//     return (
//         <div>

//             <table>

//                 <thead>
//                     <th>ID</th>
//                     <th>Name</th>
//                     <th>IMG</th>
//                     <th>URL</th>
//                     <th>TITTLE</th>
//                     <th>DEScription</th>
//                     <th>Rating</th>

//                 </thead>

//                 <tbody>
//                     {state.map((m) => {

//                         return (
//                             <tr>
//                                 <td>{m.Id}</td>
//                                 <td>{m.Maker}</td>
//                                 <td><img src={m.img} alt="" /></td>
//                                 <td><a href={m.Url}>link</a></td>
//                                 <td>{m.Title}</td>
//                                 <td>{m.Description.slice(0, 20)}</td>
//                                 <td>{m.Ratings}</td>
//                             </tr>)

//                     })}
//                 </tbody>
//             </table>

//         </div>
//     )
// }

// export default Main

// 20 th august //?  how to create the react create element

//   import React from 'react'

//   const Main = () => {
//     return (

//         React.createElement("div",{style:{ border:"2px solid black", width:"300px", height:"400px", display:"flex"}},
//             React.createElement("h1", {style:{color:"green"}}, "Hi React js"),

//             React.createElement("button",{style:{color:"black", height:"60px",width:"200px",marginTop:"200px",marginRight:"50px"}},"Hi React js")
//         )

//     )s
//   }

//   export default Main

//?how to use Hooks and what is that...

// import React from 'react'
//  import { useState } from 'react'

// const Main = () => {

//     let [count ,setCount] = useState(0);

// function Increment(){
//     console.log("Trigger");

//     setCount(count+1)
// }

// function Decrement(){

//     console.log("decrement");
//     setCount(count-1)

// }

// function Reset(){

//     setCount(0)
// }

// let getcolor = ()=>{
//         if (count<0) {

//           return "red"

//         }
//         else if( count >0){

//           return "green"

//         }

//         else {
//           return "blue"
//         }
// }

//   return (
//     <div>

//    <h1  style ={{fontsize:"80px",color:getcolor()}}>{count }</h1>
//    <button onClick={Increment}  style ={{fontsize:"80px",backgroundColor:"green"}}>Increment</button>
//    <button onClick={Decrement} style ={{fontsize:"80px",backgroundColor:"green"}}>Decrement</button>
//    <button onClick={Reset} style ={{fontsize:"80px",backgroundColor:"green"}}>Reset</button>

//     </div>
//   )
// }

// export default Main

// ?????? class based component using

// import React, { Component } from 'react'

// export default class Main extends Component {
//   constructor(props) {
//     super(props)

//     this.state = {
//        count:0
//     }
//   }

//   ?====we do not use let const in function inside class based function  -----------Note
//   increment=()=>{
//     this.setState({count:this.state.count+1})
//   }
//   decrement=()=>{
//     this.setState({count:this.state.count-1})
//   }
//   reset=()=>{
//     this.setState({count:0})
//   }
//   render() {
//     return (
//       <div>
//          <h1>{this.state.count}</h1>
//        <button onClick={this.increment}>+</button>
//        <button onClick={this.decrement}>-</button>
//        <button onClick={this.reset}>0</button>
//       </div>
//     )
//   }
// // }
// !=====================================================================================================

// import React, { Component } from 'react';

// class Main extends Component {

//   constructor(props) {
//     super(props)

//     this.state = {
//       count :0

//       }
//     }

//       Increment =()=>{

//         this.setState({count:this.state.count+1})
//       }

//       Decrement =()=>{

//         this.setState({count:this.state.count-1})
//       }

//       Reset =()=>{

//         this.setState({count:0})
//       }

//   }

//   render()
//    {

//     return (
//       <div>

//        <h1>{this.state.count}</h1>
//        <button onClick={this.Increment}>+</button>
//        <button onClick={this.Decrement}>-</button>
//        <button onClick={this.Reset}>0</button>

//       </div>
//     )
//   }

// export default Main;

// ??? input tag by usestate hooks

// import React from 'react'

// import { useState } from 'react'

// const Main = () => {

//   let [text ,setText] = useState("hello")

// let resetText = (e)=>{
//   setText(e.target.value)

// }

//   return (
//     <div>

// <input type="text" value= {text} />
//  <button onClick={resetText}>Reset</button>

//     </div>
//   )
// }

// export default Main

//  ? checked or not checked=================

// import React from 'react'

// import { useState } from 'react'

// const Main = () => {

//   let [liked ,setliked] = useState(false)

//   let checked = (e)=>{
//             setliked(e.target.checked)
//   }
//   return (
//     <div>
//       <input type="checkbox" checked ={liked} onChange={checked}/> i
//         <h1>{liked }</h1>

//     </div>

//   )
// }

// export default Main

// ????? name changing in hooks ===============================================================

// import React from 'react'
// import { useState } from 'react'

// export const Main = () => {

//      let[name ,setname] = useState("rohit")
//      let changename1 =()=>{

//       setname("girish")
//  }

//  let changename2=()=>{

//    setname("Rohit")
// }

//   return (

//     <div>
//       <h1>Name:{name}</h1>

//       <button onClick={changename1}>previous</button>
//       <button onClick={changename2}>Next</button>
//     </div>
//   )
// }

// export default Main

// ?????fakers library  execution  23 aug======================================================

// import React from 'react'
// import { faker } from '@faker-js/faker'
// import { useState } from 'react'

// const Main = () => {

//   let [name ,setName] = useState(faker.animal.cat())
//   let [img,setImg] = useState(faker.image.urlPicsumPhotos())

//   let changename = ()=>{

//     setName(faker.animal.bird())
//     setImg(faker.image.urlPicsumPhotos())

//   }

//   return (
//     <div>
//       <h1>{name}</h1>
//       <img src={img} alt="" />
//       <button onClick={changename}>Changename</button>
//     </div>
//   )
// }

// export default Main

// ? Using props 23 august==============================================================================

// import React from 'react'
// import { useState } from 'react'
// import Child from './Child'

// const Main = () => {

//   let [count ,setCount] = useState(0)

// let Increment =()=>{
//   setCount(count=>count+1)
// }

// let Decrement =()=>{
//   setCount(count=>count-1)
// }

// let Reset =()=>{
//   setCount(0)
// }

//   return (
//     <div>

//       <h1>{count}</h1>

//       <Child Increment= {Increment} Decrement={Decrement} Reset={Reset}/>
//     </div>
//   )
// }

// export default Main

// ??====================================================================project=================24 th aug

// import React from "react";

// import { useState } from "react";
// import PRODUCTS from "./products.json";
// import "./Global.css"

// const Main = () => {
//   let [state, setState] = useState(PRODUCTS);

//   return (
//     <div id= "div1" >
//       {state.map((m) => {
//         return (
//           <div id="div2">
//             <img src={m.img} alt="" />
//             {/* <h1>{m.Description}</h1> */}
//             <h1>{m.Id}</h1>
//             <h1>{m.Maker}</h1>
//             <h1>{m.Title}</h1>
//             <h1>{m.Ratings}</h1>
//             <button>
//             <a href={m.Url}> Order Now</a>

//             </button>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default Main;

// ??===========================================

// ! Binding Event Handlers

// ? Method 1

// import React, { Component } from 'react'

// export default class Main extends Component {
//   constructor(props) {
//     super(props)

//     this.state = {
//        count:0
//     }
//     this.Increment=this.Increment.bind(this)
//   }

//   Increment(){
//     this.setState({count:this.state.count+1})
//   }

//   render() {
//     return (
//       <div>
//         <h1>{this.state.count}</h1>
//         <button onClick={this.Increment}>+</button>
//       </div>
//     )

// }
// }

// ? method2

// import React, { Component } from 'react'

// export default class Main extends Component {
//   constructor(props) {
//     super(props)

//     this.state = {
//        count:0
//     }
//   }
//   Increment(){
//     this.setState({count:this.state.count+1})
//   }
//   render() {
//     return (
//       <div>
//         <h1>{this.state.count}</h1>
//         <button onClick={()=>this.Increment()}>+</button>
//       </div>
//     )
//   }
// }

// ? method3

// import React, { Component } from 'react'

// export default class Main extends Component {
//   constructor(props) {
//     super(props)

//     this.state = {
//        count:0
//     }
//   }
//   Increment(){
//     this.setState({count:this.state.count+1})
//   }
//   render() {
//     return (
//       <div>
//         <h1>{this.state.count}</h1>
//         <button onClick={this.Increment.bind(this)}>+</button>
//       </div>
//     )
//   }
// }

// ? Method4

// import React, { Component } from 'react'

// export default class Main extends Component {
//   constructor(props) {
//     super(props)

//     this.state = {
//        count:0
//     }
//   }
//   Increment=()=>{
//     this.setState({count:this.state.count+1})
//   }
//   render() {
//     return (
//       <div>
//         <h1>{this.state.count}</h1>
//         <button onClick={this.Increment}>+</button>
//       </div>
//     )
//   }
// }


// ???=====================================props

// ????reactproject......=============


// import React from 'react'
// import "./Global.css"
// import { BrowserRouter as Router , Routes,Route } from 'react-router-dom'
// import Navbar from './Navbar/Navbar'
// import Services from './Services/Services'
// import About from './AboutUs/About'
// import Career from './Career/Career'
// import Home from './Home/Home'
// import Contact from './Contactus/Contact'




// const Main = () => {
//   return (
//     <div>


//          <Router>

//           <Navbar/>
//           <Routes>

//             <Route path ='/' element ={<Home/>}/>
//             <Route path ='/Career' element ={<Career/>}/>
//             <Route path ='/Services' element ={<Services/>}/>
//             <Route path ='/About' element ={<About/>}/>
//             <Route path ='/Contact' element ={<Contact/>}/>

//           </Routes>
//          </Router>



//     </div>
//   )
// }

// export default Main

// ??==========================


// import React from 'react'
// import "./Global.css"
// import { BrowserRouter as Router , Routes,Route } from 'react-router-dom'
// import Navbar from './Navbar/Navbar'
// import Services from './Services/Services'
// import About from './AboutUs/About'
// import Career from './Career/Career'
// import Home from './Home/Home'
// import Contact from './Contactus/Contact'




// const Main = () => {
//   return (
//     <div>


//          <Router>

//           <Navbar/>
//           <Routes>
//             <Route path ='/' element ={<Home/>} exaclty/>
//             <Route path ='/Career' element ={<Career/>}/>
//             <Route path ='/Services' element ={<Services/>}/>
//             <Route path ='/About' element ={<About/>}/>
//             <Route path ='/Contact' element ={<Contact/>}/>

//           </Routes>
//          </Router>



//     </div>
//   )
// }

// export default Main


// ????????????+++++++===========================useref hoook



// import React from 'react'

// import { useRef } from 'react'

// const Main = () => {

//   let inputRef = useRef()

//   let inputRefFunction= ()=>{
//     console.log(inputRef.current.value)
//     inputRef.

//   }
//   return (
//     <div>Main</div>
//   )
// }

// export default Main




// ?===example 2 

// import React from 'react'
// import { useRef } from 'react'
// import { useState } from 'react';
// import VIDEO from "./VEDIO/WhatsApp Video 2023-01-14 at 1.36.21 PM.mp4"

// const Main = () => {

//   let [play ,setPlay] = useState(false);
//   let [text ,setText] = useState("");


//   let vedioref = useRef()

//   let playorpause = ()=>{

//     if(play){
//     vedioref.current.pause()
//     setText("Vedio is pause")

//     }

//     else{
//     vedioref.current.play()
//     setText("Vedio is playinggggg")


//     }
//        setPlay(!play)


//   }


//   return (
//     <div>
//       <h1>{text}</h1>

//       <video src={VIDEO} ref = {vedioref} onClick={playorpause}></video>
//       </div>

//   )
// }

// export default Main


// ????========= ========  ======================   ===========================================


// import React from 'react'
// import { useRef } from 'react'
// import { useState } from 'react';
// // import VIDEO from "./VEDIO/WhatsApp Video 2023-01-14 at 1.36.21 PM.mp4"
// import "./Global.css"
// import AUDIO from "./AUDIO/128-Besharam Rang - Pathaan 128 Kbps.mp3"

// const Main = () => {

//   let [play ,setPlay] = useState(false);
//   let [text ,setText] = useState("want to play ? hit the btn");


//   let Audioref = useRef()
//   let playorpause = ()=>{

//     if(play){
//     Audioref.current.pause()
//     setText("Audio is pause.....")

//     }

//     else{
//     Audioref.current.play()
//     setText("Vedio is playinggggg")


//     }
//        setPlay(!play)


//   }


//   return (
//     <div>
//       <h1>{text}</h1>

//       {/* <video src={AUDIO} ref = {Audioref} onClick={playorpause}></video> */}
//       <audio src={AUDIO} ref = {Audioref} onClick={playorpause}></audio>

//       </div>

//   )
// }

// export default Main

// ?=======================     ============  React music player.......====================  ======================================


// // import React ,{useRef ,useState} from "react";
// import React from "react";
// import { useState } from "react";
// import { useRef } from "react";

// import AUDIO from "./AUDIO/128-Besharam Rang - Pathaan 128 Kbps.mp3";
// import AUDIO2 from "./AUDIO/128-Tumhare Hi Rahenge Hum - Stree 2 128 Kbps.mp3";



// const Main = () => {

//   let [isplay, setPlay] = useState(false);
//   let [currentTime, setCurrentTime] = useState(0);

//   let audioRef = useRef()
//   let songs = [
//     {

//       tittle: "Aaaj ki raat",
//       src: AUDIO

//     },

//     {

//       tittle: "Tumhare hi rahenge",
//       src: AUDIO2
//     }
//   ]

//   let [currentSongIndex, setCurrentSongIndex] = useState(0)

//   let currentSong = songs[currentSongIndex]
//   console.log(currentSong)

//   // !!===playorpause===================================================

//   let playOrpauseHandler = () => {

//     if (isplay) {

//       audioRef.current.pause()
//     } else {

//    audioRef.current.play()
//           }

//       setPlay(!isplay)

//   }


//   // ?====timehandler function============================================================

//   let timeHandlerfunction = (e) => {
//     setCurrentTime(e.target.currentTime)
//   }


//   // !!=====draghandler========================================

//   let dragHandlerfunction = (e) => {

//     audioRef.current.currentTime = e.target.value
//     setCurrentTime(e.target.value)
//   }


//   // *================skipforward function========================

//   let skipForwardReverse = (direction) => {

//     if (direction === "skip-forward") {

//       setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length)
//     }

//     else if (direction === "skip-back") {

//       setCurrentSongIndex((prevIndex) => (prevIndex - 1 + songs.length) % songs.length)
//     }
//   }



//   return (

//      <div className="mainContainer">
//       <h1>
//         Song Name :{currentSong.tittle}
//       </h1>
//       <audio
//         ref={audioRef}
//         src={currentSong.src}
//         onTimeUpdate={timeHandlerfunction}
//         onEnded={skipForwardReverse("skip-forward")}></audio>

//       <div>
//         <input type="range"
//           value={currentTime}
//           onChange={dragHandlerfunction}
//         />
//       </div>

//       <div className="btnClass">
//         <button onClick={() => skipForwardReverse("skip-back")}> Backward</button>
//         <button onClick={playOrpauseHandler} >isplay ? "pause": "play"</button>
//         <button onClick={() => skipForwardReverse("skip-forward")}> Forward</button>


//       </div>
//     </div>
//   )
// }

// export default Main


// ?=============================api fetch==============================================================================================


// import React from 'react'
// import { useEffect,useState } from 'react'
// import axios from 'axios'


// const Main = () => {

//       let[data ,setData] = useState([])

//       let fetchApi =  async ()=>{


//         // let apiData = await fetch("https://api.github.com/users")
//         // let finalData = apiData.json()
//         // console.log(finalData);

//         // setData(finalData)
//         // ??===axios===========================================================================================================

//       let apiData = await axios.get("https://api.github.com/users")
//       setData(apiData.data)




//       }

//       useEffect(()=>{
//         fetchApi() 
//       },[])


//   return (
//     <div>

//         {
//           data.map((m)=>{
//             console.log(m);

//              return(
//               <div>
//                 <img src={m.avatar_url} alt="" />
//                 <h1> {m.id}</h1>
//                 <h1>{m.login}</h1>
//               </div>
//              )

//           })

//         }


//     </div>
//   )
// }

//  export default Main


//  !Api fetching dummy.json==========================================================================

// import React from 'react'
// import { useEffect,useState } from 'react'
// import axios from 'axios'


// const Main = () => {

//       let[data ,setData] = useState([])
//       // console.log("hi",data);

//       let fetchApi =  async ()=>{


//         let apiData = await fetch("https://api.github.com/users")
//         let finalData =  await apiData.json()
//         console.log(finalData);

//         setData(finalData)
//         // ??===axios===========================================================================================================

//       // let apiData = await axios.get("https://dummyjson.com/products")
//       // console.log(apiData.data.products)
//       // setData(apiData.data.products)
//       // }

//       // useEffect(()=>{
//       //   fetchApi() 
//       // },[])

//       // console.log(apiData);

//       }
//   return (
//     <div>

// {
//           data.map((m)=>{
//             console.log(m);

//              return(
//               <div>
//                 <img src={m.avatar_url} alt="" />
//                 <h1> {m.title}</h1>
//                 <h1>{m.login}</h1>
//               </div>
//              )

//           }) 
//           }




//     </div>
//   )
// }

//  export default Main














// ?======================================Music player 1==================================================






// import React from 'react'
// import { useState } from "react";
// import { useRef } from "react";

// import AUDIO from "./AUDIO/128-Besharam Rang - Pathaan 128 Kbps.mp3";
// import AUDIO2 from "./AUDIO/128-Tumhare Hi Rahenge Hum - Stree 2 128 Kbps.mp3";
// import "./Global2.css"
// import { FaForwardStep } from "react-icons/fa6";

// import { FaBackwardStep } from "react-icons/fa6";
// import { FaPlay } from "react-icons/fa";
// import { FaPause } from "react-icons/fa6";
// import { FaMusic } from "react-icons/fa";

// import img1 from "./Images/download (1).jpeg"
// import img2 from "./Images/Tumhare-Hi-Rahenge-Hum-From-Stree-2-Hindi-2024-20240827163857-500x500.jpg"



// const Main = () => {


//   let [isplay, setPlay] = useState(false);
//   let [currentTime, setCurrentTime] = useState(0);


//   let audioRef = useRef(null)
//   let songs = [
//     {

//       tittle: "Aaaj ki raat",
//       src: AUDIO,
//       covers:img1

//     },

//     {

//       tittle: "Tumhare hi rahenge",
//       src: AUDIO2,
//       covers:img2
//     }
//   ]

//   let [currentSongIndex, setCurrentSongIndex] = useState(0)

//   let currentSong = songs[currentSongIndex]
//   console.log(currentSong)

// // !!===playorpause===================================================

//   let playOrpauseHandler = () => {

//     if (isplay) {

//       audioRef.current.pause()
//     } else {
//       audioRef.current.play()
//     }
//     setPlay(!isplay)
//   }


// // ?====timehandler function============================================================

//   let timeHandlerfunction = (e) => {
//     setCurrentTime(e.target.currentTime)
//   }


// // !!=====draghandler========================================

//   let dragHandlerfunction = (e) => {

//     audioRef.current.currentTime = e.target.value
//     setCurrentTime(e.target.value)
//   }


// // *================skipforward function========================

//   let skipForwardReverse = (direction) => {

//     if (direction === "skip-forward") {

//       setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length)
//     }

//     else if (direction === "skip-back") {

//       setCurrentSongIndex((prevIndex) => (prevIndex - 1 + songs.length) % songs.length)
//     }
//   }

// let [repeet,setRepeet]=useState(false);
// let looping=(e)=>{
//   audioRef.current.currentTime=0;
//   audioRef.current.play()
// }
// let noloop=()=>{
//   setRepeet(!repeet)
// }


//   return (

//      <div>
//            <div>
//             <label htmlFor=""><FaMusic />..</label>
//       <input type="text" className='search' placeholder='Enter Your song...' />

//            </div>

//       <div className="mainContainer">
//          <h1 className='jay'>  <sup>@_js</sup><FaMusic /> </h1>

//           <h1>
//              Song Name :{currentSong.tittle}
//           </h1>

//           <img src={currentSong.covers} alt="" />

//         <audio
//         ref={audioRef}
//         src={currentSong.src}
//         onTimeUpdate={timeHandlerfunction}
//         onEnded={({repeet})?looping:()=>skipForwardReverse("skip-forward")}></audio>

//       <div>

//         <input type="range"
//           value={currentTime}
//           onChange={dragHandlerfunction}
//       />
//       </div>



//       <div className="btnClass">

//         <button onClick={() => skipForwardReverse("skip-back")}> <FaBackwardStep /></button>
//         <button onClick={playOrpauseHandler}>{isplay ?<FaPause /> : <FaPlay />}</button>
//         <button onClick={() => skipForwardReverse("skip-forward")}> <FaForwardStep /></button>

//         {/* <button  onClick={noloop}>  loop</button> */}


//       </div>








// </div>
// </div>
// )
// }

// export default Main



// ?=============================================Weatherapi================================================================





// import React from 'react'
// import Musicplayer from './Musicplayer'
// import Weather from './Weather'
// function Main() {
//   return (
//     <div>
//      {/* <Weather/> */}
//      <Musicplayer/>

//     </div>
//   )
// }

// export default Main
// ?????????????????????????????????

// import React from 'react'
// import { useState ,useEffect } from 'react';

// const Main = () => {

//   let[weatherData ,setWeatherData]= useState(null)
//   let[city,SetCity] =useState("")

//     let fetchApi = async()=>{

//   //  let city = `Kolkata`
//    let apiKey = `0135c0a7a5199009d87f7fcf4cd208b9`
//    let apiUrl =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`


//     let data = await fetch(apiUrl)
//     console.log(data);
//     let finalData = await data.json();

//     console.log(finalData)

//     if(finalData.cod===200){
//       setWeatherData(finalData)

//     }
//     else{
//       setWeatherData(null)
//       alert("city not found")
//     }

//     }

//     // useEffect(()=>{
//     //   fetchApi()
//     // },[])


//   return (
//     <div>

//     <input type="text"
//     placeholder='Enter city name'
//       onChange={(e)=>{SetCity(e.target.value)}}
//        />

//       <button onClick={fetchApi}>Get weather data</button>

//        <h1> Name : {weatherData.name}</h1> 
//      <h1> temp : {weatherData.main.temp}</h1>
//   <h1> weather :{weatherData.weather[0].description}</h1>
//   <h1>wind : {weatherData.wind.speed}</h1>   



//     </div>
//   )
// }

// export default Main

// ??=====================================Movieapi======================================




// import React from 'react'
// import { useState ,useEffect } from 'react';

// const Main = () => {

//   let[movieData ,setmovieData]= useState(null)
//   let[movie,Setmovie] =useState("")

//     let fetchApi = async()=>{

//   //  let movie = "Animal"
// let apiUrl =  await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=ad5e05d8&t=${movie}`)


//     let data = await fetch(apiUrl)
//     console.log(data);
//     let finalData = await data.json();

//     console.log(finalData)

//     if(finalData.cod===200){
//       setmovieData(finalData)

//     }
//     else{
//       setmovieData(null)
//       alert("Movie not found")
//     }

//     }

//     useEffect(()=>{
//       fetchApi()
//     },[])



//   return (
//     <div>
//    <input type="text" 

//      placeholder='Enter city name'
//      onChange={(e)=>{Setmovie(e.target.value)}}
//      />

//     <button onClick={fetchApi}> Get Movie</button>


// <h1>  ActorsName : {movieData.Actors}</h1>
// <h1> Title: {movieData.Title}</h1>
// <h1> year :{movieData.year}</h1>
// <h1> imdbrating : {movieData.imdbRating}</h1> 

//  < img src={movieData.Poster} alt=""/>


//     </div>
//   )
// }

// export default Main




// ?=================================================================apitask


// import React from 'react'
// import { useEffect,useState } from 'react'
// import axios from 'axios'


// const Main = () => {

//       let[data ,setData] = useState([])
// //       // console.log("hi",data);

//       let fetchApi =  async ()=>{


//         // let apiData = await fetch("https://api.github.com/users")
//         // let finalData = apiData.json()
// console.log(finalData);

// setData(finalData)
// ??===axios===========================================================================================================

//       let apiData = await axios.get("https://dummyjson.com/products")
//       console.log(apiData.data.products)
//       setData(apiData.data.products)
//       }

//       useEffect(()=>{
//         fetchApi() 
//       },[])

//       // console.log(apiData);


//   return (
//     <div>

// {
//           data.map((m)=>{
//             console.log(m);

//              return(
//               <div>
//                 <img src={m.avatar_url} alt="" />
//                 <h1> {m.title}</h1>
//                 <h1>{m.login}</h1>

//                 <button onClick={}> Get Data </button>
//               </div>
//              )

//           }) 
//           }




//     </div>
//   )
// }

//  export default Main



// ?form Validation ==============================================





// import React from 'react'
// import { useState } from 'react'
// import "./Global.css"


// const Main = () => {

//   let [state, setState] = useState({

//     email: "",
//     password: "",
//     age: null
//   })

//   let [errors, setError] = useState({})
//   let [submitting, setsubmitting] = useState(false)


//   let handlechange = (e) => {

//     e.preventDefault()
//     let { name, value } = e.target;
//     setState({ ...state, [name]: value })

//   }


//   let validateform = (state) => {

//     if (state.email.length< 15) {
//       errors.email = "Email to short"
//     }
//     if (!state.age || state.age < 18) {
//       errors.age = "Age is not valid"
//     }
//     if (state.password.length < 8) {
//       errors.password = "password to short"
//     }
//     console.log(errors);
//     return errors;

//   }




//   let handleSubmit = (e) => {
//     e.preventDefault()
//     try {
//       setError(validateform(state))
//       setsubmitting(true)
//       console.log(state);
//       console.log({ state });
//     }

//     catch (error) {
//       console.log(error);

//     }

//     setState({ email: "", password: "", age: "" })


//   }



//   return (
//     <div>



//       {
//         Object.keys(errors).length === 0 && submitting ? (<>
//           <h2>Form submitted successfully</h2>
//         </>) : (null)


//       }


//       <form action="" className='form-container'

//         onSubmit={handleSubmit}>

//         <div>
//           <h1> React form </h1>
//         </div>
//             <br />

//         <div>
//           <label htmlFor=" ">Email:</label>
//           <br />
//           <input type="email"
//             placeholder='Enter your Email'
//             name="email"
//             value={state.email}
//             onChange={handlechange}
//             // style={{border:errors.email ?}}
//             style={{ border: errors.email ? "1px solid red" : null }}


//           />
//           {errors.email ? (<div>{errors.email}</div>) : (null)}

//         </div>



//         <div>
//           <label htmlFor=" ">password:</label>
//           <br />
//           <input type="password"
//             placeholder='Enter your password'
//             name="password"
//             value={state.password}
//             onChange={handlechange}
//             // style={{border:errors.email ?}}
//             style={{ border: errors.password ? "1px solid red" : null }}



//           />
//           {errors.password ? (<div>{errors.password}</div>) : (null)}

//         </div>





//         <div>
//           <label htmlFor=" ">Age:</label>
//           <br />
//           <input type="number"
//             placeholder='Enter your age'
//             name="age"
//             value={state.age}
//             onChange={handlechange}
//             style={{ border: errors.age ? "1px solid red" : null }}

//           />
//           {errors.age ? (<div>{errors.age}</div>) : (null)}

//         </div>

//         <br />


//         <div className='btn'>

//           <button type='submit' className='submit_btn'> Submit</button>


//           <button type='reset' className='cancel_btn'>Cancel </button>

//         </div>





//       </form>


//     </div>
//   )
// }

// export default Main


// ?====complete form =========================================



// import React from 'react'
// import { useState } from 'react'

// const Main = () => {


//   let [formData , setformData] = useState({


//     firstname: "",
//     lastname:"",
//     phoneNumber:"",
//     email:"",
//     age:"",
//     gender:"",
//     birthDate:"",
//     skills:"",
//     password:"",
//     confirmPassword:""


//   })

//   let [errors ,setError] =useState({})







//   return (
//     <div>

//       <h1> React form</h1>






//     </div>
//   )
// }

// export default Main


// !==========================================================


// import React, { useState } from 'react';

// import "./Global.css";

// const Main = () => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     phoneNumber: "",
//     email: "",
//     age: "",
//     gender: "",
//     birthDate: "",
//     skills: [],
//     password: "",
//     confirmPassword: ""
//   });

//   const [errors, setErrors] = useState({});

//   // Validation 
//   const isValidEmail = (email) => {
//     let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
//     return emailRegex.test(email);
//   };

//   const isValidPhoneNumber = (phoneNumber) => {
//     let phoneNumberRegex = /^\d{10}$/;
//     return phoneNumberRegex.test(phoneNumber);
//   };

//   const isValidPassword = (password) => {
//     let symbolRegex = /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/;
//     return symbolRegex.test(password);
//   };

//   // Form validation 
//   const validateForm = (formData) => {
//     let errors = {};

//     if (!formData.firstName) {
//       errors.firstName = "First name is required";
//     }
//     if (!formData.lastName) {
//       errors.lastName = "Last name is required";
//     }
//     if (!formData.phoneNumber) {
//       errors.phoneNumber = "Phone number is required";
//     } else if (!isValidPhoneNumber(formData.phoneNumber)) {
//       errors.phoneNumber = "Invalid phone number";
//     }
//     if (!formData.email) {
//       errors.email = "Email is required";
//     } else if (!isValidEmail(formData.email)) {
//       errors.email = "Invalid email format";
//     }
//     if (!formData.age) {
//       errors.age = "Age is required";
//     } else if (formData.age < 18 || formData.age > 100) {
//       errors.age = "Age must be between 18 and 100";
//     }
//     if (!formData.gender) {
//       errors.gender = "Please select your gender";
//     }
//     if (!formData.birthDate) {
//       errors.birthDate = "Birth date is required";
//     }
//     if (!formData.skills.length) {
//       errors.skills = "Please select at least one skill";
//     }
//     if (!formData.password) {
//       errors.password = "Password is required";
//     } else if (!isValidPassword(formData.password)) {
//       errors.password = "Password must contain at least one uppercase, one lowercase, one number, and one special character";
//     }
//     if (!formData.confirmPassword) {
//       errors.confirmPassword = "Confirm password is required";
//     } else if (formData.password !== formData.confirmPassword) {
//       errors.confirmPassword = "Passwords do not match";
//     }

//     return errors;
//   };

//   // Handle submit 
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const validationErrors = validateForm(formData);
//     setErrors(validationErrors);
//     console.log(formData)

//     if (Object.keys(validationErrors).length === 0) {
//       console.log("Form submitted:", formData);
//     }
//   };

//   // Handle change 
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   // Handle checkbox change 
//   const handleCheckBoxChange = (e) => {
//     const { name, checked } = e.target;
//     let updatedSkills = [...formData.skills];

//     if (checked) {
//       updatedSkills.push(name);
//     } else {
//       updatedSkills = updatedSkills.filter(skill => skill !== name);
//     }

//     setFormData({
//       ...formData,
//       skills: updatedSkills
//     });
//   };

//   return (
//     <section>
//       <form onSubmit={handleSubmit} >
//         <div>
//           <h1>React Form</h1>
//         </div>

//         {/* First Name */}
//         <div >
//           <label htmlFor="firstName">First Name: </label>
//           <input
//             type="text"
//             name="firstName"
//             placeholder="Enter your first name"
//             value={formData.firstName}
//             onChange={handleChange}
//           />
//           {errors.firstName && <div>{errors.firstName}</div>}
//         </div>

//         {/* Last Name */}
//         <div >
//           <label htmlFor="lastName">Last Name: </label>
//           <input
//             type="text"
//             name="lastName"
//             placeholder="Enter your last name"
//             value={formData.lastName}
//             onChange={handleChange}
//           />
//           {errors.lastName && <div>{errors.lastName}</div>}
//         </div>

//         {/* Phone Number */}
//         <div >
//           <label htmlFor="phoneNumber">Phone Number: </label>
//           <input
//             type="tel"
//             name="phoneNumber"
//             placeholder="Enter your phone number"
//             maxLength={10}
//             value={formData.phoneNumber}
//             onChange={handleChange}
//           />
//           {errors.phoneNumber && <div>{errors.phoneNumber}</div>}
//         </div>

//         {/* Email */}
//         <div >
//           <label htmlFor="email">Email: </label>
//           <input
//             type="email"
//             name="email"
//             placeholder="Enter your email"
//             value={formData.email}
//             onChange={handleChange}
//           />
//           {errors.email && <div>{errors.email}</div>}
//         </div>

//         {/* Age */}
//         <div >
//           <label htmlFor="age">Age: </label>
//           <input
//             type="number"
//             name="age"
//             placeholder="Enter your age"
//             value={formData.age}
//             onChange={handleChange}
//           />
//           {errors.age && <div>{errors.age}</div>}
//         </div>

//         {/* Gender */}
//         <div >
//           <label htmlFor="gender">Gender: </label>
//           <select name="gender" value={formData.gender} onChange={handleChange}>
//             <option value="">Select Gender</option>
//             <option value="Male">Male</option>
//             <option value="Female">Female</option>
//             <option value="Others">Others</option>
//           </select>
//           {errors.gender && <div>{errors.gender}</div>}
//         </div>

//         {/* Birth Date */}
//         <div >
//           <label htmlFor="birthDate">Birth Date: </label>
//           <input
//             type="date"
//             name="birthDate"
//             value={formData.birthDate}
//             onChange={handleChange}
//           />
//           {errors.birthDate && <div>{errors.birthDate}</div>}
//         </div>

//         {/* Skills */}
//         <div  className='skills'>
//           <label>Skills: </label>
//           <br />
//           <input
//             type="checkbox"
//             name="JavaScript"
//             checked={formData.skills.includes("JavaScript")}
//             onChange={handleCheckBoxChange}
//           />
//           JavaScript
//           <input
//             type="checkbox"
//             name="ReactJs"
//             checked={formData.skills.includes("ReactJs")}
//             onChange={handleCheckBoxChange}
//           />
//           ReactJs
//           <input
//             type="checkbox"
//             name="MongoDB"
//             checked={formData.skills.includes("MongoDB")}
//             onChange={handleCheckBoxChange}
//           />
//           MongoDB
//           <input
//             type="checkbox"
//             name="Nodejs"
//             checked={formData.skills.includes("Nodejs")}
//             onChange={handleCheckBoxChange}
//           />
//           Nodejs
//           <input
//             type="checkbox"
//             name="ExpressJs"
//             checked={formData.skills.includes("ExpressJs")}
//             onChange={handleCheckBoxChange}
//           />
//           ExpressJs
//           {errors.skills && <div>{errors.skills}</div>}
//         </div>

//         {/* Password */}
//         <div >
//           <label htmlFor="password">Password: </label>
//           <input
//             type="password"
//             name="password"
//             placeholder="Enter your password"
//             value={formData.password}
//             onChange={handleChange}
//           />
//           {errors.password && <div>{errors.password}</div>}
//         </div>

//         {/* Confirm Password */}
//         <div >
//           <label htmlFor="confirmPassword">Confirm Password: </label>
//           <input
//             type="password"
//             name="confirmPassword"
//             placeholder="Confirm your password"
//             value={formData.confirmPassword}
//             onChange={handleChange}
//           />
//           {errors.confirmPassword && <div>{errors.confirmPassword}</div>}
//         </div>

//         {/* Submit Button */}
//         <div  className='btn' >
//           <button type="submit" >Submit</button>
//           <button type="reset" >Cancel</button>
//         </div>
//       </form>
//     </section>
//   );
// };

// export default Main;


// ????===========







// import React  from 'react'
// import { useState } from 'react'
// import Child from './Child'


// const Main = () => {

//   // let [toggle , settoggle ] = useState(false)

//   // let[show , notshow] = useState(false)





//   let x = 
//         <p>
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo culpa sequi repellendus nostrum eveniet! Suscipit!

//        </p>

//   return (
//     <div>



//           <Child x={x}/>
//           <Child x={x}/>
//           <Child x={x}/>


//     </div>
//   )
// }

// export default Main


// ??????====================================


// import React from 'react'
// // import { useState } from 'react'
// import Child from './Child'

// const Main = () => {

//   // let[visible , setvisible] = useState(false)
//   // let[vis ,setvis] =useState(false)

//   // let setvisiblefunc = ()=>{
//     //  setvisible(!visible)



//   // let set= ()=>{

//   //         setvis(!vis)
//   // }



//   var s =[
//      `
//  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cumque deleniti impedit amet doloribus blanditiis esse pariatur laboriosam quam! Tenetur incidunt consequatur deleniti, doloribus iure vitae alias quas ea nobis?
//  A sunt explicabo at quod. Unde ut eius, sit dignissimos quam a consequatur repudiandae dolores iusto laudantium amet placeat quaerat harum id suscipit provident at consectetur veritatis ducimus corporis sapiente!
//  Nisi itaque maxime a reiciendis voluptatibus molestiae tempora deserunt nobis. Illum amet asperiores voluptatem obcaecati culpa, id eveniet maiores odit, commodi aspernatur doloribus quisquam nobis corrupti. Placeat aperiam cum quibusdam.
//  Accusamus, laudantium vel nostrum perspiciatis quibusdam fugiat magni asperiores excepturi voluptatum minima accusantium illo neque optio esse ipsam. Voluptas repellat asperiores nam modi. Tempora id reiciendis voluptatum cumque, tempore voluptates.
//  Iusto animi perspiciatis aut molestias minus ducimus, deleniti voluptatum commodi inventore quas sunt ad enim consequuntur incidunt placeat recusandae a? Laboriosam nulla numquam obcaecati quasi esse molestiae corrupti? Porro, est?

//  `,

//   `
//      data2Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cumque deleniti impedit amet doloribus blanditiis esse pariatur laboriosam quam! Tenetur incidunt consequatur deleniti, doloribus iure vitae alias quas ea nobis?
//  A sunt explicabo at quod. Unde ut eius, sit dignissimos quam a consequatur repudiandae dolores iusto laudantium amet placeat quaerat harum id suscipit provident at consectetur veritatis ducimus corporis sapiente!
//  Nisi itaque maxime a reiciendis voluptatibus molestiae tempora deserunt nobis. Illum amet asperiores voluptatem obcaecati culpa, id eveniet maiores odit, commodi aspernatur doloribus quisquam nobis corrupti. Placeat aperiam cum quibusdam.
//  Accusamus, laudantium vel nostrum perspiciatis quibusdam fugiat magni asperiores excepturi voluptatum minima accusantium illo neque optio esse ipsam. Voluptas repellat asperiores nam modi. Tempora id reiciendis voluptatum cumque, tempore voluptates.
//  Iusto animi perspiciatis aut molestias minus ducimus, deleniti voluptatum commodi inventore quas sunt ad enim consequuntur incidunt placeat recusandae a? Laboriosam nulla numquam obcaecati quasi esse molestiae corrupti? Porro, est?

//  `,
//  `
//  Data3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cumque deleniti impedit amet doloribus blanditiis esse pariatur laboriosam quam! Tenetur incidunt consequatur deleniti, doloribus iure vitae alias quas ea nobis?
//  A sunt explicabo at quod. Unde ut eius, sit dignissimos quam a consequatur repudiandae dolores iusto laudantium amet placeat quaerat harum id suscipit provident at consectetur veritatis ducimus corporis sapiente!
//  Nisi itaque maxime a reiciendis voluptatibus molestiae tempora deserunt nobis. Illum amet asperiores voluptatem obcaecati culpa, id eveniet maiores odit, commodi aspernatur doloribus quisquam nobis corrupti. Placeat aperiam cum quibusdam.
//  Accusamus, laudantium vel nostrum perspiciatis quibusdam fugiat magni asperiores excepturi voluptatum minima accusantium illo neque optio esse ipsam. Voluptas repellat asperiores nam modi. Tempora id reiciendis voluptatum cumque, tempore voluptates.
//  Iusto animi perspiciatis aut molestias minus ducimus, deleniti voluptatum commodi inventore quas sunt ad enim consequuntur incidunt placeat recusandae a? Laboriosam nulla numquam obcaecati quasi esse molestiae corrupti? Porro, est?

//  `
//   ]




//   return (
//     <div>


//       {/* Hello world!.. */}

//       {/* {visible===true&& data1} */}

//       {/* {visible ? data1: data1.substring(0,10)} */}

//       {/* <button onClick={setvisiblefunc}> { visible? "Show less":"Show More" }</button>  */}
//       {/* <br /> */}

//         {s.map((s)=>{
//                return <Child s={s}/>

//         })}
//         {/* <Child data1={data1}/> */}



//         {/* <Child data1={data2} />  */}

//         {/* <Child  data1 ={data3} />    */}






//       {/* {vis ? data2: data2.substring(0,10)} */}
//       {/* <button onClick={set}> { vis? "Show less":"Show More" }</button> */}  
//       {/* by second hook */}














//       {/* <button onClick={setnovisiblefunc}>Show less</button> */}


//     </div>
//   )
// }

// export default Main




// ?===================================OMDB movie=================================================

// import React from 'react'
// import Omdb from './Omdb'

// function Main() {
//   return (
//     <div>
//     <Omdb/>

//     </div>
//   )
// }

// export default Main




// import React from "react";
// import { useEffect } from "react";
// import { useState } from "react";
// import "./Omdb.css"


// const Main = () => {

//   let [data, setData] = useState([])
//   let[movie ,setmovie]=useState("")

//   let moviefetch = async () => {



//     let URL = `http://www.omdbapi.com/?s=${movie}&apikey=ad5e05d8`
//     let responce = await fetch(URL)

//     let finaldata = await responce.json()
//     console.log(finaldata);

//     setData(finaldata.Search)



//   }


//   return (
//        <div className="Top" >
//         <h1 className="heading">OMDB Movie ApI</h1>
//         <input type="text" 
//         placeholder="Enter the Movie"
//         onChange={(e)=>{ setmovie(e.target.value) }}
//        /> 

//       <br />

//       <button  onClick={moviefetch} >Get Movie</button>
//       <br />
//        <br />


//     <div className="Main">



//       { data.map((m)=>{

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






// ?============ omdb  fetching by using use reducer ================================








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

// // ?=======================================================


// // import React from 'react'
// // import { useReducer } from 'react'

// // const reducer= (state , action)=>{

// //   switch (action.type) {
// //     case "inc":
// //        return {...state, count: state.count+1}

// //       break;

// //       case "dec":
// //        return {...state, count: state.count-1}


// //       break;

// //       case "hiden":
// //         return {...state, hiden:!state.hiden}


// //       break;



// //     default:
// //       return state;
// //       break;
// //   }

// // }


// // const Main = () => {


// //   const[state , dispatch] = useReducer(reducer,{count:0 ,hiden:false})

// //   return (
// //     <div>

// //       <h1> {state.count}</h1>
// //       <button onClick={()=>{
// //         dispatch({type:"inc"})
// //       }}> Inc</button>

// // <button onClick={()=>{
// //         dispatch({type:"dec"})
// //       }}> Dec</button>

// // <button onClick={()=>{
// //         dispatch({type:"hiden"})
// //       }}>
// //       {state.hiden?"hidden":"Not hidden"}

// //       </button>


// //       {state.hiden?"hidden":"Not hidden"}





// //     </div>
// //   )
// // }

// // export default Main
// ?===================================Omdb api importnt========================================================



// import React from "react";
// import { useEffect } from "react";
// import { useState } from "react";
// import "./Omdb.css"
// import { useReducer } from "react";

// const initialstate={
//   data:[],
//   loading:true

// }

// const reducer =(state ,action)=>{

//   switch (action.type) {
//     case "fetchdata":
//       return {
//         data:action.payload,
//         loading:false
//       }

//       break;

//       // case "loading":
//       //  return {


//       //   }
//       //  }

//       //   break;

//     default:
//       return  state
//       break;
//   }


// }




// const Main = () => {

//   const[state,dispatch]= useReducer(reducer , initialstate)

//   // let [data, setData] = useState([])
//   let[movie ,setmovie]=useState("")

//   let moviefetch = async () => {



//     let URL = `http://www.omdbapi.com/?s=${movie}&apikey=ad5e05d8`
//     let responce = await fetch(URL)

//     let finaldata = await responce.json()
//     console.log(finaldata);

//     // setData(finaldata.Search)
//     dispatch( {type:"fetchdata",payload:finaldata.Search})



//   }


//   return (
//        <div className="Top" >
//         {state.loading ? "loading...":"error"}
//         <h1 className="heading">OMDB Movie ApI</h1>
//         <input type="text" 
//         placeholder="Enter the Movie"
//         onChange={(e)=>{ setmovie(e.target.value) }}
//        /> 

//       <br />

//       <button  onClick={moviefetch} >Get Movie</button>
//       <br />
//        <br />


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

// ?=================== =====Browser router dom=========================================================08oct



// import React from 'react'
// import Webap from './Webap'

// function Main() {
//   return (
//     <div>


//     <Webap/>



//     </div>
//   )
// }

// // export default Main

// import React from 'react'
// import { BrowserRouter,Routes ,Route } from 'react-router-dom'
// import Home1 from './Home1'
// import About1 from './About1'
// import Login1 from './Login1'
// import Signup1 from './Signup1'
// import Navbar1 from './Navbar1'
// import Product1 from './Product1'
// import Mobile from './Mobile'
// import Laptop from './Laptop'
// import Watches from './Watches'
// import Fashion from './Fashion'
// import ProductDetails from './ProductDetails'





// function Main() 
//  {
//   return (

//     <BrowserRouter>
//          <Navbar1/>

//        <Routes>

//            <Route  path = "/" element ={<Home1/>}/>



//            <Route  path = "/products" element ={<Product1/>}>

//               <Route  path = "mobile" element ={<Mobile/>}/>
//               <Route  path = "laptop" element ={<Laptop/>}/>
//               <Route  path = "watches" element ={<Watches/>}/>
//               <Route  path = "fashion" element ={<Fashion/>}/>


//             </Route>

//               <Route  path = "product-details/:pid" element ={<ProductDetails/>}/>

//               <Route  path = "/login" element ={<Login1/>}/>
//               <Route  path = "/about" element ={<About1/>}/>
//               <Route  path = "/signup" element ={<Signup1/>}/>



// import React from 'react'
// import  from './Omdb'


// const Main = () => {
//   return (
//     <div>

//       <Omdb/>

//     </div>
//   )
// }

// export default Main


//         </Routes>






//     </BrowserRouter>









//   )
// }

// export default Main

// import React from 'react'
// import Musicplayer from './Musicplayer'

// const Main = () => {
//   return (
//     <div>

//       <Musicplayer/>
//     </div>
//   )
// }

// export default Main







// ?==============================validation form in react by react library   =======================================================

// // import React from 'react'
// // import Signup1 from './Signup1'

// // function Main() {
// //   return (
// //     <div>

// //   <Signup1/>



// //     </div>
// //   )
// // }

// // export default Main

// // ?+====================================================================================================

//   import React from 'react'
//   import {useState , useEffect} from 'react'



//    function Main()  {

//      const [Data, setdata] = useState([]);

//      let apifetch = async()=>{

//       let apiData = await fetch("https://api.github.com/users")

//        let finaldata =  await apiData.json()
//        console.log(finaldata);

//        setdata(finaldata)

//      }

//     //  apifetch()


//        useEffect(() => {

//         apifetch()
//        }, []);





//     return (
//       <div>
//        {

//       Data.map((m)=>{

//         return (<h1>{m.id}</h1>)

//       })


//    }

//       </div>
//     )
//   }

//   export default Main














// import React from 'react'
// import { useState ,useEffect } from 'react';

// const Main = () => {

//   let[weatherData ,setWeatherData]= useState(null)
//   let[city,SetCity] =useState("")

//     let fetchApi = async()=>{

//   //  let city = "Kolkata"
//    let apiKey = "0135c0a7a5199009d87f7fcf4cd208b9"
//    let apiUrl =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`


//     let data = await fetch(apiUrl)
//     console.log(data);
//     let finalData = await data.json();

//     console.log(finalData)

//     if(finalData.cod===200){
//       setWeatherData(finalData)

//     }
//     else{
//       setWeatherData(null)
//       alert("city not found")
//     }

//     }

//     useEffect(()=>{
//       fetchApi()
//     },[])


//   return (
//     <div>

//     <input type="text"
//     placeholder='Enter city name'
//       onChange={(e)=>{SetCity(e.target.value)}}
//        />

//       <button onClick={fetchApi}>Get weather data</button>

//        {/* <h1> Name : {weatherData.name}</h1>  */}
//      <h1> temp : {weatherData.main.temp}</h1>
//   <h1> weather :{weatherData.weather[0].description}</h1>
//   <h1>wind : {weatherData.wind.speed}</h1> 



//     </div>
//   )
// }

// export default Main




// ?main ================================================================
// import React from 'react'

// import { useState } from 'react'
// import { useEffect } from 'react'

// function Main() {


//   const [data, setdata] = useState([]);
//   const [loading, setloading] = useState(true);



//          let apifetch = async()=>{

//          let apiData = await fetch("https://api.github.com/users")

//          let finaldata = await apiData.json()
//          console.log(finaldata);

//           await setdata(finaldata)
//           setloading(false)

//     }


//     useEffect( ()=>{
//    apifetch()

//     }


//     , []);


//   return (
//     <div>
//      {

//             loading?<h1>Loading...</h1>: data.map((m)=>{

//               return <> 

//                 <h1>{m.id}</h1>
//                 <h1>{m.url}</h1>


//                   </> 


//               })

//     }
//     </div>
//   )
// }

// export default Main







// import React from 'react'
// import { useState } from 'react'
// import Mobile from './Mobile';

// function Main() {

//      const [count, setcount] = useState(0);

//      function increment(){

//       setcount(count+1)
//      }

//      function decrement(){

//       setcount(count-1)
//      }

//      function reset(){

//       setcount(0)
//      }







//   return (
//     <div>


//       {count}

//       <Mobile increment={increment} decrement ={decrement} reset ={reset}/>

//       {count}
//       <Mobile increment1={increment} decrement2 ={decrement} reset3 ={reset}/>



//     </div>
//   )
// }

// export default Main



// import React from 'react'
// import Omdb from './Omdb'
// import Product1 from './Product1'

// 
// const Main = () => {
// return (
// <div>








// <Product1/>

// </div>
// )
// }

// export default Main










// import React from 'react'
// import { useState } from 'react'

// function Main() {

//   const [state, setstate] = useState([]);
//      const [loading, setloading] = useState(true);

//   let fetchdata = async()=>{

//            let apiData = await fetch("https://api.github.com/users")
//            console.log(apiData)

//            let finaldata = await apiData.json()
//            console.log(finaldata)

//            setstate(finaldata)

//            setloading(false)





//   }
//   fetchdata()

//   return (
//     <div>
//       {   

//      loading? <h1>Loading....</h1>:


//          state.map((m)=>{
//               return (
//                <>


//                  <h1>{m.login}</h1>
//                </>
//               )
//          })
// }
//     </div>
//   )
// }

// export default Main




// import React from 'react'
// import Watches from './Watches';
// import { useState } from 'react';

// function Main() {

//   const [count, setcount] = useState(0);


//   function incr(){

//     setcount(count+1)
//   }

//   function decr(){

//     setcount(count-1)
//   }
//   return (
//     <div>

//    <Watches inc={incr} dec={decr} count={count}/>

//     </div>
//   )
// }

// export default Main

// ?====================================================================================

// import React from 'react'
// import { useState } from 'react';
// import { useEffect } from 'react';

// function Main() {

//      const [data, setdata] = useState([]);
//      const [loading, setloading] = useState(true);

//      async function datafetch(){

//            let apiData = await fetch("https://api.github.com/users")
//             console.log(apiData);

//             let finaldata = await apiData.json()
//             console.log(finaldata)

//             setdata(finaldata)

//             setloading(false)




//      }
//      useEffect(() => {

//       datafetch()
//     }, []);

//   return (

//     <div>


//       {

//               loading?<h1>load ho rha hai be</h1> :  
//                data.map((m)=>{

//                 return (<div>
//                   <h1>le ho gya..</h1>

//                           <h1>{m.login}</h1>
//                 </div>)
//               })

//       }
//     </div>


//     )



// }

// export default Main

// ?==================================================================


//  import React from 'react'
//  import { useState } from 'react'


//  function Main() {

//   const [visible, setvisible] = useState(true);

//   let p = " Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, nisi laudantium a minima voluptate consequuntur fuga sapiente rerum, officiis neque, unde molestiae quidem voluptatum ipsam!"


//   function show()
//   {

//      setvisible(!visible)



//   }


//    return (
//      <div>

//          {

//         //  visible? <div>
//         //   <p>{p.substring(0,10)}</p>
//         //   <button onClick={show}></button>
//         //   </div>: <div><p>
//         //   {p}
//         //  </p>
//         //   <button onClick={show}></button>
//         //   </div>




//          }



//      </div>
//    )
//  }

//  export default Main

// ?=========================================

// import React from 'react'
// import Togle from './Togle'

// function Main() {
//   return (
//     <div>


//     <Togle/>



//     </div>
//   )
// }

// export default Main  

// ?????????????????????????????

// import React from 'react'

// function Main() {

//   var s =[
//     "hellooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo"
//     ,
//     "hellooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo",
//     "hellooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo"


//   ]
//   return (
//     <div>



//     </div>
//   )
// }

// export default Main



// ???======================================================================================================


// import React from 'react'
// import { useState } from 'react'

// const Main = () => {

//   const [state, setstate] = useState([]);

//   let datafetch = async()=>{

//      let data = await fetch('https://api.netskill.com/functions/v1/temppp')
//      console.log(data);

//      let finaldata = await data.json()
//      console.log(finaldata);


//   }
//   return (
//     <div>







//     </div>
//   )
// }

// export default Main


// ?????========================================================================================================================






// import React, { useEffect, useState } from 'react';

// const Main = () => {
//   const [data, setData] = useState(null);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('https://api.netskill.com/functions/v1/temppp', {
//           method: 'POST', 
//           headers: {
//             'Content-Type': 'application/json', 
//             'accept': '*/*',
//             'accept-language': 'en-US,en;q=0.9',
//             'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRja3NraGZxYmFnanBibnNjYm1zIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTAyMzc4NzAsImV4cCI6MjAyNTgxMzg3MH0.ETZNi2alFzGLOcAA9AUf3vpikoTuAtUW1UoszDcd0bc',
//             'authorization': 'Bearer eyJhbGciOiJIUzI1NiIsImtpZCI6IlNwWEswalFwMnNoSzgydFoiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2Rja3NraGZxYmFnanBibnNjYm1zLnN1cGFiYXNlLmNvL2F1dGgvdjEiLCJzdWIiOiIwYjBhOTdhMS1iZWE3LTRiZDgtYmFkMy01YzljMDUxM2RhNjMiLCJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNzMyMTczMzUwLCJpYXQiOjE3MzIxNjk3NTAsImVtYWlsIjoiYWRtaW5AbmVwaHJvcGx1cy5jb20iLCJwaG9uZSI6IiIsImFwcF9tZXRhZGF0YSI6eyJwcm92aWRlciI6ImVtYWlsIiwicHJvdmlkZXJzIjpbImVtYWlsIl19LCJ1c2VyX21ldGFkYXRhIjp7ImFkZGl0aW9uYWxfaW5mbyI6e30sImNpdHkiOiJIeWRlcmFiYWQiLCJjb3VudHJ5IjoiSU4iLCJkZXBhcnRtZW50IjoiSHVtYW4gUmVzb3VyY2VzIiwiZGVzaWduYXRpb24iOiJEZXB1dHkgTWFuYWdlciIsImVtYWlsIjoiYWRtaW5AbmVwaHJvcGx1cy5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImVtcGxveWVlX2lkIjoiMTExMTExIiwiZW1wbG95ZWVfc3RhdHVzIjoiV29ya2luZyIsImZ1bGxfbmFtZSI6IkFkbWluIiwiZ2VuZGVyIjoiRmVtYWxlIiwiaW52aXRhdGlvbl9zdGF0dXMiOiJJbnZpdGVkIiwib3JnYW5pemF0aW9uX2lkIjoiODdkNzJiMzEtYjlkNy00NGEzLTliNzEtZGZmNDU4ZWFlMDNlIiwicGhvbmUiOiI3Mzk2NjY3MzU3IiwicGhvbmVfdmVyaWZpZWQiOmZhbHNlLCJyZXBvcnRfdG8iOiJhZG1pbkBuZXBocm9wbHVzLmNvbSIsInJvbGVfcGVybWlzc2lvbl9pZCI6IjlkY2Q0ZmY1LTNhMmEtNGZkYi05ZDk1LWE1NDRiNThiOTRhZiIsInN1YiI6IjBiMGE5N2ExLWJlYTctNGJkOC1iYWQzLTVjOWMwNTEzZGE2MyIsInRpbWVfdHlwZSI6IkZ1bGxUaW1lIiwidG90YWxfZXhwZXJpZW5jZV9pbl9kYXlzIjo1MzksIndvcmtfdHlwZSI6IlBlcm1hbmVudCJ9LCJyb2xlIjoiYXV0aGVudGljYXRlZCIsImFhbCI6ImFhbDEiLCJhbXIiOlt7Im1ldGhvZCI6InBhc3N3b3JkIiwidGltZXN0YW1wIjoxNzMyMTA1MTY1fV0sInNlc3Npb25faWQiOiJlY2VhZWIwYy1hZDlmLTQ0NWYtYjliMy01ZTIxM2E2ZDZjODkiLCJpc19hbm9ueW1vdXMiOmZhbHNlfQ.rfQHtD4jzutH6rnLnCI_jFo3MbKd9p6yjtXAPjO-L-U',
//             'cache-control': 'no-cache',
//             'content-type': 'application/json; charset=utf-8',
//             'origin': 'https://admin-dev.netskill.com',
//             'pragma': 'no-cache',
//             'sec-fetch-dest': 'empty',   
//             'pragma': 'no-cache' ,
//             'priority': 'u=1, i' ,
//             'referer': 'https://admin-dev.netskill.com/' ,
//             // 'sec-ch-ua': "Chromium";"v"="130", "Google Chrome";"v"="130", "Not?A_Brand";"v"="99"' ,
//             'sec-ch-ua': "Chromium",
//             'sec-ch-ua-mobile': '?0' ,
//             'sec-ch-ua-platform': "Windows" ,
//             'sec-fetch-dest': 'empty' ,
//             'sec-fetch-mode': 'cors' ,
//             'sec-fetch-site': 'same-site' ,
//             'user-agent':' Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36' 




//           },
//           body: JSON.stringify({ organization_id: '0c0bc1fb-8162-4476-abda-2686687d5cb3' }),

//         });

//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }

//         const result = await response.json();
//         setData(result);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []); 

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error}</p>;

//   return (
//     <div>
//       <h1>API Data:</h1>
//       <pre>{JSON.stringify(data)}</pre>
//     </div>
//   );
// };

// export default Main;


// ??????????????????????????????????????????????????????????????????????


//  import React from 'react'
//  import Signup1 from './Signup1'

//  const Main = () => {
//    return (
//      <div>




//            <Signup1/>

//      </div>
//    )
//  }

//  export default Main
// ?=============================================figma design===================================



// import React from 'react'
// import "./Figma.css"
// import img1 from "./Images/Avatar.png"
// import img2 from "./Images/Logomark.png"
// import big from "./Images/Screenshot (93).png"

// import logo1 from "./Images/Fictional company logo (1).png"
// import logo2 from "./Images/Fictional company logo (2).png"
// import logo3 from "./Images/Fictional company logo (3).png"
// import logo4 from "./Images/Fictional company logo (4).png"
// import logo5 from "./Images/Fictional company logo (5).png"
// import logo6 from "./Images/Fictional company logo (6).png"
// import plus from "./Images/Icon wrap.png"


// import l1 from "./Images/message-heart-circle.png"
// import l2 from "./Images/message-smile-circle.png"
// import l4 from "./Images/Fictional company logo (7).png"


// import l6 from "./Images/Avatar.png"

// import bigscreen from "./Images/Screen mockup (REPLACE FILL).png"
// import smallscreen from "./Images/Screen mockup (REPLACE FILL) (1).png"
// import label from "./Images/Avatar label group.png"
// import logol from "./Images/Logo.png"
// import lastpic from "./Images/Image (1).png"








// const Main = () => {
//   return (
//     <div>


//       <div className='main1'>
//         <ul>
//           <li>
//             <img src={img2} alt="" className='img1' />
//             Untitled UI

//           </li>
//           <li>Home</li>
//           <li>products</li>
//           <li>Resource</li>
//           <li>pricing</li>
//         </ul>

//         <img src={img1} alt="" />




//       </div>

//       <div className='content2'>
//         <div className='clr'>
//           <button className='btn1'>New feature</button>
//           Check out the team dashboard

//         </div>

//       </div>

//       {/* content3 */}

//       <div className='content3'>

//         <h1>
//           Beautiful Analytics to grow Smatter
//         </h1>
//         <h3>
//           Powerful, self-serve product and growth analytics to help you convert,
//         </h3>
//         <h3>
//           engage, and retain more users. Trusted by over 4,000 startups.
//         </h3>


//         <div>
//           <button className='btn11'>Demo</button>
//           <button className='btn12'>sign Up!</button>

//         </div>

//         <br /><br />


//       </div>


//       <div className='big'>

//         <img src={big} alt="" />

//       </div>


//       <div className='logo'>

//         <div><img src={logo1} alt="" /></div>
//         <div><img src={logo2} alt="" /></div>
//         <div><img src={logo3} alt="" /></div>
//         <div><img src={logo4} alt="" /></div>
//         <div><img src={logo5} alt="" /></div>
//         <div><img src={logo6} alt="" /></div>

//       </div>
//       {/* ============================================================================= */}

//       <div className='messy' style={{ border: "5px solid black", height: "800px", }}>


//         <div className='firstbox'>
//           <p style={{ color: "#7F56D9;}" }}>Featurs</p>
//           <h1>
//             Analytics that feels like it’s from the future
//           </h1>

//           <p>
//             Powerful, self-serve product and growth analytics to help you convert, <br />
//             engage, and retain more users.
//             Trusted by over 4,000 startups.
//           </p>
//         </div>
//         <br /><br /><br />

//         <div className='secondbox'>



//           <div className='box1'>
//             <img src={l2} alt="" />
//             <h2>Share team inboxes</h2>
//             <p>
//               Whether you have a team of 2 or 200, our shared team <br />
//               inboxes keep everyone on the same page and in the loop.
//             </p>

//           </div>


//           <div className='box1'>
//             <img src={l2} alt="" />
//             <h2>Share team inboxes</h2>
//             <p>
//               Whether you have a team of 2 or 200, our shared team <br />
//               inboxes keep everyone on the same page and in the loop.
//             </p>

//           </div>


//           <div className='box1'>
//             <img src={l2} alt="" />
//             <h2>Share team inboxes</h2>
//             <p>
//               Whether you have a team of 2 or 200, our shared team <br />
//               inboxes keep everyone on the same page and in the loop.
//             </p>

//           </div>




//         </div>
//         <br />
//         <br />
//         <br />



//         <div className='secondbox'>



//           <div className='box1'>
//             <img src={l2} alt="" />
//             <h2>Share team inboxes</h2>
//             <p>
//               Whether you have a team of 2 or 200, our shared team <br />
//               inboxes keep everyone on the same page and in the loop.
//             </p>

//           </div>


//           <div className='box1'>
//             <img src={l2} alt="" />
//             <h2>Share team inboxes</h2>
//             <p>
//               Whether you have a team of 2 or 200, our shared team <br />
//               inboxes keep everyone on the same page and in the loop.
//             </p>

//           </div>


//           <div className='box1'>
//             <img src={l2} alt="" />
//             <h2>Share team inboxes</h2>
//             <p>
//               Whether you have a team of 2 or 200, our shared team <br />
//               inboxes keep everyone on the same page and in the loop.
//             </p>

//           </div>





//         </div>




//       </div>
//        <br/><br/><br/>

//       {/* messyover============================================ */}



//       <div className='l4'>
       
//        <img src={l4} alt="" /><br/><br />
//        <h1>
//        We’ve been using Untitled to kick start every  <br />
//        new project and can’t imagine working without it.
//        </h1>
//        <img src={l6} alt="" />
//        <h1>Candice Wu</h1>
//        <p>Product Manager ,Sisyphus</p>

//       </div>

// {/* ???=============================================== */}
// <br /><br /><br />


//          <div className='text' >
//                 <button className='txtbtn'>Features</button>
//                 <h1>
//                 Cutting-edge features for advanced analytics
//                 </h1>
//                 <h2>
//                 Powerful, self-serve product and growth analytics to help you convert, engage,<br/>
//                  and retain more users. Trusted by over 4,000 startups.
//                 </h2>
//          </div>

//          {/* ++++++++++++++ */}
//          <br /><br /><br />


//          <div className='pics'>

                    
//           <img className='smallscreen' src={smallscreen} alt="" />
//           <img className='bigscreen' src={bigscreen} alt="" />


//          </div>

//    {/* ============================================================ */}
// <br /><br /><br />


   
//    <div className='secondbox'>



// <div className='box11'>
//   <img src={l2} alt="" />
//   <h2>Share team inboxes</h2>
//   <p>
//     Whether you have a team of 2 or 200, our shared team <br />
//     inboxes keep everyone on the same page and in the loop.
//   </p>
//    <p>Learn More</p>
// </div>


// <div className='box1'>
//   <img src={l1} alt="" />
//   <h2>Share team inboxes</h2>
//   <p>
//     Whether you have a team of 2 or 200, our shared team <br />
//     inboxes keep everyone on the same page and in the loop.
//   </p>
//   <p>
//    <p>Learn More</p>

//   </p>

// </div>


// <div className='box1'>
//   <img src={l2} alt="" />
//   <h2>Share team inboxes</h2>
//   <p>
//     Whether you have a team of 2 or 200, our shared team <br />
//     inboxes keep everyone on the same page and in the loop.
//   </p>
//   <p>
//    <p>Learn More</p>

//   </p>

// </div>




// </div>

// {/* ++++===============================================questionspart=========== */}

//     <br /><br /><br />
    
//     <div className='plus'>





// <h1>Frequently asked questions</h1>
//         <p>Everything you need to know about the producttheir staus with all the things and billing.</p>
//         <br/><br/>

//       <div className='flexy'>is there a free trial avalibl  <img src={plus} alt="" />  </div> <hr/><br/>
//         <div className='flexy'> a free trial avalible <img src={plus} alt="" /></div><hr/><br/>
//         <div className='flexy'>itrial avalible <img src={plus} alt="" /></div><hr/><br/>
//         <div className='flexy'> free trial avalible <img src={plus} alt="" /></div><hr/><br/>
//         <div className='flexy'> hello<img src={plus} alt="" /></div><hr/><br/>
//         <div className='flexy'>is everything fine <img src={plus} alt="" /></div><hr/><br/>
//         <div className='flexy'>How does i change email <img src={plus} alt="" /></div><hr/><br/>

                                                                                             
//    </div >
        
// {/* ???+++++++++++++?????????????????????????????????????????????? */}
// <br /><br /><br />


// <div  className='fiveteen'>
   
//    <div>
//   <h4>Our Blog</h4>
//   <h1>Veiw our latest blogs</h1>
//   <h2>Tool and strategies for growing of the industry</h2>


//    </div>
//    <button className='veiw'>Veiw all post</button>



//   </div>


     


// <br /><br /><br /><br />




 
//  <div className='complicated'>

//   <div>
//       <img src={lastpic} alt="" />
//       <h4>Design</h4>
//       <h2>UX review presentation</h2>
//       <h3>How do you create compelling presentations that <br/>
//          wow your impress your managers?</h3>
//          <img src={label} alt="" />
     
//       <br /><br />

//   </div>
//   <br/><br/>




//   <div>
//       <img src={lastpic} alt="" />
//       <h4>Design</h4>
//       <h2>UX review presentation</h2>
//       <h3>How do you create compelling presentations that <br/>
//          wow your impress your managers?</h3>
// <br /><br />
//          <img src={label} alt="" />

//   </div>
//   <br/><br/>




  
//   <div>
//       <img src={lastpic} alt="" />
//       <h4>Design</h4>
//       <h2>UX review presentation</h2>
//       <h3>How do you create compelling presentations that <br/>
//          wow your impress your managers?</h3>
//          <br /><br />
//          <img src={label} alt="" />


//   </div>
//   <br/><br/>





//  </div>
//    <br /><br /><br /><br />




//      <div className='headings'>

//       <h1>Start your free Trial</h1>
//       <h2>
//       Join over 4,000+ startups already growing with Untitled.
//       </h2>
//       <br /><br />

//       <div className='bt'>
//         <button className='btn11'>Learn More</button>
//         <button className='btn12'>Get Started</button>
//       </div>

//      </div>
// {/* ?////////////////////////////////////////////////////////// */}


// <br /><br /><br />
// <br /><br /><br />



//     <div className='lists'>
      

//        <div className='list'>
//         <h2>Products</h2>
//         <p>Overveiw</p>
//         <p> veiw</p>
//         <p>sloww</p>
//         <p>solution</p>
//         <p>pricing</p>
//         <p>Releases</p>
//        </div>
   
       
//        <div className='list'>
//         <h2>Products</h2>
//         <p>Overveiw</p>
//         <p> veiw</p>
//         <p>sloww</p>
//         <p>solution</p>
//         <p>pricing</p>
//         <p>Releases</p>
//        </div>

       
//        <div className='list'>
//         <h2>Releases</h2>
//         <p>Overveiw</p>
//         <p> veiw</p>
//         <p>sloww</p>
//         <p>solution</p>
//         <p>pricing</p>
//         <p>Releases</p>
//        </div>

       
//        <div className='list'>
//         <h2>Products</h2>
//         <p>Overveiw</p>
//         <p> veiw</p>
//         <p>sloww</p>
//         <p>solution</p>
//         <p>pricing</p>
//         <p>Releases</p>
//        </div>

       
//        <div className='list'>
//         <h2>Company</h2>
//         <p>Overveiw</p>
//         <p> veiw</p>
//         <p>sloww</p>
//         <p>solution</p>
//         <p>pricing</p>
//         <p>Releases</p>
//        </div>

       
//        <div className='list'>
//         <h2>Resources</h2>
//         <p>Overveiw</p>
//         <p> veiw</p>
//         <p>sloww</p>
//         <p>solution</p>
//         <p>pricing</p>
//         <p>Releases</p>
//        </div>

       
//        <div className='list'>
//         <h2>Products</h2>
//         <p>Overveiw</p>
//         <p> veiw</p>
//         <p>sloww</p>
//         <p>solution</p>
//         <p>pricing</p>
//         <p>Releases</p>
//        </div>


//     </div>
// <br /><br />
// {/* ?????++++++++++++++++++++++++++ */}
// < hr/>

// <br /><br /><br /><br />
// <div className='last'>
//    <img src={logol} alt="" />
//    <p>© 2077 Untitled UI. All rights reserved.</p>

// </div>

// {/* ????+++++++++++++++++++++++++++++++++++++++ */}----
// <br /><br /><br />








//     </div>
//   )
// }

// export default Main



















