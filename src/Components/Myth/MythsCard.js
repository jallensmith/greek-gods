import React from 'react'

function MythsCard({ myths, randomize }) {
    const {name, theme, description, place, gods, nongods, url} = randomize
    console.log(randomize)
    
    return(
       <div>
        <h2><em>{name}</em></h2>
        <h3>{theme}</h3>
        <p>{description} Location: {place}</p>
        <h4>{gods}</h4>
        <h4>{nongods}</h4>
        <img src={url} alt={description}></img>
       </div> 
    )
}

export default MythsCard