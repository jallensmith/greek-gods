import React from 'react'
import { Card } from "semantic-ui-react"

// KitchenSink

function GodCard({
    name,
    romanname,
    symbol,
    power,
    url
    }) {

    return (
        <Card>
        <div id="card" className="d-inline-flex p-2 bd-highlight">
            <div className="p-3 border">
                <h2>Greek:{name}</h2>
                <h2>Roman:{romanname}</h2>
                <p>
                Symbol: {symbol}
                <br></br>
                Power: {power}
                </p>
                <img src={url} alt={name} className="img-thumbnail"></img>
            </div>
        </div>
        </Card>
    )
}

export default GodCard