import React, { useEffect, useState } from 'react'
import { Skeleton } from '@material-ui/lab'
import Nav from '../components/Nav'
import '../styles/planets.css'
import Planet from '../assets/planet.svg'
import People from '../assets/people.svg'
import Climate from '../assets/climate.svg'
import Next from '../assets/next.svg'
import Previous from '../assets/previous.svg'
// import NavigationButton from "../components/Button";
import { paginationButtons } from '../shared/paginationButtons'

const Planets = () => {
  const [planets, setPlanets] = useState([])
  const [pages, setPages] = useState(1)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch(`https://swapi.dev/api/planets/?page=${pages}`)
      .then((res) => res.json())
      .then(
        (data) => {
          setPlanets(data.results)
          paginationButtons(data)
          setLoading(false)
        },
        (error) => {
          return console.log(error)
        }
      )
  }, [pages])

  const handleNextPage = () => {
    const nextPage = pages + 1
    setPages(nextPage)
  }

  const handlePreviousPage = () => {
    const previousPage = pages - 1
    setPages(previousPage)
  }

  return (
    <>
      <Nav />
      <div className="planets__container">
        <table className="table">
          <thead>
            <tr className="table__tr">
              <th>
                <div className="table__title">
                  <img
                    src={Planet}
                    className="icon"
                    alt="drawing of a planet"
                  />
                  <p>Planets</p>
                </div>
              </th>

              <th>
                <div className="table__title">
                  <img
                    src={Climate}
                    className="icon"
                    alt="drawing of a thermometer"
                  />
                  <p>Climate</p>
                </div>
              </th>

              <th>
                <div className="table__title">
                  <img
                    src={People}
                    className="icon"
                    alt="drawing of two people"
                  />
                  <p>Population</p>
                </div>
              </th>
            </tr>
          </thead>
          {(loading ? Array.from(new Array(1)) : planets).map((planet) => (
            <tr className="table__td">
              {planet ? (
                <td>{planet.name}</td>
              ) : (
                <td>
                  <Skeleton
                    style={{ backgroundColor: '#2d2d2d', width: '100%' }}
                    variant="rect"
                    height={400}
                  />
                </td>
              )}
              {planet ? (
                <td>{planet.climate}</td>
              ) : (
                <td>
                  <Skeleton
                    style={{ backgroundColor: '#2d2d2d', width: '100%' }}
                    variant="rect"
                    height={400}
                  />
                </td>
              )}
              {planet ? (
                <td>{planet.population}</td>
              ) : (
                <td>
                  <Skeleton
                    style={{ backgroundColor: '#2d2d2d', width: '100%' }}
                    variant="rect"
                    height={400}
                  />
                </td>
              )}
            </tr>
          ))}
        </table>
        <div className="buttons__container">
          <button id="previous-button" onClick={handlePreviousPage}>
            <img src={Previous} className="button-img" alt="left arrow" />
          </button>
          <button id="next-button" onClick={handleNextPage}>
            <img src={Next} className="button-img" alt="right arrow" />
          </button>
        </div>
      </div>
    </>
  )
}

export default Planets
