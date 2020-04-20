import React from 'react';


function DisplayEmployee({simpson}){
   return(
    <div className="Quote">
        <p>{simpson.quote}</p>
            <img 
                src = {simpson.image}
                alt= {simpson.character}>
           </img>
           <h1>{simpson.character}</h1>
       </div>
   )
}

export default DisplayEmployee;