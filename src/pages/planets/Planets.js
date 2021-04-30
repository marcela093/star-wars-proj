import React, { useEffect, useState } from 'react'
import { Skeleton } from '@material-ui/lab'

// components
import Nav from '../../components/Nav'
import { getPaginationButtons, PaginationButtons } from '../../shared/paginationButtons'

// styles
import { Wrapper, CustomTable, TableTitle, TableHeader, TableData } from './styles'

// icons
import Planet from '../../assets/planet.svg'
import People from '../../assets/people.svg'
import Climate from '../../assets/climate.svg'

const iconStyles = {
  height: '4vh',
  marginRight: '10px',
}

const skeletonStyle = {
  backgroundColor: '#2d2d2d',
  width: '100%',
}

function Planets() {
  const [loading, setLoading] = useState(false)
  const [planets, setPlanets] = useState([])
  const [pages, setPages] = useState(1)

  const loaderItems = Array.from(new Array(1))

  const getPlanets = async () => {
    setLoading(true)

    try {
      const request = await fetch(`https://swapi.dev/api/planets/?page=${pages}`)
      const data = await request.json()
      setPlanets(data.results)
      getPaginationButtons(data)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getPlanets()
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
      <Wrapper>
        <CustomTable>
          <thead>
            <tr>
              <TableHeader>
                <TableTitle>
                  <img src={Planet} style={iconStyles} alt="drawing of a planet" />
                  <p>Planets</p>
                </TableTitle>
              </TableHeader>

              <TableHeader>
                <TableTitle>
                  <img src={Climate} style={iconStyles} alt="drawing of a thermometer" />
                  <p>Climate</p>
                </TableTitle>
              </TableHeader>

              <TableHeader>
                <TableTitle>
                  <img src={People} style={iconStyles} alt="drawing of two people" />
                  <p>Population</p>
                </TableTitle>
              </TableHeader>
            </tr>
          </thead>
          {(loading ? loaderItems : planets).map((planet) => (
            <tr className="table__td">
              {planet ? (
                <>
                  <TableData>{planet.name}</TableData>
                  <TableData>{planet.climate}</TableData>
                  <TableData>{planet.population}</TableData>
                </>
              ) : (
                <>
                  <TableData>
                    <Skeleton style={skeletonStyle} variant="rect" height={400} />
                  </TableData>
                  <TableData>
                    <Skeleton style={skeletonStyle} variant="rect" height={400} />
                  </TableData>
                  <TableData>
                    <Skeleton style={skeletonStyle} variant="rect" height={400} />
                  </TableData>
                </>
              )}
            </tr>
          ))}
        </CustomTable>
        <PaginationButtons nextPage={handleNextPage} previousPage={handlePreviousPage} />
      </Wrapper>
    </>
  )
}

export default Planets
