import React from 'react'
import { Form, Dropdown } from "semantic-ui-react"

function Search({ heroSearch, setHeroSearch, heroes }) {
    // const [options, setOptions] = useState('')
    
    function handleChange(event) {
        setHeroSearch(event.target.value)
    }

    // const heroOptions = heroes.map((hero) => <li>{hero.name}</li>)
    
    // const Options = [
    //     {
    //       key: heroOptions,
    //       text: heroOptions,
    //       value: heroOptions,
    //     }
    //   ]

    return (
        <div>
            <Form>
                <Form.Input
                    fluid label="Search for the Hero"
                    placeholder="Type Here"
                    name="Hero"
                    value={heroSearch}
                    onChange={handleChange}
                />
            </Form>

            {/* <Dropdown
                placeholder='Select Friend'
                fluid
                selection
                multiple={true}
                // value={heroOptions}
                options={heroOptions}
            /> */}

        </div>
    )
}

export default Search