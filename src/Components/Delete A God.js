import React from 'react';
import GodCard from './GodCard';
import { Button, Container } from 'semantic-ui-react'
import Search from './Search'
import '/home/theallensmiths/Projects/greek-gods/src/index.css'; 

function DeleteGod({ gods, onDeleteGods }) {

    function handleDelete() {
        fetch(`http://localhost:3004/gods/${gods.name}`, {
            method: "DELETE"
        })
            .then((r) => r.json())
            .then((god) => onDeleteGods(god));
    }

    // separate fetch protocol to return preview
    // separate fetch to delete from API?
    // is above the correct notation to locate that god in the array?
    // searcheable through key or through name 
    // how could you pass down the information more dynamically
    // look at this versus useContext combine with Reducer

    return (
        <Container>
        <div title="delete-god">
            <h1 id='delete-title'>In Development</h1>
            <Search /> 
            <GodCard />
            <Button id='delete-button' onClick={handleDelete}> Banish from Mount Olympia</Button>
        </div>
        </Container>
    )
}

export default DeleteGod