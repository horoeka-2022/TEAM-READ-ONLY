import React from 'react'
// import { useParams, Link } from 'react-router-dom'

function Round(props) {
  // const { name } = useParams()
  // const target = props.continents[name]
  console.log(props)
  return (
    <div>
      <h2 className="title">Round 1</h2>
      <div className="flex-container">
        <div className="profile">
          <img
            className="competitor"
            src={props.data[0].profileImage}
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
            src={props.data[1].profileImage}
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
