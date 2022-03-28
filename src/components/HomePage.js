import React,{useState,useEffect,useCallback} from "react";
import "./HomePage.css";
import MoviesList from "./movies/MoviesList"

const HomePage = () => {
  const[movies,setMovies]=useState([]);
  const[isLoading,setIsloading]= useState(false);
  const [error,setError]=useState(null);

  

 const fetchMovieshandler =useCallback(async()=> {
   setIsloading(true);
   setError(null);
   try{

    const response=await fetch('https://swapi.dev/api/films/')
    
    
      if(!response.ok){
        throw new Error('Something went wrong!')
      }
      const data=await response.json();

      const transformedMovies=data.results.map(moviedata =>{
        return{
          id :moviedata.episode_id,
          title: moviedata.title,
          openingText: moviedata.opening_crawl,
          releaseDate:moviedata.release_Date
        }
      });
      setMovies(transformedMovies);
      
    }catch(error){
     setError(error.message);
    }
    setIsloading(false);
  },[]);
  useEffect(()=>{
    fetchMovieshandler();
    },[fetchMovieshandler])

 let content=<p>Found no movies</p>
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