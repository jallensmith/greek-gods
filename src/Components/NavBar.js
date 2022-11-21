import React from "react"
import { NavLink } from "react-router-dom"

function NavBar() {
    
    return (
        <div>
        <h2 id="Title" className="text-center"> άρχοντες της Αποκάλυψης </h2>
        <nav className="navbar navbar-inverse">
            <NavLink to="/home">
                Home
            </NavLink>
            <NavLink to="/collection">
                Collection
            </NavLink>
            <NavLink to="/add-god">
                Add A God!
            </NavLink>
        </nav>
        </div>
    )
}

export default NavBar



