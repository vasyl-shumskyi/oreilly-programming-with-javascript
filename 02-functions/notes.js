// your notes here!
console.log("hello world!");
console.log("this is another statement");

// greet("Vasyl");
//=> "Hello, Vasyl!"
var greet = function (name) {
  greeting = 'Hello, ' + name + '!';
  return greeting;
}

var greetingForSemmy = greet("Semmy");
var greetingForGracie = greet("Gracie");

console.log(greetingForGracie);

var toCardString = function (rank, suit) {
  return rank + ' of ' + suit;
}

console.log(toCardString("queen", "hearts"));

var ace_of_spades = toCardString("ace", "spades");
console.log(ace_of_spades);

var aceOfSpades = toCardString("ace", "spades");
console.log(aceOfSpades);


// makeHtmlParagraph("hello world")
// => <p>hello world</p>
var makeHtmlParagraph = function (content) {
  var openParagraphTag = '<p>'
  var closeParagraphTag = '</p>'
  var htmlParagraph = openParagraphTag + content + closeParagraphTag
  return htmlParagraph
}

// variables are function scoped!
// console.log(openParagraphTag);
// => notes.js:39 Uncaught ReferenceError: openParagraphTag is not defined at notes.js:39

// we can  reassign function scoped variable without harm,
// but that's create tricky programs, which are hard to trace!
var openParagraphTag = 'THIS IS NOT A TAG!';
console.log(openParagraphTag);
