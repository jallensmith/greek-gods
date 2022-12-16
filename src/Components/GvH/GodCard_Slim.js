import React from 'react'
import { Container } from 'semantic-ui-react'

function GodCardSlim({ god }) {

    const { name, romanname, symbol, power, url, Mortals_Dislikes } = god

    return (
        <Container>
            <div id="God-Card" className="d-inline-flex p-1 bd-highlight container-fluid">
                <div class="card bg-light mb-3">
                    <h2>Greek:{name}</h2>
                    <h2>Roman:{romanname}</h2>
                    <p>
                        Symbol: {symbol}
                        <br></br>
                        Power: {power}
                    </p>
                    <h4>{Mortals_Dislikes} of Mortals Dislike This God!</h4>
                    <img src={url} alt={name} className="img-thumbnail"></img>
                </div>
            </div>
        </Container>
    )
}

export default GodCardSlim