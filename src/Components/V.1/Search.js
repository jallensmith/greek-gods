import React from 'react';
import { Form, Container } from 'semantic-ui-react'

function Search({ userText, setUserText }) {

    function handleOnChange(event) {
        setUserText(event.target.value)
    }

    return (
        <div>
            <Container>
                <Form>
                    <form id="form" className="form-group" action="action_page.php" onSubmit={(event) => { event.preventDefault() }}>
                        <input type="text"
                            placeholder="Sort by Greek Name"
                            name="search"
                            value={userText}
                            onChange={handleOnChange}
                        />
                    </form>
                </Form>
            </Container>
        </div>
    )
}

export default Search