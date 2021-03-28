const mergeSort = `
const mergeSort = arr => {
    if (arr.length < 2) return arr; //like [] or [1]
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
    return merge(mergeSort(left), mergeSort(right));
    //merge(mergeSort([3]), mergeSort([2, 1]))
    //left = [3] ---> mergeSort([3]) ---> [3]
    //right = [2, 1] ---> mergeSort([2, 1]) ---> merge(mergeSort([2]) ---> [2], mergeSort([1]) --->[1]) --->merge([2], [1]) ---> [1] ----> [1, ...[2]] ---> [1, 2]
    //merge([3], [1, 2]) ---> [1] ---> [1, 2] ---> [1, 2, ...3] ---> [1, 2, 3]
  };
  
  const merge = (left, right) => {
    //[1], [2]
    const sortedAray = [];
    while (right.length && left.length) {
      if (left[0] > right[0]) {
        //1 > 2--- false
        sortedAray.push(right.shift());
      } else {
        //1 < 2 --- true
        sortedAray.push(left.shift());
        //[].push([1].shift()) ---> [1]
      }
    }
    //left = []
    //right = 2
    //sortedArray = [1]
    return [...sortedAray, ...left, ...right]; // [1, 2]
  };

`;
export default mergeSort;
