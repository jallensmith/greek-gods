import React from 'react'
import { Card, Container } from "semantic-ui-react"
import GodCard from "./GodCard"
import Search from './Search'

function Collection({ godInfo, userText, setUserText }) {

    return (
        <Container>
            <h1 className="text-center">The Gods of Yore</h1>
            <br></br>
            <Search userText={userText} setUserText={setUserText} />
            <br></br>
            <Card.Group >
                <div class="rounded mx-auto d-block">
                <div className="d-inline-flex p-1 bd-highlight"> 
                    <div className="row row-cols-4">
                        <GodCard />
                        { godInfo }
                    </div>
                </div>
                </div>
            </Card.Group>
        </Container>
    )
}

export default Collection
