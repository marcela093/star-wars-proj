export const paginationButtons = ({ ...data }) => {
  if (data.previous === null) {
    const previousButton = document.getElementById("previous-button");
    previousButton.classList.add("remove-button");
  } else {
    const previousButton = document.getElementById("previous-button");
    previousButton.classList.remove("remove-button");
  }
  if (data.next === null) {
    const nextButton = document.getElementById("next-button");
    nextButton.classList.add("remove-button");
  } else {
    const nextButton = document.getElementById("next-button");
    nextButton.classList.remove("remove-button");
  }
};
