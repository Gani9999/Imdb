import { useEffect } from "react";
import MovieCards from "./MovieCards";
import axios from "axios";
import { useState } from "react";
import Pagination from "./Pagination";

const Movies=({handleAddWatchList,handleRemoveFromWatchList,watchMovieList})=>{

    const[movies,setMovies]=useState([])
    const[pageNo,setPageNo]=useState(1);

    const handleNext=()=>{
        setPageNo(pageNo+1)
    }
    function handlePrev(){
        pageNo===1?pageNo:setPageNo(pageNo-1)
    }

    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=f84c36488b837904843285fca4ba3161&language=en-US&page=${pageNo}`).then((res)=>{setMovies(res.data.results)})
    },[pageNo])
    return(
        <div className="p-5">
            <div className="text-center w-full m-5 font-bold text-2xl">
                 Trending Movies
            </div>
            <div className="flex flex-row flex-wrap justify-around gap-8 ">
               {movies.map((movieObj,index)=>{
                return <MovieCards poster_path={movieObj.poster_path} key={index} name={movieObj.original_title} handleAddWatchList={handleAddWatchList} movieObj={movieObj} handleRemoveFromWatchList={handleRemoveFromWatchList} watchMovieList={watchMovieList}/>
               })}
            </div>

            <Pagination page={pageNo} handleNext={handleNext} handlePrev={handlePrev}/>
        </div>
    )
}

// https://api.themoviedb.org/3/movie/popular?api_key=f84c36488b837904843285fca4ba3161&language=en-US&page=1%27

export default Movies;