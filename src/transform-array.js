/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
export default function transform(arr) {
  if (!(arr instanceof Array)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  let res1 = arr.map(function (e, i, array) {
    if (e === "--double-next") {
      return array[i + 1];
    } else if (e === "--double-prev") {
      if (array[i - 2] !== "--discard-next") {
        return array[i - 1];
      } else return "DEL";
    } else if (e === "--discard-next") {
      return "DEL";
    } else if (e === "--discard-prev") {
      return "DEL";
    } else if (array[i + 1] === "--discard-prev") {
      return "DEL";
    } else if (array[i - 1] === "--discard-next") {
      return "DEL";
    } else return e;
  });
  let res = res1.filter((e) => e !== "DEL").filter((e) => e !== undefined);
  return res;
}
