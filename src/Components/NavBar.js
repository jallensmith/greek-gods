import React from "react"
import { NavLink } from "react-router-dom"
import '/home/theallensmiths/Projects/greek-gods/src/index.css'; 

function NavBar() {
    
    return (
        <div>
        <h2 id="Title" className="text-center"> άρχοντες της Αποκάλυψης </h2>
        <nav className="navbar navbar-inverse">
            <NavLink to="/home">
                Home
            </NavLink>
            <NavLink to="/collection">
                Collection of Gods
            </NavLink>
            <NavLink to="/heroes-collection">
                See the Heroes
            </NavLink>
            <NavLink to="/add-god">
                Add A God!
            </NavLink>
            <NavLink to="/delete-god">
                Banish a God!
            </NavLink>
        </nav>
        </div>
    )
}

export default NavBar



