import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';

function Moviecard({movies}) {
    return (
        <div   className="car" >
         <div>  <h1>{movies.title}</h1>
         <Link to ={`/description/${movies.id}`} ><p>description </p></Link>
         </div> 
         <div>  <img src={movies.poster} alt=""/></div> 
          
            <ReactStars
     count={5}
         value={movies.rating}
       
       />
        </div>
    )
}

export default Moviecard
