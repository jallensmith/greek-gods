import React from 'react';
import { Form, Container } from 'semantic-ui-react'

function SearchHero({userInput, setUserInput}) {
    function handleOnChange(event) {
        setUserInput(event.target.value)
    }

    return (
        <div>
            <Container>
            <Form>
            <form id="form" className="form-group" action="action_page.php" onSubmit={(event) => {event.preventDefault()}}>
                <input type="text" 
                placeholder="Sort by Name" 
                name="search" 
                value={userInput} 
                onChange={handleOnChange}
                />
            </form>
            </Form>
            </Container>
        </div>
    )
}

export default SearchHero