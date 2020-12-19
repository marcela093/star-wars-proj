import React from 'react'

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

export const PaginationButtons = ({
  previousPage,
  nextPage,
  previousIcon,
  nextIcon,
}) => {
  return (
    <div className="buttons__container">
      <button id="previous-button" onClick={previousPage}>
        <img src={previousIcon} className="button-img" alt="left arrow" />
      </button>
      <button id="next-button" onClick={nextPage}>
        <img src={nextIcon} className="button-img" alt="right arrow" />
      </button>
    </div>
  )
}

// export default PaginationButtons
