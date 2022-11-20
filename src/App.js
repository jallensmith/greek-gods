import React, { useEffect, useState } from 'react';
import GodCard from './Components/GodCard.js';
import Form from './Components/Form';
import Collection from './Components/Collection';
import Header from './Components/Header';
import Home from './Components/Home'

function App() {
  const greekAPI = 'http://localhost:3004/gods'
  const [gods, setGods] = useState([])
  const [userText, setUserText] = useState("")


  useEffect(() => {
    fetch(greekAPI)
      .then(response => response.json())
      .then(setGods)
  }, [])

  const filteredGods = gods.filter((god) => god.name.includes(userText))
  console.log(filteredGods)

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
  

  // function addGods(godObj) {
  //   setGods(...gods, godObj)
  // }


  return (
    <div id="App">
      <Header />
      <Home />
      <Collection godInfo={godInfo} userText={userText} setUserText={setUserText} />
      <Form />
      {/* addGod={addGods} */}
    </div>
  );
}

export default App;

// send newFormData up to send to GodCollection through Patch request

