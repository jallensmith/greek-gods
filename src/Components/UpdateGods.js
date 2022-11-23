import React, { useState } from 'react';
import { Button, Form, Input } from 'semantic-ui-react'
import '/home/theallensmiths/Projects/greek-gods/src/index.css';

function UpdateGods() {
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

    function handleUpdate() {
        fetch('http://localhost:3004/gods/', {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)

        })
        // .then((r) => r.json())
        // .then((god) => onDeleteGods(god));
    }

    // send down only form?

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
             <Form.Input fluid label="Greek Name" placeholder="greek-name" name="greek-name" />
             <Form.Input fluid label="Roman Name" placeholder="romanname" name="romanname" />
             <Form.Input fluid label="Power" placeholder="power" name="power" />
             <Form.Input fluid label="Symbol" placeholder="symbol" name="symbol" />

             <Form.Input
               fluid
               label= "Image URL"
               placeholder="url"
               name="Url"
             />
             
           </Form.Group>
           <Form.Button>Submit</Form.Button>
         </Form>
       </div>
       </div>
    )
}

export default UpdateGods