const bubbleSort = `
const swap = (arr, indexA, indexB) => {
    [arr[indexA], arr[indexB]] = [arr[indexB], arr[indexA]];
  };
  
  const bubbleSort = arr => {
    let notSorted = true;
    let innerLoopCount = 0;
    let outerLoopCount = 0;
    while (notSorted) {
      notSorted = false;
      outerLoopCount += 1;
      for (let i = 0; i < arr.length - 1; i++) {
        innerLoopCount += 1;
        if (arr[i] > arr[i + 1]) {
          console.log('swapping {arr[i]} with  {arr[i + 1]}');
          swap(arr, i, i + 1);
          notSorted = true;
        }
      }
    }
    console.log(
      'outer loop count  {outerLoopCount} inner loop count  {innerLoopCount}'
    );
    return arr;
  };
  
  
  `;

export default bubbleSort;
