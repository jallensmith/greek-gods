import React, { useState } from 'react';
import { Card } from 'semantic-ui-react'

function GodCard({ god, onDeleteGod, onUpdateGod }) {
  const { id, name, romanname, symbol, power, url, Mortals_Dislikes } = god
  const [dislike, setDislikes] = useState(Mortals_Dislikes)

  function handleUpdateClick() {
    const updatedDislikes = {
      dislike: setDislikes(dislike + 1),
    };

    fetch(`http://localhost:3050/gods/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedDislikes),
    })
      .then((r) => r.json())
      .then(onUpdateGod);
  }

  function handleDeleteClick() {
    fetch(`http://localhost:3050/gods/${id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => {
        onDeleteGod(god);
      });
  }

  return (
    <Card>
      <div id="Card" className="d-inline-flex p-1 bd-highlight container-fluid">
        <div class="card bg-light mb-3">
          <h2>Greek:{name}</h2>
          <h2>Roman:{romanname}</h2>
          <p>
            Symbol: {symbol}
            <br></br>
            Power: {power}
          </p>
          <img src={url} alt={name} className="img-thumbnail"></img>
          <h4>{dislike} of Mortals Dislike This God!</h4>
          <button onClick={handleUpdateClick}>Dislike this God</button>
          <br></br>
          <button onClick={handleDeleteClick}> Permanently Banish! </button>
        </div>
      </div>
    </Card>
  )
}

export default GodCard