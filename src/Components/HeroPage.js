import React, { useEffect, useState} from 'react';
import HeroCollection from './HeroCollection';
import SearchHero from './SearchHero';
import '/home/theallensmiths/Projects/greek-gods/src/index.css';

function HeroPage() {
    const [heroes, setHeroes] = useState([])
    const [userInput, setUserInput] = useState('')

    useEffect(() => {
        fetch('http://localhost:3004/heroes')
        .then(resp => resp.json())
        .then(setHeroes)
    }, [])

    const filteredHeroes =  heroes.filter((hero) => hero.name.includes(userInput))

    // ternary operator

    return(
        <div>
            <h1 id="test"> Introducing the Heroes </h1>
            <SearchHero userInput={userInput} setUserInput={setUserInput}/>
            <HeroCollection heroes={filteredHeroes}/>
        </div>
    )
}

export default HeroPage