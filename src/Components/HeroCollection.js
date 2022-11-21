import React from 'react'
import HeroCard from './HeroCard'
import { Card } from 'semantic-ui-react'
import '/home/theallensmiths/Projects/greek-gods/src/index.css'; 

function HeroCollection({ heroes }) {
    return (
        <Card.Group>
            <div id="hero-title" >
            <br></br>
            {/* <SearchHeroes /> */}
            <br></br>
            <h1 className="text-success">Welcome the Heroes</h1>
                    <div className="row row-cols-3">
                        {heroes.map((hero) => <HeroCard
                            key={hero.name}
                            name={hero.name}
                            herotype={hero.herotype}
                            father={hero.father}
                            mother={hero.mother}
                            power={hero.power}
                            home={hero.home}
                            url={hero.url}
                        />)}
                    </div>
            </div>
        </Card.Group>
    )
}


export default HeroCollection