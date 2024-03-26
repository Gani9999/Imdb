import { useEffect, useState } from "react";
import generids from "../utilies/gener.js"

const WatchLists=({watchMovieList, setWatchMovieList,handleRemoveFromWatchList})=>{

    const[search,setSearch]=useState('')
    const[generLists,setGenerLists]=useState(['all geners'])
    const[currentGener,setCurrentGener]=useState('all geners')

    useEffect(()=>{
        let temp=watchMovieList.map((movieObj)=>{
            return generids[movieObj.genre_ids[0]]
        })
        temp=new Set(temp)
        setGenerLists(['all geners',...temp])
        console.log(temp)
    },[watchMovieList])

    const handleSearch=(e)=>{
        setSearch(e.target.value)
    }

    const handleFilter=(gener)=>{
        setCurrentGener(gener)
    }

    let sortIncreasing=()=>{
       let sortIncreasing= watchMovieList.sort((movieA,movieB)=>{
            return movieA.vote_average-movieB.vote_average;
        })
        setWatchMovieList([...sortIncreasing])
    }

    let sortDecrementing=()=>{
      let sortDecreasing=  watchMovieList.sort((movieA,movieB)=>{
            return movieB.vote_average-movieA.vote_average;
        })
        setWatchMovieList([...sortDecreasing])
    }
    return(
        <>
        <div className="flex justify-center flex-wrap m-4">
            {generLists.map((g)=>{
                return <div onClick={()=>handleFilter(g)} className={currentGener==g?"flex justify-center items-center bg-blue-400 rounded-lg text-white font-bold h-[3rem] w-[9rem] mx-4":"flex justify-center items-center bg-gray-400/50 rounded-lg text-white font-bold h-[3rem] w-[9rem] mx-4"}>{g}</div>
            })}
            
            {/* <div className="flex justify-center items-center bg-gray-400/50 rounded-lg text-white font-bold h-[3rem] w-[9rem] mx-4">Action</div> */}
        </div>
         <div className="flex justify-center my-4">
            <input type="text" onChange={handleSearch} value={search} placeholder="Search Movies" className="bg-gray-200 rounded-lg h-[3rem] w-[18rem] p-2 border-none"/>
        </div>
        <div className="overflow-hidden rounded-lg border border-gray-200 m-8">
            <table className="w-full text-gray-500 text-center">
               <thead className="border-b-2">
               <tr>
                    <th>Name</th>
                    <th className="flex justify-center">
                        <div className="p-2" onClick={sortIncreasing}><i class="fa-solid fa-arrow-up"></i></div>
                         <div className="p-2">Rating</div>
                        <div className="p-2" onClick={sortDecrementing}><i class="fa-solid fa-arrow-down"></i></div>
                    </th>
                    <th>Popularity</th>
                    <th>Genre</th>
                </tr>
               </thead>
               <tbody>

                {watchMovieList.filter((movieObj)=>{
                    if(currentGener=='all geners'){
                        return true
                    }else{
                        return generids[movieObj.genre_ids[0]]==currentGener;
                    }
                }).filter((movieObj)=>{
                    return movieObj.title.toLowerCase().includes(search.toLowerCase())
                }).map((movieObj)=>{
                    return  <tr className="border-b-2">
                    <td className="flex flex-center px-6 py-8">
                        <img className="h-[6rem] w-[10rem]" src={`https://image.tmdb.org/t/p/original/${movieObj.poster_path}`}/>
                        <div className="m-10 my font-bold">{movieObj.title}</div>
                    </td>
                    <td>{movieObj.vote_average}</td>
                    <td>{movieObj.popularity}</td>
                    <td>{generids[movieObj.genre_ids[0]]}</td>
                    <td onClick={()=>handleRemoveFromWatchList(movieObj)} className="text-red-400 cursor-pointer">Delete</td>
                </tr>
                })}

               
               
               </tbody>
            </table>
        </div>
        </>
       
    )
}
export default WatchLists;