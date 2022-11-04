import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import Round from './Round'

<<<<<<< HEAD
// import data from '../../data/facilitators'
// import iconData from '../../server/public/icons'
// import soundData from '../../server/public/sounds'
=======
import data from '../../data/facilitators'
>>>>>>> 36d59d6ab1bdb6464696dc610a0c404ec900f4a0

function App() {
  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex--

      // And swap it with the current element.
      ;[array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ]
    }

    return array
  }

  const facilitators = shuffle(data)
  const round1Contestants = [facilitators[0], facilitators[1]]
  const round2Contestants = [facilitators[2], facilitators[3]]

  // console.log(round1Contestants, round2Contestants)
  const [finalist, setFinalist] = useState([])
  return (
    <>
      {/* This 'main' div is only for styling (so we can use flexbox) */}
      <div className="main">
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/round" element={<Round data={round1Contestants} />} />
        </Routes>
      </div>
    </>
  )
}

export default App
