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
