import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Round from './Round'
import Home from './Home'
import Winner from './Winner'

import data from '../../data/facilitators'

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
  const allFacilitators = [
    facilitators[0],
    facilitators[1],
    facilitators[2],
    facilitators[3],
  ]

  // console.log(round1Contestants, round2Contestants)

  return (
    <>
      {/* This 'main' div is only for styling (so we can use flexbox) */}
      <div>
        <Routes>
          <Route path="/" element={<Home data={allFacilitators} />} />
          <Route
            path="/round"
            element={
              <Round round1={round1Contestants} round2={round2Contestants} />
            }
          />
          <Route path="/winner" element={<Winner data={allFacilitators} />} />
        </Routes>
      </div>
    </>
  )
}

export default App
