import React from 'react'

function Description(props)

 {  console.log(props)
     const Movies= props.movies.find(movies=> movies.id=== props.match.params.id  )
    // console.log(Movies)
    
    return (
        <div>
           <p>{Movies.description}</p>
           <p>{Movies.trailer}</p>
           <button onClick={()=> props.history.goBack()}   >go back</button>
            <button  onClick={()=>props.history.push("/")}  >home</button>
        </div>
    )
}

export default Description
