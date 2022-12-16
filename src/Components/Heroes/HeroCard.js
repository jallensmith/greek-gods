import React, { useState } from 'react'
import { Card } from 'semantic-ui-react'

function HeroCard({ hero, onDeleteHero, onUpdateHero }) {
  const { id, name, herotype, home, power, url, like } = hero
  const [likes, setLikes] = useState(like)

  function handleUpdateClick() {
    const updatedLikes = {
      like: setLikes(likes + 1),
    };

    fetch(`http://localhost:3050/heroes/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedLikes),
    })
      .then((r) => r.json())
      .then(onUpdateHero);
  }

  function handleDeleteClick() {
    fetch(`http://localhost:3050/heroes/${id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => {
        onDeleteHero(hero);
      });
  }

  return (
    <Card>
      <div id="Card" className="d-inline-flex p-1 bd-highlight container-fluid">
        <div className="card bg-light mb-3">
          <h2>Greek:{name}</h2>
          <h2>Hero Type:{herotype}</h2>
          <p>
            Power: {power}
            <br></br>
            Home: {home}
          </p>
          <img src={url} alt={name} className="img-thumbnail"></img>
          <h4>{likes} of Mortals Love This Hero</h4>
          <button onClick={handleUpdateClick}>Show Love!</button>
          <br></br>
          <button onClick={handleDeleteClick}> Off the Team </button>
        </div>
      </div>
    </Card>
  )
}

export default HeroCard