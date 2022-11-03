import React from 'react'
// import { useParams, Link } from 'react-router-dom'

function Round() {
  // const { name } = useParams()
  // const target = props.continents[name]

  return (
    <div>
      <h2 className="title">Round 1</h2>
      <div className="flex-container">
        <div className="profile">
          <img
            className="competitor"
            src={'/images/alex-profile.jpg'}
            alt="img"
          />
          <button className="btn-hint">Hint</button>
          <button>
            <img src="/icons/heart2.png" alt="heart img" className="heart" />
          </button>
        </div>
        <img src={'/icons/vs.png'} alt="vs img" className="vs" />
        <div className="profile">
          <img
            className="competitor"
            src={'/images/clem-profile.jpg'}
            alt="img"
          />
          <button className="btn-hint">Hint</button>
          <button>
            <img src="/icons/heart2.png" alt="heart img" className="heart" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Round
