import React from 'react';
import GodCard from './GodCard';
import '/home/theallensmiths/Projects/greek-gods/src/index.css'; 

function DeleteGod({ gods }) {
    function handleDelete() {
        fetch(`http://localhost:3004/gods/${gods.name}`, {
            method: "DELETE"
        })
            .then((r) => r.json())
            .then(() => console.log("deleted!"));
    }


    return (
        <div title="delete-god">
            <h1 id='delete-title'>In Development</h1>
            <GodCard />
            <button onClick={handleDelete}> Banish from Mount Olympia</button>
        </div>
    )
}

export default DeleteGod