const recursion = `
//basic recursion that sums a number
const recursionSum = num => (num <= 1 ? num : num + recursionSum(num - 1));
//product of a number
const recursionProduct = num =>
  num <= 1 ? 1 : num * recursionProduct(num - 1);
//replicate Array.prototype.join with recursion
const recursionJoin = arr =>
  !arr.length ? "" : arr.shift() + recursionJoin(arr);
//get reversed string value of Array
const recursionReversed = arr =>
  !arr.length ? "" : arr.pop() + recursionReversed(arr);
`;

export default recursion;
