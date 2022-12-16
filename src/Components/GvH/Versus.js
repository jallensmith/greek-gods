import React, { useState } from 'react';
import { Card } from 'semantic-ui-react'
import Search from "./Search"
import SearchHero from "./SearchHero"
import GodCardSlim from './GodCard_Slim';
import HeroCardSlim from './HeroCardSlim';

function VersusPage({ gods, heroes }) {
    const [heroSearch, setHeroSearch] = useState('')
    const [godSearch, setGodSearch] = useState('')

    const filteredGods = gods.filter((god) => god.name.toLowerCase().includes(godSearch.toLowerCase()))
    const filteredHeroes = heroes.filter((hero) => hero.name.toLowerCase().includes(heroSearch.toLowerCase()))

    return (
        <div>
            <Card.Group>

                <Card id="card-god">
                    <Card.Header>
                        <Search
                            godSearch={godSearch}
                            setGodSearch={setGodSearch}
                        />
                    </Card.Header>
                    <Card.Description>
                    {filteredGods.slice(0, 1).map((god) =>
                        <GodCardSlim
                            key={god.id}
                            god={god}
                        />)}
                    </Card.Description>
                </Card>
                <Card id="card-hero">
                    <Card.Header>
                        <SearchHero
                            HeroSearch={heroSearch}
                            setHeroSearch={setHeroSearch}
                            heroes={heroes}
                        />
                    </Card.Header>
                    <Card.Description>
                        {filteredHeroes.slice(0, 1).map((hero) =>
                            <HeroCardSlim
                                key={hero.id}
                                hero={hero}
                            />)}
                    </Card.Description>
                </Card>
            </Card.Group>
        </div>
    )
}

export default VersusPage

//  SearchBox
//  return Cards
//  Compare Likes & Dislikes
//  Banish and Remove from Team Here?