
// You should implement your task here.

module.exports = function towelSort(arr) {
  if (arr === undefined) {
    return [];
  }
  var result = [];

  arr.map(function (el, ind) {
    if ((ind % 2) != 0 && ind != 0) {
      el.reverse();
    }
    for (let i = 0; i < el.length; i++) {
      result.push(el[i]);
    }

  });

  return result;
}
