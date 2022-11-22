import React from 'react';
import '/home/theallensmiths/Projects/greek-gods/src/index.css'; 

function UpdateGods({ gods }) {
    
    function handleUpdate() {
        fetch(`http://localhost:3004/gods/${gods.name}`, {
            method: "PATCH"

        })
            // .then((r) => r.json())
            // .then((god) => onDeleteGods(god));
    }
    
    return (
        <div>
            <h1 id='update-title'> In Development</h1>
        </div>
    )
}

export default UpdateGods