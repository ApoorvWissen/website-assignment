import React, { useEffect, useState } from "react";
import banner from './banner.jpg'
import axios from "axios";
import { Spinner } from "react-bootstrap";
import {API} from '../api'
import Pagination from "./Pagination";

const Movies = ()=>{

    const [movies , setMovies] = useState([]);
    const[pageNumber , setPageNumber] = useState(1);
    const[hover , setHover] = useState('');
    const[fav , setFav] = useState([]);

    const goAhead = ()=>{
        setPageNumber(pageNumber+1)
    }

    const goBack = ()=>{
        if(pageNumber>1)
        setPageNumber(pageNumber-1)
    }

    useEffect(()=>{
        let res = axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=5540e483a20e0b20354dabc2d66a31c9&page=${pageNumber}`)
        .then((res)=>{
            setTimeout(() => {
                setMovies(res.data.results)
            }, 1500);
        })
           
    })

    const addFav = (movie)=>{
        let nArr = [...fav , movie];
        setFav([...nArr]);
        console.log(nArr);
    }

    const removeFav = (movie)=>{
        let nArr = [];
        nArr = fav.filter((obj)=>obj.id!=movie.id)
        setFav([...nArr])
    }
  

    return(
       <>
        <div className="mb-8">
            <div className="mt-8 font-bold text-white text-2xl text-center" >Trending Movies</div>
            <div style={{display:"flex" , justifyContent:"center" }}>
                 <hr className="line"/>
            </div>
            <div className="flex flex-wrap justify-center">
                  { movies.length == 0 ? <Spinner animation="grow" variant="light" /> : 
                    movies.map((obj)=>(
                        <div className={`bg-[url(https://image.tmdb.org/t/p/w500/${obj.backdrop_path})] bg-center bg-cober flex items-end h-[35vh] w-[200px] m-4 hover:scale-110 ease-out duration-300
                        center bg-cover rounded-xl relative`} style={{border:"3px solid gray"}} onMouseEnter={()=>setHover(obj.id)} onMouseLeave={()=>setHover('')}>
                             {hover==obj.id && <>{!fav.find((m)=>m.id == obj.id) ? <div className='absolute top-1 left-0 rounded-r-lg pr-2 bg-gray-500 cursor-pointer' onClick={()=>addFav(obj)}>⭐ Add To Favoutites</div> : <div className='absolute top-1 left-0 rounded-r-lg pr-2 bg-gray-500 cursor-pointer' onClick={()=>removeFav(obj)}>❌ Remove</div>}</> }
                            <div className="w-full text-white py-2 text-center rounded-b-xl bg-gray-900">{obj.title}</div>
                     </div>
                    ))
                  }
           </div>
        </div>
        <Pagination page={pageNumber} goAhead={goAhead} goBack={goBack}/>
       </>
       
    )
}

export default Movies;