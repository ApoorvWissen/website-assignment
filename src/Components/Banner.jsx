import React ,{useState , useEffect} from 'react'
// import BannerImg from '../images/banner.jpg'
import {Carousel , Caption , Item} from "react-bootstrap"
 import axios from 'axios'
import banner from './banner.jpg'
import banner2 from './background.jpg'

function Banner() {

  const[movies , setMovies] =useState({})

  useEffect(()=>{
    let res = axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=5540e483a20e0b20354dabc2d66a31c9&page=1`)
    .then((res)=>{
          setMovies(res.data.results)
    })
       
  }) 

  return (
    <div className={`bg-[url(${banner})] h-[40vh] md:h-[60vh] bg-center bg-cover text-white
     flex items-end justify-center`} style={{width:"100%"}}>
      <div className=' p-4 bg-gray-900 bg-opacity-50 w-full flex justify-center text-xl md:text-5xl'>The Gray Man</div>
    </div>
  )
}

export default Banner 