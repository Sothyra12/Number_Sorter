// script.js

const sortButton = document.getElementById("sort");

const sortInputArray = (event) => {
  // prevent the behavior of the form as buttons associated with the form by default
  event.preventDefault();

  const inputValues = [
    ...document.getElementsByClassName("values-dropdown"),
  ].map((dropdown) => Number(dropdown.value));

  const sortedValues = bubbleSort(inputValues);
  updateUI(sortedValues);
};

const updateUI = (array = []) => {
  array.forEach((num, i) => {
    const outputValueNode = document.getElementById(`output-value-${i}`);
    outputValueNode.innerText = num;
  });
};

// Implement bubble sort algorithm
// bubble sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order
const bubbleSort = (array) => {
  // use for loop to iterate through the array for simplicity
  for (let i = 0; i < array.length; i++) {
    // use another for loop to iterate through the array except the last element
    for (let j = 0; j < array.length - 1; j++) {
      // compare the current element with the next element to check if they are in the wrong order and swap them meaning to bubble sort
      if (array[j] > array[j + 1]) {
        if (array[j] > array[j + 1]) {
          const temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;
        }
      }
    }
  }

  // return the sorted array after the outer loop is done
  return array;
};

sortButton.addEventListener("click", sortInputArray);
