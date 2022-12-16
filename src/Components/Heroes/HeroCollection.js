import React, { useState } from 'react';
import HeroCard from './HeroCard'
import Search from './Search'
import { Card } from 'semantic-ui-react'

function HeroCollection({ heroes, onDeleteHero, onUpdateHero }) {
    const [userText, setUserText] = useState("")

    const filteredHeroes = heroes.filter((hero) => hero.name.toLowerCase().includes(userText.toLowerCase()))

    return (
        <div>
            <Search userText={userText} setUserText={setUserText} />

            <Card.Group itemsPerRow={3}>
                {filteredHeroes.map((hero) =>
                    <HeroCard
                        key={hero.id}
                        hero={hero}
                        onDeleteHero={onDeleteHero}
                        onUpdatHero={onUpdateHero}
                    />)}
            </Card.Group>
        </div>
    )
}

export default HeroCollection