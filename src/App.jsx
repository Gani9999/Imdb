import Navbar from "./components/Navbar"
import Movies from "./components/Movies"
import WatchLists from "./components/WatchLists"
import Banner from "./components/Banner"
import { BrowserRouter ,Routes,Route} from "react-router-dom"
import { useEffect, useState } from "react"
function App() {

  const[watchMovieList,setWatchMovieList]=useState([])

  const handleRemoveFromWatchList=(movieObj)=>{
    let filterList=watchMovieList.filter((movie)=>{
     return movieObj.id !=movie.id
    })

    setWatchMovieList(filterList)
    localStorage.setItem('moviesApp',JSON.stringify(filterList))
    console.log(filterList)
  }

  const handleAddWatchList=(movieObj)=>{
    let newWatchList=[...watchMovieList,movieObj]
    localStorage.setItem('moviesApp',JSON.stringify(newWatchList))
    setWatchMovieList(newWatchList)
    console.log(newWatchList)
  }

  useEffect(()=>{
    let moviesForLocalStorage=localStorage.getItem('moviesApp')
    if(!moviesForLocalStorage){
      return
    }
    setWatchMovieList(JSON.parse(moviesForLocalStorage))
  },[])

  return (
    <>
      {/* <h1 className="text-3xl font-bold underline">hello world</h1> */}
      <BrowserRouter>

      <Navbar/>
      <Routes>

        <Route path='/' element={<><Banner/><Movies watchMovieList={watchMovieList} handleAddWatchList={handleAddWatchList} handleRemoveFromWatchList={handleRemoveFromWatchList}/></>}/>
        <Route path='/watchlist' element={<WatchLists watchMovieList={watchMovieList} setWatchMovieList={setWatchMovieList} handleRemoveFromWatchList={handleRemoveFromWatchList} />} />
      
      </Routes>

      

      </BrowserRouter>
     
    </>
  )
}

export default App
