import React, { useEffect, useState } from 'react'
import { Skeleton } from '@material-ui/lab'

// styles
import '../../styles/films.css'
import { MoviesCard, Wrapper, Div, MoviesImageDiv, MoviesInfoDiv } from './styles'

// images
import IV from '../../assets/IV.jpg'
import V from '../../assets/V.jpg'
import VI from '../../assets/VI.jpg'
import I from '../../assets/I.jpg'
import II from '../../assets/II.jpg'
import III from '../../assets/III.jpg'

// components
import Nav from '../../components/Nav'

const moviesImages = [
  { id: 4, img: IV },
  { id: 5, img: V },
  { id: 6, img: VI },
  { id: 1, img: I },
  { id: 2, img: II },
  { id: 3, img: III },
]

function Movies() {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)

  const loaderItems = Array.from(new Array(6))

  const getMovies = async () => {
    setLoading(true)
    try {
      const request = await fetch('https://swapi.dev/api/films/')
      const data = await request.json()
      setMovies(data.results)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getMovies()
  }, [])

  const joinImages = () => {
    movies.forEach((movie) => {
      moviesImages.forEach((image) => {
        if (movie.episode_id === image.id) {
          movie.image = image.img
          movie.image_id = image.id
        }
      })
    })
  }

  joinImages()

  return (
    <>
      <Nav />
      <Wrapper>
        <Div>
          {(loading ? loaderItems : movies).map((movie) => (
            <MoviesCard>
              {movie ? (
                <>
                  <MoviesImageDiv>
                    <img src={movie.image} style={{ height: '40vh' }} alt="star wars poster movie" />
                  </MoviesImageDiv>
                  <MoviesInfoDiv>
                    <h4 style={{ color: '#e6cc7f' }}>{movie.title}</h4>
                    <p>{`Release Date: ${movie.release_date}`}</p>
                    <p>{movie.opening_crawl}</p>
                  </MoviesInfoDiv>
                </>
              ) : (
                <>
                  <Skeleton
                    variant="rect"
                    color="#2d2d2d"
                    style={{
                      backgroundColor: '#2d2d2d',
                      height: '40vh',
                      width: '70%',
                      marginTop: '2vh',
                    }}
                  />
                  <Skeleton height={40} style={{ backgroundColor: '#2d2d2d', width: '90%' }} />
                  <Skeleton
                    variant="rect"
                    height={200}
                    style={{
                      backgroundColor: '#2d2d2d',
                      marginBottom: '2vh',
                      width: '90%',
                    }}
                  />
                </>
              )}
            </MoviesCard>
          ))}
        </Div>
      </Wrapper>
    </>
  )
}

export default Movies
