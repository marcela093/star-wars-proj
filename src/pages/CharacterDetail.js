import React, { useState, useEffect } from 'react'

// components
import Nav from '../components/Nav'

// styles
import '../styles/characterDetail.css'

// images
import Luke from '../assets/luke.jpg'

const CharacterDetail = () => {
  const [character, setCharacter] = useState()
  const [personId, setPersonId] = useState(1)

  useEffect(() => {
    fetch(`https://swapi.dev/api/people/${personId}`)
      .then((res) => res.json())
      .then((data) => {
        setCharacter(data)
      })
  }, [])
  // console.log(character)
  // const test = character.map((person) => person.name)
  // console.log(test)
  // console.log(character)

  return (
    <div>
      <Nav />
      <div className="character-detail__container">
        <div className="character-detail__card">
          <p>{character.name}</p>
          <p>{character.birth_year}</p>
          <p>{character.gender}</p>
          <p>{character.eye_color}</p>
          <p>{character.height}</p>
        </div>
      </div>
    </div>
  )
}

export default CharacterDetail
