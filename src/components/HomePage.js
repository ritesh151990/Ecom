import React,{useState,useEffect,useCallback} from "react";
import "./HomePage.css";
import MoviesList from "./movies/MoviesList";
import AddMovie from "./movies/AddMovie"

const HomePage = () => {
  const[movies,setMovies]=useState([]);
  const[isLoading,setIsloading]= useState(false);
  const [error,setError]=useState(null);

  

 const fetchMovieshandler =useCallback(async()=> {
   setIsloading(true);
   setError(null);
   try{

    const response=await fetch('https://react-http-9484f-default-rtdb.firebaseio.com/movies.json')
    
    
      if(!response.ok){
        throw new Error('Something went wrong!')
      }
      const data=await response.json();
      
      const loadedMovies=[];

      for(const key in data){
        loadedMovies.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate
        })
      }

      
      setMovies(loadedMovies);
      
    }catch(error){
     setError(error.message);
    }
    setIsloading(false);
  },[]);


  useEffect(()=>{
    fetchMovieshandler();
    },[fetchMovieshandler])

    const addMovieHandler= async(movie)=> {
     const response=await fetch('https://react-http-9484f-default-rtdb.firebaseio.com/movies.json',{
        method:'POST',
        body: JSON.stringify(movie),
        headers: {
          'Content-Type':'application/json'
        }
      });
      const data= await response.json();
      console.log(data);
    }

 let content=<p>Found no movies.</p>

 if(movies.length>0){
 content=<MoviesList movies={movies} />
 }

 if(error){
 content=<p>{error}</p>
 }
 if(isLoading){
   content=<p>Loading...</p>
 }

  
  return (
        <React.Fragment>
          <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
        <section>
          <button onClick={fetchMovieshandler}>Fetch Movies</button>
        </section>
            <section>
              {content}
            </section>
        </React.Fragment>




    // <div className="homebody">
    //   <h3 className="hometitle">Tours</h3>
    //   <ul className="homeList">
    //     <li>
    //       JUL16 <span>DETROIT DTE ENERGY MUSIC THEATRE</span>
    //       <button>BUY TICKETS</button>
    //     </li>

    //     <li>
    //       JUL19 <span>TORONTO,ON BUDWESTER STAGE</span>
    //       <button>BUY TICKETS</button>
    //     </li>

    //     <li>
    //       JUL22 <span>BRISTOW, VA JIGGY LUBE LIVE</span>
    //       <button>BUY TICKETS</button>
    //     </li>

    //     <li>
    //       JUL29 <span>PHOENIX, AZ AK-CHIN PAVILION</span>
    //       <button>BUY TICKETS</button>
    //     </li>

    //     <li>
    //       AUG 2 <span>LAS VEGAS, NV T-MOBILE ARENA</span>
    //       <button>BUY TICKETS</button>
    //     </li>

    //     <li>
    //       AUG 7 <span>CONCORD, CA CONCORD PAVILION</span>
    //       <button>BUY TICKETS</button>
    //     </li>
    //   </ul>
    // </div>
  );
};
export default HomePage;