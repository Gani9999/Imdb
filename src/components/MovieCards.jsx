const MovieCards=({poster_path,name,handleAddWatchList,movieObj,handleRemoveFromWatchList,watchMovieList})=>{

    const doesContain=(movieObj)=>{
        for(let i=0;i<watchMovieList.length;i++){
            if(watchMovieList[i].id==movieObj.id){
                return true;
            }
        }
        return false;
    }
    return(
        <div className="h-[50vh] w-[180px] bg-cover bg-center rounded-2xl hover:scale-110 hover:cursor-pointer flex flex-col justify-between items-end " style={{backgroundImage:`url(https://image.tmdb.org/t/p/original/${poster_path})`}}>

            {doesContain(movieObj)?<div onClick={()=>(handleRemoveFromWatchList(movieObj))} className="m-4 justify-center h-8 w-8 items-center rounded-lg bg-gray-400/60">&#10060;</div>:  
              <div onClick={()=>(handleAddWatchList(movieObj))} className="m-4 justify-center h-8 w-8 items-center rounded-lg bg-gray-400/60">&#128525;</div>}
           <div className="text-white text-xl w-full p-2 text-center bg-gray-900/60">{name}</div> 
        </div>
    )
}
export default MovieCards;