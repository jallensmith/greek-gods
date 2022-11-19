import React from 'react'
import { Card } from "semantic-ui-react"

// KitchenSink

function GodCard({
    greek,
    roman,
    symbol,
    power,
    picture
    }) {

    return (
        <Card>
        <div class="d-inline-flex p-2 bd-highlight">
            <div className="p-3 border">
                <h2>Greek:{greek}</h2>
                <h2>Roman:{roman}</h2>
                <p>
                Symbol: {symbol}
                <br></br>
                Power: {power}
                </p>
                <img src={picture} alt={greek}></img>
            </div>
        </div>
        </Card>
    )
}

export default GodCard