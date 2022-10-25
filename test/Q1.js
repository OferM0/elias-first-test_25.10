function isPalindrom(array) {
  let boolean = true;
  let arr2 = array.split("");
  let letterArr = [];
  //console.log(arr2);

  for (let i = 0; i < arr2.length; i++) {
    if (arr2[i].match(/[a-z]/i)) {
      letterArr.push(arr2[i].toLowerCase());
    }
  }
  //console.log(letterArr);

  for (let i = 0; i < letterArr.length / 2; i++) {
    if (letterArr[i] !== letterArr[letterArr.length - i - 1]) {
      boolean = false;
    }
  }

  return boolean;
}

let s = "A man, a plan, a canal: Panama";
let t = "race a car";
let r = " ";
console.log(isPalindrom(s));
console.log(isPalindrom(t));
console.log(isPalindrom(r));
