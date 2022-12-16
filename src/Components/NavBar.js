import React  from "react"
import { NavLink } from "react-router-dom"

function NavBar(){
    return(
        <div>
            <h2 id="Title" className="text-center"> άρχοντες της Αποκάλυψης </h2>
            <nav className="navbar navbar-inverse">
                <NavLink exact to="/home">
                    Home
                </NavLink>
                <br></br>
                <br></br>
                <NavLink to="/collection/gods">
                    Fear the Gods
                </NavLink>
                <br></br>
                <br></br>
                <NavLink to="/collection/heroes">
                    See the Heroes
                </NavLink>
                <br></br>
                <br></br>
                <NavLink to="/collection/versus">
                    Gods vs Heroes - FIGHT!
                </NavLink>
                <br></br>
                <br></br>
                <NavLink to="/collection/myths/:id">
                    Read A Myth!
                </NavLink>
            </nav>
        </div>
    )
}

export default NavBar