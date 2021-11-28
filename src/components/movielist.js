import React from "react";
// import ReactStars from "react-rating-stars-component";
// import { Link } from "react-router-dom";
import Moviecard from "./moviecard";

const MovieList = ({ ratingChanged, movies, searchtTerm,rating }) => {
  return (
    <div   className='box' >
    
      {movies
        .filter((movies) =>
          movies.title.toLowerCase().includes(searchtTerm.toLowerCase().trim()) && movies.rating>=rating
        )
       .map(movies=><Moviecard movies= {movies} key={movies.id} />)      }
       </div>
   )
}
        //  (movie) => (
//           <div className="image-container d-flex justify-content-start m-3">
//             <img src={movie.poster} alt="movie"></img>
//             <p>
//             <p className="title">{movie.title}</p>
            
// 			<ReactStars
//         count={5}
//         value={movie.rating}
       
//       />
//       <Link to ={`/description/${movies.id}`} > <p  >description </p> </Link>
      
       
//        </p>
//        <video src={movie.trailer} />
//           </div>
//         ))}
       
//     </div>
//   );
// };

export default MovieList;
