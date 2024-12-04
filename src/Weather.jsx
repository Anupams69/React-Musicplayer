

import React from 'react'
import { useState ,useEffect } from 'react';

const Weather = () => {

  let[weatherData ,setWeatherData]= useState(null)
  let[city,SetCity] =useState("")

    let fetchApi = async()=>{

  //  let city = `Kolkata`
   let apiKey = `0135c0a7a5199009d87f7fcf4cd208b9`
   let apiUrl =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`


    let data = await fetch(apiUrl)
    console.log(data);
    let finalData = await data.json();

    console.log(finalData)

    if(finalData.cod===200){
      setWeatherData(finalData)

    }
    else{
      setWeatherData(null)
      alert("city not found")
    }

    }

    // useEffect(()=>{
    //   fetchApi()
    // },[])


  return (
    <div>

    <input type="text"
    placeholder='Enter city name'
      onChange={(e)=>{SetCity(e.target.value)}}
       />

      <button onClick={fetchApi}>Get weather data</button>

       <h1> Name : {weatherData.name}</h1> 
     <h1> temp : {weatherData.main.temp}</h1>
  <h1> weather :{weatherData.weather[0].description}</h1>
  <h1>wind : {weatherData.wind.speed}</h1>   



    </div>
  )
}

export default Weather