import React, { useState } from 'react';
import { Card } from 'semantic-ui-react'
import GodCard from './GodCard'
import Search from './Search'

function GodCollection({ gods, onDeleteGod, onUpdateGod }) {
    const [userText, setUserText] = useState("")

    const filteredGods = gods.filter((god) => god.name.toLowerCase().includes(userText.toLowerCase()))

    return (
        <div>
            <Search userText={userText} setUserText={setUserText} />

            <Card.Group itemsPerRow={3}>
                {filteredGods.map((god) =>
                    <GodCard
                        key={god.id}
                        god={god}
                        onDeleteGod={onDeleteGod}
                        onUpdatGod={onUpdateGod}
                    />)}
            </Card.Group>
        </div>
    )
}

export default GodCollection