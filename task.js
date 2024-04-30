// Challenge 1
const compress = (str) => {
  let newStr = "";
  let count = 1;

  //check if str length is one or less
  if (str.length <= 1) {
    return str;
  }

  for (let i = 0; i < str.length; i++) {
    //check if current letter is same with the next letter
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      newStr += str[i] + count;
      count = 1;
    }
  }

  return newStr;
};
compress("bbcceeee");
compress("aaabbbcccaaa");
compress("a");


// Challenge 2
const printLargest = (arr) => {
  let num = "";
  for (let i = 0; i < arr.length; i++) {
    // comparing which other results in bigger number
    if (num + arr[i] > arr[i] + num) {
      num += arr[i];
    } else {
      num = arr[i] + num;
    }
  }
  return num;
};
printLargest(["3", "30", "34", "5", "9"]);
printLargest(["54", "546", "548", "60"]);
