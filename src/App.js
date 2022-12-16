import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from './Components/NavBar'
import Home from './Components/Home'
import GodPage from './Components/Gods/GodPage'
import HeroPage from './Components/Heroes/HeroPage'
import VersusPage from "./Components/GvH/Versus";
import MythsPage from "./Components/Myth/MythsPage"

function App() {
  const [gods, setGods] = useState([])
  const [heroes, setHeroes] = useState([])
  const [myths, setMyths] = useState([])

  useEffect(() => {
    fetch('http://localhost:3050/gods')
      .then(resp => resp.json())
      .then(setGods)
  }, [])

  useEffect(() => {
    fetch('http://localhost:3050/heroes')
      .then(resp => resp.json())
      .then(setHeroes)
  }, [])

  useEffect(() => {
    fetch('http://localhost:3050/myths')
      .then(resp => resp.json())
      .then(setMyths)
  }, [])


  function addGod(newGod) {
    setGods([...gods, newGod])
  }

  function deleteGod(removedGod) {
    const updatedGod = gods.filter((god) => god.id !== removedGod.id)
    setGods(updatedGod)
  }

  function handleUpdatedGod(updateGod) {
    const updatedGods = gods.map((god) => god.id === updateGod.id ? updateGod : god)
    setGods(updatedGods)
  }

  function addHero(newHero) {
    setGods([...heroes, newHero])
  }

  function deleteHero(removedHero) {
    const updatedHeroes = heroes.filter((hero) => hero.id !== removedHero.id)
    setHeroes(updatedHeroes)
  }

  function handleUpdatedHero(updateHero) {
    const updatedHeroes = heroes.map((hero) => hero.id === updateHero.id ? updateHero : hero)
    setGods(updatedHeroes)
  }

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/collection/gods">
          <GodPage gods={gods} onAddGod={addGod} onDeleteGod={deleteGod} onUpdateGod={handleUpdatedGod} />
        </Route>
        <Route path="/collection/heroes">
          <HeroPage heroes={heroes} onAddHero={addHero} onDeleteHero={deleteHero} onUpdateHero={handleUpdatedHero} />
        </Route>
        <Route path="/collection/versus">
          <VersusPage gods={gods} heroes={heroes} />
        </Route>
        <Route path="/collection/myths">
          <MythsPage myths={myths} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;