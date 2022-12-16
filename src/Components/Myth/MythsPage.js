import React, { useState } from 'react'
import { Button } from "semantic-ui-react"
import MythsCard from './MythsCard'

function MythsPage({ myths }) {
    const [index1, setIndex1] = useState(0)
    const [index2, setIndex2] = useState(1)
    const [randomize, setRandomize] = useState({})

    function handleClick() {
        setRandomize(myths[Math.floor(Math.random() * 23)])
        // console.log(randomize)
        // setIndex1((index1) => index1 + 1)
        // setIndex2((index2) => index2 + 1)
    }

    return (
        <div>
            {myths.slice(index1, index2).map((myth) => (
                <MythsCard
                    key={myth.name}
                    myths={myth}
                    randomize={randomize}
                />
            ))}
            <Button onClick={handleClick}>New Myth</Button>
        </div>
    )
}

export default MythsPage