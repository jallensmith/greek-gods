import React, { useState } from "react";
import { Container } from "semantic-ui-react"

function Form({ addNewGods }) {

    const [formData, setFormData] = useState({
        id: 0,
        name: "",
        romanname: "",
        power: "",
        symbol: "",
        mother: "",
        father: "",
        url: "",
    })



    function handleSubmit(e) {
        e.preventDefault()

        fetch('http://localhost:3004/gods', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
            .then(resp => resp.json())
            .then(addNewGods(formData))
    }

    // confirmation of submission
    return (
        <div>
            <Container>
            <div>
                <form id="form" className="form-inline" onSubmit={handleSubmit}>

                    <label htmlFor="greek-name">Greek Name:</label>
                    <input
                        type="greek-name"
                        className="form-control"
                        id="greek"
                        value={formData.name}
                        onChange={(e) => setFormData({ name: e.target.value })}
                    />

                    <label htmlFor="roman-name">Roman Name:</label>
                    <input
                        type="roman-name"
                        className="form-control"
                        id="roman"
                        value={formData.roman}
                        onChange={(e) => setFormData({ ...formData, romanname: e.target.value })}
                    />

                    <label htmlFor="power">Power:</label>
                    <input
                        type="power"
                        className="form-control"
                        id="power"
                        value={formData.power}
                        onChange={(e) => setFormData({ ...formData, power: e.target.value })}
                    />


                    <label htmlFor="symbol">Symbol:</label>
                    <input
                        type="symbol"
                        className="form-control"
                        id="symbol"
                        value={formData.symbol}
                        onChange={(e) => setFormData({ ...formData, symbol: e.target.value })}
                    />

                    <label htmlFor="picture">Image:</label>
                    <input type="picture"
                        className="form-control"
                        id="picture"
                        value={formData.url}
                        onChange={(e) => setFormData({ ...formData, url: e.target.value })}
                    />
                    <button class="font-weight-bold" type="submit">Add New God!</button>
                    <img
                        class="rounded mx-auto d-block"
                        src={formData.url || 'http://jstationx.com/wp-content/uploads/2018/03/God-of-War-PS4-female-characters-1024x577.jpg'}
                        alt={formData.name && formData.romanname}
                    />
                </form >
            </div>
            </Container>
            <Container>
                <div id="preview-card" className="text-center">
                    <h2>Preview of New God</h2>
                    <div>
                        <h2>Greek:{formData.name}</h2>
                        <h2>Roman:{formData.romanname}</h2>
                        <p>
                            Symbol: {formData.symbol}
                            <br></br>
                            Power: {formData.power}
                        </p>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Form 