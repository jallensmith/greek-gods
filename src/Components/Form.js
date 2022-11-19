import React, { useState } from "react";

function Form({ addGod }) {

    const [formData, setFormData] = useState({
        greek: "",
        roman: "",
        power: "",
        symbol: "",
        picture: ""
    })


    function handleSubmit(e) {
        e.preventDefault()
        addGod(formData)
    }

    // confirmation of submission
    return (
        <div className="card">
            <form className="form-inline" onSubmit={handleSubmit}>
                <label htmlFor="greek-name">Greek Name:</label>
                <input
                    type="greek-name"
                    className="form-control"
                    id="greek"
                    value={formData.greek}
                    onChange={(e) => setFormData({ ...formData, greek: e.target.value })}
                />

                <label htmlFor="roman-name">Roman Name:</label>
                <input
                    type="roman-name"
                    className="form-control"
                    id="roman"
                    value={formData.roman}
                    onChange={(e) => setFormData({ ...formData, roman: e.target.value })}
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
                    value={formData.picture}
                    onChange={(e) => setFormData({ ...formData, picture: e.target.value })}
                />
                <img
                    src={formData.picture || 'http://jstationx.com/wp-content/uploads/2018/03/God-of-War-PS4-female-characters-1024x577.jpg'}
                    alt={formData.greek && formData.roman}
                />
                <button type="submit">Add New God!</button>
            </form >
        </div >
    )
}

export default Form 