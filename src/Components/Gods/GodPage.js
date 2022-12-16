import React, { useState } from "react";
import { Button } from "semantic-ui-react";
import GodCollection from "./GodCollection";
import GodForm from "./GodForm";

function GodPage({ gods, onAddGod, onDeleteGod, onUpdateGod }) {
    const [display, setDisplay] = useState(false)
    
    function handleClick(){
        setDisplay((display) => !display)
    }

    return(
        <div>
            <Button onClick={handleClick}> Add A God! </Button>
            {display ? <GodForm onAddGod={onAddGod} /> : null }
            <GodCollection gods={gods} onDeleteGod={onDeleteGod} onUpdateGod={onUpdateGod}/>
        </div>
    )
}

export default GodPage

// Love from the Mortals
// Duplicate for the Heroes
// Organize on Page
// God vs Heros - Like Page
// IDEAS: Teams v Teams
// Banish from Mt. Olympus
// Show/Hide Form - Click on Button to Reveal Form 
// How would you update a something like this? - Search, Return Results, Return Edit Button, Edit Specifics?
// LOGIN Button
// Home Gods Heros Gods v Heroes
// Randomize a Myth?
// 