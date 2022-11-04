import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import { useParams, Link } from 'react-router-dom'

function Round(props) {
  let winner = ''
  const [round, setRound] = useState('Round 1')

  const [finalist, setFinalist] = useState([])

  const [currentImg1, setImg1] = useState(() => {
    console.log('this is happening')
    if (round == 'Round 1') {
      return props.round1[0].profileImage
    } else {
      return props.round2[0].profileImage
    }
  })
  const [currentImg2, setImg2] = useState(() => {
    if (round == 'Round 1') {
      return props.round1[1].profileImage
    } else {
      return props.round2[1].profileImage
    }
  })

  const [ind1, setIdx1] = useState(0)
  const [ind2, setIdx2] = useState(0)

  function clickEvent(round) {
    if (round == 'Round 1') {
      if (ind1 === 0) {
        setImg1(props.round1[0].celeb.maleImage)
        setIdx1(1)
      } else if (ind1 === 1) {
        setImg1(props.round1[0].celeb.femaleImage)
        setIdx1(2)
      } else if (ind1 === 2) {
        setImg1(props.round1[0].profileImage)
        setIdx1(0)
      }
    } else if (round == 'Round 2') {
      if (ind1 === 0) {
        setImg1(props.round2[0].celeb.maleImage)
        setIdx1(1)
      } else if (ind1 === 1) {
        setImg1(props.round2[0].celeb.femaleImage)
        setIdx1(2)
      } else if (ind1 === 2) {
        setImg1(props.round2[0].profileImage)
        setIdx1(0)
      }
    } else {
      if (ind1 === 0) {
        setImg1(finalist[0].celeb.maleImage)
        setIdx1(1)
      } else if (ind1 === 1) {
        setImg1(finalist[0].celeb.femaleImage)
        setIdx1(2)
      } else if (ind1 === 2) {
        setImg1(finalist[0].profileImage)
        setIdx1(0)
      }
    }
  }

  function clickEvent2(round) {
    if (round == 'Round 1') {
      if (ind2 === 0) {
        setImg2(props.round1[1].celeb.maleImage)
        setIdx2(1)
      } else if (ind2 === 1) {
        setImg2(props.round1[1].celeb.femaleImage)
        setIdx2(2)
      } else if (ind2 === 2) {
        setImg2(props.round1[1].profileImage)
        setIdx2(0)
      }
    } else if (round == 'Round 2') {
      if (ind2 === 0) {
        setImg2(props.round2[1].celeb.maleImage)
        setIdx2(1)
      } else if (ind2 === 1) {
        setImg2(props.round2[1].celeb.femaleImage)
        setIdx2(2)
      } else if (ind2 === 2) {
        setImg2(props.round2[1].profileImage)
        setIdx2(0)
      }
    } else {
      if (ind2 === 0) {
        setImg2(finalist[1].celeb.maleImage)
        setIdx2(1)
      } else if (ind2 === 1) {
        setImg2(finalist[1].celeb.femaleImage)
        setIdx2(2)
      } else if (ind2 === 2) {
        setImg2(finalist[1].profileImage)
        setIdx2(0)
      }
    }
  }

  function nextRound() {
    if (round == 'Round 1') {
      setRound('Round 2')
      setImg1(props.round2[0].profileImage)
      setImg2(props.round2[1].profileImage)
      setFinalist((prev) => {
        return [...prev, props.round1[0]]
      })
    } else if (round == 'Round 2') {
      setRound('Final Round')
      console.log(finalist)
      setImg1(finalist[0].profileImage)
      setImg2(props.round2[0].profileImage)
      setFinalist((prev) => {
        return [...prev, props.round2[0]]
      })
    } else {
      console.log('going to final page')
      winner = finalist[0]
    }
  }
  function nextRound2() {
    if (round == 'Round 1') {
      setRound('Round 2')
      setImg1(props.round2[0].profileImage)
      setImg2(props.round2[1].profileImage)
      setFinalist((prev) => {
        return [...prev, props.round1[1]]
      })
    } else if (round == 'Round 2') {
      setRound('Final Round')
      console.log(finalist)
      setImg1(finalist[0].profileImage)
      setImg2(props.round2[1].profileImage)
      setFinalist((prev) => {
        return [...prev, props.round2[1]]
      })
    } else {
      console.log('going to final page')
      winner = finalist[1]
    }
  }

  return (
    <div>
      <h2 className="title"> {round}</h2>
      <div className="flex-container">
        <div className="profile">
          <img className="competitor" src={currentImg1} alt="img" />
          <button
            onClick={() => {
              clickEvent(round)
            }}
            className="btn-hint"
          >
            Hint
          </button>
          <button onClick={nextRound}>
            <img src="/icons/heart2.png" alt="heart img" className="heart" />
          </button>
        </div>
        <Link to="/winner" data={winner}>
          <img src={'/icons/vs.png'} alt="vs img" className="vs" />
        </Link>
        <div className="profile">
          <img className="competitor" src={currentImg2} alt="img" />
          <button
            onClick={() => {
              clickEvent2(round)
            }}
            className="btn-hint"
          >
            Hint
          </button>
          <button onClick={nextRound2}>
            <img src="/icons/heart2.png" alt="heart img" className="heart" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Round
