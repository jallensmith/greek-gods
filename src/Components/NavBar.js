import React, { createContext, useContext } from "react"
import { NavLink } from "react-router-dom"
import { Button, Form, Container } from "semantic-ui-react"
import '/home/theallensmiths/Projects/greek-gods/src/index.css';

function NavBar({ user, setUser }) {
    const UserContext = createContext();
    
    function handleSubmit(event) {
        event.preventDefault()
        setUser(event.target.value)
        console.log(user)
    }

    // function handleLoginClick() {
    //     setUser(user)
    // }

    function handleLogoutClick() {
        setUser("")
    }

    return (
        <div>
            <h2 id="Title" className="text-center"> άρχοντες της Αποκάλυψης </h2>

            <Container>
                <div>
                    
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
                            <Form>
                                <Form.Input 
                                onChange={handleSubmit} 
                                fluid label="Username" 
                                placeholder="Username" 
                                name="Username" 
                                />
                                <Form.Button 
                                // onClick={handleLoginClick}
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
            </nav>
        </div>
    )
}

export default NavBar



