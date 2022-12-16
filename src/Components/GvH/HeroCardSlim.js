import React from 'react'
import { Container } from 'semantic-ui-react'

function HeroCardSlim({ hero }) {
    const { name, herotype, home, power, url, like } = hero

    return (
        <Container>
            <div id="Card" className="d-inline-flex p-1 bd-highlight container-fluid">
                <div class="card bg-light mb-3">
                    <h2>Greek:{name}</h2>
                    <h2>Hero Type:{herotype}</h2>
                    <p>
                        Power: {power}
                        <br></br>
                        Home: {home}
                    </p>
                    <h4> {like} of Mortals Love This Hero</h4>
                    <img src={url} alt={name} className="img-thumbnail"></img>
                </div>
            </div>
        </Container>
    )
}

export default HeroCardSlim