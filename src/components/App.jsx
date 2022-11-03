import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Main from './Main'

// import continentData from '../../data/continents'

function App() {
  return (
    <>
      <div className="flex justify-center">
        <div className="flex-col">
          <h1>Star facilitators</h1>
          {/* This 'main' div is only for styling (so we can use flexbox) */}
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/round1" element={<Round />} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
