import React from 'react'
import { Card } from 'semantic-ui-react'

function HeroCard({ name, herotype, father, mother, power, home, url }) {
    return(
        <Card>
        <div id="hero-card" className="d-inline-flex p-4 bd-highlight container-fluid">
            <div class="card bg-light mb-3">
            <h2><em>{name}</em></h2>
            <h3>Herotype: {herotype}</h3>
            <h4>Mother: {mother} and Father: {father}</h4>
            <p>Power: {power} Home: {home}</p>
            <img className="img-thumbnail" src={url} alt={name}></img>
        </div>
        </div>
        </Card>
    )
}

export default HeroCard