import React from 'react';
import GodCard from './GodCard';

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
            <GodCard />
            <button onClick={handleDelete}> Banish from Mount Olympia</button>
        </div>
    )
}

export default DeleteGod