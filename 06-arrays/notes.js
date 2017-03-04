// your notes here!
console.log("hello world!");
console.log("arrays");

// START - Arrays - Overview & Basic Operations TRY OUTS :
// 1
var positiveEvenNumbers = [];
var limit = 10;
var n;

for (n = 0; n < limit; n = n + 1) {
  if (n % 2 === 0) {
    positiveEvenNumbers.push(n);
  };
};

for (n = 0; n < positiveEvenNumbers.length; n = n + 1) {
  console.log(positiveEvenNumbers[n]);
};

// 2
var firstPositiveIntegers = [];
var limit = 15;
var n;

for (n = 1; n <= limit; n = n + 1) {
  firstPositiveIntegers.push(n);
}

console.log(firstPositiveIntegers);
// END - Arrays - Overview & Basic Operations TRY OUTS:


// START - Arrays - More Examples

var printArrayValues = function(list) {
  // list is array synonim
  var index;

  for (index = 0; index < list.length; index = index + 1) {
    console.log("The element is " + list[index ]);
  }
}

////////////////////////////////////////////////

var sumArrayValues = function(array) {
  var index;
  var sum = 0;

  for (index = 0; index < array.length; index = index + 1) {
    sum = sum + array[index];
  }

  return sum;

};

////////////////////////////////////////////////
// Remove vowels from all array elements

var isVowel = function(letter) {

  letterL = letter.toLowerCase();

  trueFalse = letterL === "a" || letterL === "e" ||     // !!! we can use return instead of 'trueFalse =''
              letterL === "i" || letterL === "o" ||
              letterL === "u";

  return trueFalse;
}


var removeVowelsFromStr = function(string) {

  var result = '';
  var n;

  for (n = 0; n < string.length; n = n + 1) {

    letter = string.charAt(n);                          // !!! better to use 'letter = string[n];'

    if (!isVowel(letter)) {
          result = result + letter;
    };
  };

  return result;
}


var removeVowelsFromArray = function(array) {
  var index;
  var resultArray = [];

  for (index = 0; index < array.length; index = index + 1) {

    newElement = removeVowelsFromStr(array[index]);
    resultArray.push(newElement);

  }
  return resultArray;
}

////////////////////////////////////////////////
// Find smallest number in array

var smallestArrayNum = function(array) {

  var index;
  var min = array[0];

  for (index = 1; index < array.length; index = index + 1) {
    if (array[index] < min) { min = array[index] };               // ! min = Math.min(min, array[index]); will also works
  };

  return min;
}

// END - Arrays - More Examples
