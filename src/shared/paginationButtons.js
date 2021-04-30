import React from 'react'

// icons
import Next from '../assets/next.svg'
import Previous from '../assets/previous.svg'

// styles
import { Button } from './styles'
import '../styles/planets.css'

export const getPaginationButtons = ({ ...data }) => {
  if (data.previous === null) {
    const previousButton = document.getElementById('previous-button')
    previousButton.classList.add('remove-button')
  } else {
    const previousButton = document.getElementById('previous-button')
    previousButton.classList.remove('remove-button')
  }
  if (data.next === null) {
    const nextButton = document.getElementById('next-button')
    nextButton.classList.add('remove-button')
  } else {
    const nextButton = document.getElementById('next-button')
    nextButton.classList.remove('remove-button')
  }
}

export const PaginationButtons = ({ previousPage, nextPage }) => {
  return (
    <div style={{ marginTop: '1.25rem' }}>
      <Button id="previous-button" onClick={previousPage}>
        <img src={Previous} style={{ height: '8vh' }} alt="left arrow" />
      </Button>
      <Button id="next-button" onClick={nextPage}>
        <img src={Next} style={{ height: '8vh' }} alt="right arrow" />
      </Button>
    </div>
  )
}
