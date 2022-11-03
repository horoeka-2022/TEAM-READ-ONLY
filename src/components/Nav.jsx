import React from 'react'
import { Link } from 'react-router-dom'
import continentData from '../../data/continents'

function Nav() {
  const continentsArray = Object.keys(continentData)
  return (
    <div>
      <h2>Nav</h2>
      <ul>
        {/* Build your continent list here */}
        {continentsArray.map((data) => {
          return (
            <li key={data}>
              <Link to={`/continents/${data}`}>{data}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Nav
