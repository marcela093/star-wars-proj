import React, { useEffect, useState } from 'react'
import { Skeleton } from '@material-ui/lab'
import { Link } from 'react-router-dom'

// components
import Nav from '../components/Nav'
import { getPaginationButtons, PaginationButtons } from '../shared/paginationButtons'

// styles
import '../styles/characters.css'

// images
import Luke from '../assets/luke.jpg'

function Characters() {
  const [characters, setCharacters] = useState([])
  const [loading, setLoading] = useState(false)
  const [pages, setPages] = useState(1)

  const getCharacters = async () => {
    setLoading(true)

    try {
      const request = await fetch(`https://swapi.dev/api/people/?page=${pages}`)
      const data = await request.json()
      setCharacters(data.results)
      getPaginationButtons(data)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getCharacters()
  }, [pages])

  const handleNextPage = () => {
    const nextPage = pages + 1
    setPages(nextPage)
  }

  const handlePreviousPage = () => {
    const previousPage = pages - 1
    setPages(previousPage)
  }

  const name = characters.find((character) => character.name)
  console.log(name)

  // const pathname = location.pathname;
  // console.log(pathname);

  return (
    <div>
      <Nav />
      <div className="character__container">
        {characters.map((character) => (
          <div className="character__card">
            <p>{character.name}</p>

            <Link to={`/character-detail/${character.name}`}>
              <button>Ver Mais</button>
            </Link>
          </div>
        ))}
      </div>
      <PaginationButtons previousPage={handlePreviousPage} nextPage={handleNextPage} />
    </div>
  )
}

export default Characters
