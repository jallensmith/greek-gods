import React, { useEffect, useState } from 'react';
import { Switch, Route } from "react-router-dom";
import GodCard from './Components/GodCard.js';
import Form from './Components/Form';
import Collection from './Components/Collection';
import NavBar from './Components/NavBar';
import Home from './Components/Home'
import HeroPage from './Components/HeroPage.js';
import DeleteGod from './Components/Delete A God.js';

function App() {
  const greekAPI = 'http://localhost:3004/gods'
  const [gods, setGods] = useState([])
  const [userText, setUserText] = useState("")
  // const [page, setChangePage] = useState("/home")

  useEffect(() => {
    fetch(greekAPI)
      .then(response => response.json())
      .then(setGods)
  }, [])

  const filteredGods = gods.filter((god) => god.name.includes(userText))

  const godInfo = filteredGods.map((godArr) => {
    return (
      <GodCard
        key={godArr.name}
        name={godArr.name}
        romanname={godArr.romanname}
        power={godArr.power}
        symbol={godArr.symbol}
        url={godArr.url}
      />
    )
  })

  function addNewGods(newGods) {
    setGods(...gods, newGods)
  }

  function onDeleteGods(deletedGod) {
    const updatedGods = gods.filter((god) => god.name !== god.name);
    setGods(updatedGods);
}


  return (
    <div id="App">
      <NavBar />
      <Switch>
        <Route path="/home">
          <Home addNewGods={addNewGods} />
        </Route>
        <Route path="/collection">
          <Collection godInfo={godInfo} userText={userText} setUserText={setUserText} />
        </Route>
        <Route path="/heroes-collection">
          <HeroPage />
        </Route>
        <Route path="/add-god">
          <Form />
        </Route>
        <Route path="/delete-god">
          <DeleteGod gods={gods} onDeleteGods={onDeleteGods}/>
        </Route>
        <Route path="*">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;