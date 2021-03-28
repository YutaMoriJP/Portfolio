const quickSort = `
const swap = (arr, a, b) => ([arr[a], arr[b]] = [arr[b], [arr[a]]]);

const partition = (array, leftIndex, rightIndex) => {
  const pivot = array[Math.floor((rightIndex - leftIndex) / 2)];
  while (leftIndex <= rightIndex) {
    //check if P > arr[L] - P is in the middle so all left sided values must be LESS than pivot
    while (pivot > array[leftIndex]) {
      //as long as this is true, we increment L in every iteration
      leftIndex++;
    }
    //check if P < arr[R] - P is in the middle and all right sided values must be GREATER than pivot
    while (pivot < array[rightIndex]) {
      //leftIndex was incremented as we moved to the right side but with rightIndex we move to the left side so we decrement
      rightIndex--;
    }
    if (rightIndex >= leftIndex) {
      swap(array, leftIndex, rightIndex);
      leftIndex++;
      rightIndex--; //incrementing & decrementing is crucial or else we create an infinite loop
    }
  }
  return leftIndex;
};
const quickSort = (arr, left, right) => {
  if (right > left) {
    const pivotIndex = partition(arr, left, right);
    quickSort(arr, left, pivotIndex - 1); //sorts left sided array
    quickSort(arr, pivotIndex, right); //sorts right sided array
  }
  //note this is not an else scope, so quicksort returns the array
  return arr;
};
`;

export default quickSort;
