import React, { useEffect, useState } from 'react'
import GodCard from './Components/GodCard.js'
import Form from './Components/Form'
import Collection from './Components/Collection'
// import NavBar from './Components/NavBar.js'

function App() {
  const greekAPI = 'http://localhost:3004/gods'
  const [gods, setGods] = useState([])


  useEffect(() => {
    fetch(greekAPI)
      .then(response => response.json())
      .then(data => setGods(data))
  }, [])

  const godInfo = gods.map((godArr) => {
    return (
      <GodCard
        key={godArr.name}
        greek={godArr.name}
        roman={godArr.romanname}
        power={godArr.power}
        symbol={godArr.symbol}
        picture={godArr.url}
      />
    )
  })

  function addGods(godObj) {
    setGods(...gods, godObj)
  }

  return (
    <div id="App">
      <h1>Lords of Apokálypsis</h1>
      <Collection godInfo={godInfo}/>
      <Form addGod={addGods} />
      {/* {godInfo} */}
    </div>
  );
}

export default App;

// send newFormData up to send to GodCollection through Patch request
// all fetch request can live in App
