import React from 'react'

function Description(props)

 {  console.log(props)
     const Movies= props.movies.find(movies=> movies.id== props.match.params.id  )
    // console.log(Movies)
    
    return (
        <div>
            <div>
             <img src={Movies.poster} alt=""/>
             <p>{Movies.title} </p>
             </div>
           <p>{Movies.description}</p>
          <iframe src={ Movies.trailer} title={Movies.title}/>
           <button onClick={()=> props.history.goBack()}   >go back</button>
            <button  onClick={()=>props.history.push("/")}  >home</button>
        </div>
    )
}

export default Description
