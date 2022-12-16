import React, { useState } from 'react';
import { Form } from 'semantic-ui-react'
import '/home/theallensmiths/Projects/greek-gods/src/index.css';

function UpdateGods( { onUpdateGod }) {
  const [formData, setFormData] = useState({
    name: "",
    romanname: "",
    power: "",
    symbol: "",
    mother: "",
    father: "",
    url: "",
  })

  function handleUpdate() {
    fetch('http://localhost:3004/gods/', {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)

    })
    .then((r) => r.json())
    .then((god) => onUpdateGod(god));
  }

  return (
    <div>
      <div>
        <h3>Update the Gods!</h3>
        <Form
          onSubmit={() => {
            console.log("submitting form...");
          }}
          onChange={handleUpdate}
        >
          <Form.Group widths="equal">
            <Form.Input
              fluid label="Greek Name"
              placeholder="Greek"
              name="Greek"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value })}
            />
            <Form.Input
              fluid label="Roman Name"
              placeholder="Roman"
              name="Roman"
              value={formData.roman}
              onChange={(e) => setFormData({ ...formData, romanname: e.target.value })}
            />
            <Form.Input
              fluid label="Power"
              placeholder="Power"
              name="Power"
              value={formData.power}
              onChange={(e) => setFormData({ ...formData, power: e.target.value })}
            />
            <Form.Input
              fluid label="Symbol"
              placeholder="Symbol"
              name="Symbol"
              value={formData.symbol}
              onChange={(e) => setFormData({ ...formData, symbol: e.target.value })}
            />

            <Form.Input
              fluid
              label="Image URL"
              placeholder="URL"
              name="Url"
              value={formData.url}
              onChange={(e) => setFormData({ ...formData, url: e.target.value })}
            />

          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    </div>
  )
}

export default UpdateGods