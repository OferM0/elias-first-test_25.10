function finsSingleNumber(array) {
  for (let i = 0; i < array.length; i++) {
    if (array.indexOf(array[i]) === array.lastIndexOf(array[i])) {
      return array[i];
    }
  }
}

let numbers = [2, 2, 1];
let numbers2 = [4, 1, 2, 1, 2];
let numbers3 = [6];
console.log(finsSingleNumber(numbers));
console.log(finsSingleNumber(numbers2));
console.log(finsSingleNumber(numbers3));
