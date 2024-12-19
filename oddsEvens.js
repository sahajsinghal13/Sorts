const numbers = [3, 6, 9, 2, 5, 8, 0];

const sortOddEvens = function (list) {
  return list.sort(function (a, b) {
    return (a % 2) === (b % 2) ? a - b : (a % 2) - (b % 2);
  });
}

console.log(sortOddEvens(numbers));