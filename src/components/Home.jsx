import React from 'react'
import { Link } from 'react-router-dom'

function Home(props) {
  return (
    <div className="bg-img h-screen">
      <h2 className="title">Dear Our Favorite 2022</h2>
      <div className="flex-container">
        <div className="profile">
          <img
            className="competitor"
            src={props.data[0].profileImage}
            alt="img"
          />
        </div>

        <div className="profile">
          <img
            className="competitor"
            src={props.data[1].profileImage}
            alt="img"
          />
        </div>

        <div className="profile">
          <img
            className="competitor"
            src={props.data[2].profileImage}
            alt="img"
          />
        </div>

        <div className="profile">
          <img
            className="competitor"
            src={props.data[3].profileImage}
            alt="img"
          />
        </div>
      </div>
      <div className="flex-container">
        <button>
          <Link to="/round" className="btn-start">
            START{' '}
          </Link>
        </button>
      </div>
    </div>
  )
}

export default Home
