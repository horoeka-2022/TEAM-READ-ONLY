import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Round from './Round'

// import facilitatorData from '../../data/facilitators'
// import iconData from '../../server/public/icons'
// import soundData from '../../server/public/sounds'

function App() {
  return (
    <>
      {/* This 'main' div is only for styling (so we can use flexbox) */}
      <div className="main">
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/round" element={<Round />} />
        </Routes>
      </div>
    </>
  )
}

export default App
