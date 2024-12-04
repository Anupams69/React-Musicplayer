


import React from 'react'
import { useState } from "react";
import { useRef } from "react";

import AUDIO from "./AUDIO/128-Besharam Rang - Pathaan 128 Kbps.mp3";
import AUDIO2 from "./AUDIO/128-Tumhare Hi Rahenge Hum - Stree 2 128 Kbps.mp3";
import "./Global2.css"
import { FaForwardStep } from "react-icons/fa6";

import { FaBackwardStep } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa6";
import { FaMusic } from "react-icons/fa";

import img1 from "./Assigment/Images/download (1).jpeg"
import img2 from "./Assigment/Images/Tumhare-Hi-Rahenge-Hum-From-Stree-2-Hindi-2024-20240827163857-500x500.jpg"



const Musicplayer = () => {


  let [isplay, setPlay] = useState(false);
  let [currentTime, setCurrentTime] = useState(0);


  let audioRef = useRef(null)
  let songs = [
    
    {

      tittle: "Tumhare hi rahenge",
      src: AUDIO2,
      covers:img2
    }
    ,

    {

      tittle: "Aaaj ki raat",
      src: AUDIO,
      covers:img1

    },

  ]

  let [currentSongIndex, setCurrentSongIndex] = useState(0)

  let currentSong = songs[currentSongIndex]
  console.log(currentSong)

// !!===playorpause===================================================

  let playOrpauseHandler = () => {

    if (isplay) {

      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
    setPlay(!isplay)
  }


// ?====timehandler function============================================================

  let timeHandlerfunction = (e) => {
    setCurrentTime(e.target.currentTime)
  }


// !!=====draghandler========================================

  let dragHandlerfunction = (e) => {

    audioRef.current.currentTime = e.target.value
    setCurrentTime(e.target.value)
  }


// *================skipforward function========================

  let skipForwardReverse = (direction) => {

    if (direction === "skip-forward") {

      setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length)
    }

    else if (direction === "skip-back") {

      setCurrentSongIndex((prevIndex) => (prevIndex - 1 + songs.length) % songs.length)
    }
  }

let [repeet,setRepeet]=useState(false);
let looping=(e)=>{
  audioRef.current.currentTime=0;
  audioRef.current.play()
}
let noloop=()=>{
  setRepeet(!repeet)
}


  return (

     <div>
           <div>
            <label htmlFor=""><FaMusic />..</label>
      <input type="text" className='search' placeholder='Enter Your song...' />

           </div>

      <div className="mainContainer">
         <h1 className='jay'>  <sup>@_js</sup><FaMusic /> </h1>

          <h1>
             Song Name :{currentSong.tittle}
          </h1>

          <img src={currentSong.covers} alt="" />

        <audio
        ref={audioRef}
        src={currentSong.src}
        onTimeUpdate={timeHandlerfunction}
        onEnded={({repeet})?looping:()=>skipForwardReverse("skip-forward")}></audio>

      <div>

        <input type="range"
          value={currentTime}
          onChange={dragHandlerfunction}
      />
      </div>



      <div className="btnClass">

        <button onClick={() => skipForwardReverse("skip-back")}> <FaBackwardStep /></button>
        <button onClick={playOrpauseHandler}>{isplay ?<FaPause /> : <FaPlay />}</button>
        <button onClick={() => skipForwardReverse("skip-forward")}> <FaForwardStep /></button>

        {/* <button  onClick={noloop}>  loop</button> */}


      </div>








</div>
</div>
)
}

export default Musicplayer

