import React from 'react'
import { Card, Container } from "semantic-ui-react"
import GodCard from "./GodCard"
import Search from './Search'

function Collection({ godInfo, userText, setUserText }) {

    return (
        <Container>
            <h1>The Gods of Yore</h1>
            <br></br>
            <Search userText={userText} setUserText={setUserText} />
            <Card.Group>
                <div className="d-inline-flex p-2 bd-highlight">
                    <div className="row row-cols-4">
                        <GodCard />
                        { godInfo }
                    </div>
                </div>
            </Card.Group>

        </Container>
    )
}

export default Collection

// Search through the list
// sort through the collection through a dropdown list