import React from 'react'
import { Card } from "semantic-ui-react"
import GodCard from "./GodCard"
import Search from './Search'
import '/home/theallensmiths/Projects/greek-gods/src/index.css';

function Collection({ godInfo, userText, setUserText }) {

    return (
        <div>
            <h1 className="text-center">The Gods of Yore</h1>
            <br></br>
            <Search userText={userText} setUserText={setUserText} />
            <br></br>
            <Card.Group >
                <div>
                    <div id="card-group">
                        <div className="row row-cols-4">
                            <GodCard />
                            {godInfo}
                        </div>
                    </div>
                </div>
            </Card.Group>
        </div>
    )
}

export default Collection
