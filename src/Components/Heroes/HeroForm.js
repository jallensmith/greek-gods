import React, { useState } from 'react';
import { Form } from "semantic-ui-react";


function HeroForm({ onAddHero }) {
    const [formData, setFormData] = useState({
        name: '',
        herotype: '',
        power: '',
        home: '',
        url: ''
    })

    function handleChange(event) {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    }

    function handleSubmit() {

        const newGod = {
            name: formData.name,
            herotype: formData.herotype,
            power: formData.power,
            home: formData.home,
            url: formData.url
        };

        fetch("http://localhost:3050/heroes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newGod),
        })
            .then((r) => r.json())
            .then(onAddHero);
    }

    return (
        <div>
            <Form
                onSubmit={handleSubmit}
            >
                <Form.Group widths="equal">
                    <Form.Input
                        fluid label="Name"
                        placeholder="Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <Form.Input
                        fluid label="romanname"
                        placeholder="romanname"
                        name="romanname"
                        value={formData.romanname}
                        onChange={handleChange}
                    />
                    <Form.Input
                        fluid label="power"
                        placeholder="power"
                        name="power"
                        value={formData.power}
                        onChange={handleChange}
                    />
                    <Form.Input
                        fluid label="symbol"
                        placeholder="symbol"
                        name="symbol"
                        value={formData.symbol}
                        onChange={handleChange}
                    />
                    <Form.Input
                        fluid label="url"
                        placeholder="url"
                        name="url"
                        value={formData.url}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Button>Submit</Form.Button>
            </Form>
        </div>
    )
}

export default HeroForm