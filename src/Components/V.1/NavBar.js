import React, { createContext } from "react"
import { NavLink } from "react-router-dom"
import { Button, Form, Container } from "semantic-ui-react"
import '/home/theallensmiths/Projects/greek-gods/src/index.css';

function NavBar({ user, setUser }) {
    const UserContext = createContext();

    function handleSubmit(event) {
        event.preventDefault()
        setUser(event.target[0].value)
        console.log(event.target[0].value)
    }


    function handleLogoutClick() {
        setUser("")
    }

    return (
        <div>
            <h2 id="Title" className="text-center"> άρχοντες της Αποκάλυψης </h2>

            <Container>
                <div>
                    {/* for using user again, think how you can use "Who would you like to banish, {user}?" */}
                    {user ? (
                        <div>
                            <Button onClick={handleLogoutClick}>

                                <UserContext.Provider>
                                    <header>
                                        Welcome {user}!
                                    </header>
                                </UserContext.Provider>

                            </Button>
                        </div>
                    ) : (
                        <div>
                            {/* Rewrite Form  */}
                            <Form
                                onSubmit={handleSubmit}
                            >
                                <Form.Input
                                    fluid label="Username"
                                    placeholder="Username"
                                    name="Username"
                                />
                                <Form.Button
                                >
                                    Login
                                </Form.Button>
                            </Form>
                        </div>
                    )}
                </div>
            </Container>

            <nav className="navbar navbar-inverse">
                <NavLink exact to="/home">
                    Home
                </NavLink>
                <NavLink to="/collection/gods">
                    Collection of Gods
                </NavLink>
                <NavLink to="/collection/heroes">
                    See the Heroes
                </NavLink>
                <NavLink to="/collection/add">
                    Add A God!
                </NavLink>
                <NavLink to="/collection/update">
                    Update A God!
                </NavLink>
                <NavLink to="/collection/delete">
                    Banish a God!
                </NavLink>
                <NavLink to="/collection/worksheet">
                    Worksheet
                </NavLink>
            </nav>
        </div>
    )
}

export default NavBar



