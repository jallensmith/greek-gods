import React from "react"
import { NavLink } from "react-router-dom"
import '/home/theallensmiths/Projects/greek-gods/src/index.css'; 

function NavBar() {
    
    return (
        <div>
        <h2 id="Title" className="text-center"> άρχοντες της Αποκάλυψης </h2>
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



