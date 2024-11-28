// script.js

const sortButton = document.getElementById("sort");

const sortInputArray = (event) => {
  // prevent the behavior of the form as buttons associated with the form by default
  event.preventDefault();

  const inputValues = [
    ...document.getElementsByClassName("values-dropdown"),
  ].map((dropdown) => Number(dropdown.value));

  updateUI(inputValues);
};

const updateUI = (array = []) => {
  array.forEach((num, i) => {
    const outputValueNode = document.getElementById(`output-value-${i}`);
    outputValueNode.innerText = num;
  });
};

sortButton.addEventListener("click", sortInputArray);
