// your notes here!
console.log("hello world!");
console.log("these are the notes for section 5");

var number


console.log("------------ while 1")
number = 0;

while (number <= 10) {
  console.log("the number is " + number);
  number = number + 1;
}

console.log("------------ while 2")
number = 0;

while (number <= 10) {

  if (number % 2 === 0 ) {
    console.log("the number " + number + " is even");
  } else {
    console.log("the number " + number + " is odd")
  }

  number = number + 1;
}

console.log("------------ for 1")

for ( number = 0; number <= 10; number = number + 1) {

  if (number % 2 === 0 ) {
    console.log("the number " + number + " is even");
  } else {
    console.log("the number " + number + " is odd")
  }

}


console.log("------------ for 100 positive integers")

for (number = 1; number <= 100; number = number + 1) {
  console.log("number is " + number);
}


console.log("------------ multipliers by 3 smaller than 100 (1)")

// number = 1; since number = 0 will cause infinity loop
for (number = 1; number <= 100; number = number * 3) {
  console.log("number is " + number);
}

console.log("------------ multipliers by 3 smaller than 100 (2)")
for (number = 0; number <= 100; number = number + 3) {
  console.log("number is " + number);
}


console.log("------------ multipliers by 3 smaller than 100 (3)")
for (number = 0; number <= 100; number = number + 1) {

  if (number % 3 === 0) {
    console.log("number is " + number);
  }
}

////////////////////////////////////////////////

var SumFirstNumbers = function(number) {

    var n;
    var sum = 0;

    for (n = 1; n <= number; n = n + 1) {
      sum = sum + n;
    }

    return sum;
}


var LargestDivisor = function(number) {
  var divisor;
  var n;
// n < number should be strictly less, because n <= number will give us the number itself as divisor
  for (n = 1; n < number; n = n + 1) {
    if (number % n === 0) {
      divisor = n;
    }
  }

  return divisor;
}

////////////////////////////////////////////////

var greeting = "hello world!";
console.log(greeting);

var index

for (index = 0; index < greeting.length; index = index + 1) {
  console.log(greeting.charAt(index));
}
// ^ will print out each letter in a raw

var removeVowels = function (string) {

  if (typeof string !== "string") {
    throw "Only strings allowed!";
  }

  var result = '';
  var index;

  for (index = 0; index < string.length; index = index + 1) {

    letter = string.charAt(index);
    letterLower = letter.toLowerCase();

    if (letterLower !== 'a' &&
        letterLower !== 'e' &&
        letterLower !== 'i' &&
        letterLower !== 'o' &&
        letterLower !== 'u') {

      result = result + letter;
    }
  }

  return result;

}

////////////////////////////////////////////////

var FirstLowerCaseVowel = function (string) {

  if (typeof string !== "string") {
    throw "Input should be the string!"
  }

  var result = '';
  var index;

  for (index = 0; index < string.length && result === ''; index = index + 1) {    // !!! && result === ''
//  for (index = 0; index < string.length; index = index + 1) {                   // 2nd approach

    var letter = string.charAt(index);

    if (letter === 'a' ||
        letter === 'e' ||
        letter === 'i' ||
        letter === 'o' ||
        letter === 'u') {

          result = letter;
//          break;                                                                // 2nd approach
//          return result;                                                        // 3rd approach
        };
  };

  return result;
}



var FirstLowerCaseLetter = function(string) {

  if (typeof string !== "string") {
    throw "Input should be the string";
  }

  var result = '';
  var index;

  for (index = 0; index < string.length && result === ''; index = index + 1) {

    letter = string.charAt(index);

    if ("a" <= letter && letter <= "z") {
      result = letter;
    }
  }

  return result;
}

////////////////////////////////////////////////

var countDown = function(number) {

  if (typeof number !== "number") {
    throw "Only positive integers allowed!"
  }

  var n;
  for (n = number; n >= 0; n = n - 1 ) {
    console.log(n);
  }
}
