import React from 'react'
import { Card } from "semantic-ui-react"
import GodCard from "./GodCard"

function Collection({ godInfo }) {
   
    return(
        <Card.Group>
            <h1>The Gods of Yore</h1>
            <div class="d-inline-flex p-2 bd-highlight">
            <div class="row row-cols-4">
            <GodCard />
            {godInfo}
            </div>
            </div>
        </Card.Group>
    )
}

export default Collection

// return an organized collection of god cards 
// sort through the collection through a dropdown list