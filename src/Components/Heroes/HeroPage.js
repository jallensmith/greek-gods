import React, { useState } from "react";
import { Button } from "semantic-ui-react";
import HeroCollection from "./HeroCollection";
import HeroForm from "./HeroForm";

function GodPage({ heroes, onAddHero, onDeleteHero, onUpdateHero }) {
    const [display, setDisplay] = useState(false)
    
    function handleClick(){
        setDisplay((display) => !display)
    }

    return(
        <div>
            <Button onClick={handleClick}> Add A Hero! </Button>
            {display ? <HeroForm onAddGod={onAddHero} /> : null }
            <HeroCollection heroes={heroes} onDeleteHero={onDeleteHero} onUpdateHero={onUpdateHero}/>
        </div>
    )
}

export default GodPage