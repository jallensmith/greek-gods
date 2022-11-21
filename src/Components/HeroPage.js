import React, { useEffect, useState} from 'react';
import HeroCollection from './HeroCollection';
import '/home/theallensmiths/Projects/greek-gods/src/index.css';

function HeroPage() {
    const [heroes, setHeroes] = useState([])
    const [userInput, setUserInput] = useState('')

    useEffect(() => {
        fetch('http://localhost:3004/heroes')
        .then(resp => resp.json())
        .then(setHeroes)
    }, [])

    const filteredHeroes =  heroes.filter((hero) => hero.name.includes(userInput.toUpperCase()))

    return(
        <div>
            <HeroCollection heroes={heroes}/>
            <SearchHero />
        </div>
    )
}

export default HeroPage