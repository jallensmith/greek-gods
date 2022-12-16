import React, { useEffect } from 'react'
import { useParams } from "react-router-dom"
import { Container } from 'semantic-ui-react'

function MythsCard({ myths, randomize, setMyths }) {
    const { name, theme, description, place, gods, nongods, url } = randomize
    // console.log(randomize)
    
    const { id } = useParams()
    console.log(id)

    useEffect(() => {
        fetch(`fetch('http://localhost:3050/myths/${id}`)
            .then(r => r.json())
            .then(setMyths)
    }, [id])
    
    return (
        <Container id="myth-container">
            <div>
                <h2><em>{name}</em></h2>
                <h3>{theme}</h3>
                <p>{description} {place}</p>
                <h4>{gods}</h4>
                <h4>{nongods}</h4>
                <img src={url} alt={description}></img>
            </div>
        </Container>
    )
}

export default MythsCard