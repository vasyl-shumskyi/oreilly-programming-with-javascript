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
