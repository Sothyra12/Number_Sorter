// script.js

const sortButton = document.getElementById("sort");

const sortInputArray = (event) => {
  // prevent the behavior of the form as buttons associated with the form by default
  event.preventDefault();

  const inputValues = [
    ...document.getElementsByClassName("values-dropdown"),
  ].map((dropdown) => Number(dropdown.value));

  // const sortedValues = bubbleSort(inputValues);
  const sortedValues = selectionSort(inputValues);
  updateUI(sortedValues);
};

const updateUI = (array = []) => {
  array.forEach((num, i) => {
    const outputValueNode = document.getElementById(`output-value-${i}`);
    outputValueNode.innerText = num;
  });
};

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

// Selection sort works by repeatedly selecting the smallest element from the unsorted portion of the array and placing it at the beginning of the unsorted portion of the array
const selectionSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    // ensures if the current element is the smallest element, it will be swapped with itself and not be moved
    const minIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      console.log(array, array[j], array[minIndex]);
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }

    const temp = array[i];
    array[i] = array[minIndex];
    array[minIndex] = temp;
  }
};

sortButton.addEventListener("click", sortInputArray);
