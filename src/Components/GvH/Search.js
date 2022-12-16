import React from 'react'
import { Form } from "semantic-ui-react"

function Search({ godSearch, setGodSearch }) {
    function handleChange(event) {
        setGodSearch(event.target.value)
    }

    return (
        <div>
            <Form>
                <Form.Input
                    fluid label="Search for the God"
                    placeholder="Type Here"
                    name="God"
                    value={godSearch}
                    onChange={handleChange}
                />
            </Form>
        </div>
    )
}

export default Search