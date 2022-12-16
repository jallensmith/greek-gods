import React, { useState } from 'react';
import { Container } from 'semantic-ui-react'
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
                <Container>
                    
                        <Search
                            godSearch={godSearch}
                            setGodSearch={setGodSearch} 
                            
                            />

                        {filteredGods.slice(0, 1).map((god) =>
                            <GodCardSlim
                                key={god.id}
                                god={god}
                            />)}
                    
                </Container>
                <Container>
                    
                        <SearchHero
                            HeroSearch={heroSearch}
                            setHeroSearch={setHeroSearch} 
                            heroes={heroes}
                            />

                        {filteredHeroes.slice(0, 1).map((hero) =>
                            <HeroCardSlim
                                key={hero.id}
                                hero={hero}
                            />)}
                    
                </Container>
        </div>
    )
}

export default VersusPage

//  SearchBox
//  return Cards
//  Compare Likes & Dislikes
//  Banish and Remove from Team Here?