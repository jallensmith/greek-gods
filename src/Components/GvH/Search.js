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
                    fluid label="God"
                    placeholder="God"
                    name="God"
                    value={godSearch}
                    onChange={handleChange}
                />
                {/* <Button>🔍</Button> */}
            </Form>
            {/* <Dropdown
                placeholder='Select a God'
                fluid
                selection
                // options={}
                // onChange={handleChange}
            /> */}
        </div>
    )
}

export default Search