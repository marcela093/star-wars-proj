import React from 'react'
import Next from '../assets/next.svg'
import Previous from '../assets/previous.svg'

export const paginationButtons = ({ ...data }) => {
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
    <div className="buttons__container">
      <button id="previous-button" onClick={previousPage}>
        <img src={Previous} className="button-img" alt="left arrow" />
      </button>
      <button id="next-button" onClick={nextPage}>
        <img src={Next} className="button-img" alt="right arrow" />
      </button>
    </div>
  )
}
