// We'll consider a password's strength to be "strong" if it is at least 10
// characters long. If it's between 7 and 10 characters long, we'll consider it to
// have "medium" strength, and if it's less than 7 characters, we'll say it is a
// "weak" password. Write a function that accepts as input a potential password and
// returns either "weak", "medium" or "strong" depending on its length.
//
//     passwordStrength("hello");
//     //=> weak
//
//     passwordStrength("longerpassword");
//     //=> strong
//
//     passwordStrength("helloone");
//     //=> medium
var passwordStrength = function (password) {

  var result;
  var l = password.length;

  if      (l >= 10)           { result = "strong"; }
  else if (l >= 7 && l < 10)  { result = "medium"; }
  else                        { result = "weak"; }

  return result;
};


// A year is a leap year if it is divisible by 4, unless it is also divisible by
// 100 in which case it is not a leap year unless it is also divisible by
// 400. Phew. Got that? Good. Write a function that accepts a number and outputs
// true if the number is a leap year, false if not.
//
//      isLeapYear(1988);
//      //=> true
//
//      isLeapYear(2001);
//      //=> false
//
//      isLeapYear(1800);
//      //=> false
//
//      isLeapYear(2000);
//      //=> true
//
// It should also throw an error if the input is not a number.
//
//      isLeapYear("hello");
//      //=> THAT'S NOT A NUMBER!
var isLeapYear = function (year) {

  if (typeof year !== "number") {
    throw "THAT'S NOT A NUMBER!"
  }

  if (year % 400 === 0 ) {
    return true;
  } else if (year % 100 === 0 && year % 4 === 0 ) {
    return false;
  } else if (year % 4 === 0) {
    return true;
  } else {
    return false;
  }

};


// Write a function that accepts three strings and input, and returns the one
// that would come earliest in the dictionary.
//
//      firstInDictionary("rhino", "aardvark", "zebra");
//      //=> aardvark
//
//      firstInDictionary("whale", "zebra", "yak");
//      //=> whale
//
//      firstInDictionary("whale", "zebra", "aardvark");
//      //=> aardvark
//
// It should throw an error string if any of the arguments are not strings.
//
//      firstInDictionary("whale", 5, 10);
//      //=> ALL THREE ARGS MUST BE STRINGS!
var firstInDictionary = function (string1, string2, string3) {

  if (  typeof string1 !== "string" ||
        typeof string2 !== "string" ||
        typeof string3 !== "string"
      )
  {
        throw "ALL THREE ARGS MUST BE STRINGS!";
  }

  if (string1 <= string2 && string1 <= string3) {
    return string1;
  } else if (string2 <= string1 && string2 <= string3) {
    return string2;
  } else return string3;

};


// Write a function that extracts a tag from a string representing an HTML
// element, but throws an error if the string is not an HTML element. You may reuse
// one of your functions from the previous section (or, better yet, see if you can
// remember how to re-write it).
//
//     getTagName("<p>this is a paragraph</p>");
//     //=> p
//
//     getTagName("<p>this is wrong</div>");
//     //=> Error: Not an HTML Element!
var getTagName = function (html) {

  var openTag = html.slice( 1, html.indexOf(">") )
  var closeTag = html.slice( html.indexOf("/") + 1, html.length - 1 )

  if (openTag !== closeTag) {
    throw "Error: Not an HTML Element!"
  }

  return openTag;

};


// Re-implement our improveTweet function so it can generate any of lol, omg,
// lmao, and rofl.
var improveTweet = function (tweet) {

  var word;
  var result;

  n = Math.ceil(Math.random() * 4)

  if      (n === 1)   { word = " lol";  }
  else if (n === 2)   { word = " omg";  }
  else if (n === 3)   { word = " lmao"; }
  else if (n === 4)   { word = " rofl"; }

 if (tweet.indexOf(word) === -1) {
   result = tweet + word;
 } else {
   result = tweet;
 }

 return result;

};



// Write a function called `isQuestion` that returns true if the input is a
// string and it ends in a question mark. We'll use this function in the next
// practice problem.
var isQuestion = function (sentence) {

  if (sentence.charAt(sentence.length - 1) === "?") {
    return true;
  } else {
    return false;
  }

};


// The Magic 8 Ball is a classic toy that allows you to ask a yes/no
// question and it responds with a random answer. Most of the time (at least half)
// it responds with a "positive" answer, about a quarter of the time it responds
// with a "neutral" answer, and about a quarter of the time it responds with a
// "negative" answer. You can read more about the Magic 8 Ball toy (and see it's
// actual responses) on Wikipedia.
//
// Write a function that simulates the Magic 8 Ball by generating a random
// number. Try to make it match the probabilities of the real toy.
//
//     magic8Ball("Will people like this problem?");
//     //=> Very doubtful
//
//     magic8Ball("Do people like these videos?");
//     //=> My reply is no
//
//     // throw an error if there's no question mark at the end
//     // use your isQuestion function from the previous question
//     magic8Ball("you suck");
//     //=> THAT DOESN'T SOUND LIKE A QUESTION!
//
//     magic8Ball("Is this a question?");
//     //=> Signs point to yes
var magic8Ball = function (question) {

  if (!isQuestion(question)) {
    throw "THAT DOESN'T SOUND LIKE A QUESTION!"
  }

  n = Math.ceil(Math.random() * 3);

  if        ( n === 1 )   { answer = "yes"      }
  else if   ( n === 2 )   { answer = "no"       }
  else if   ( n === 3 )   { answer = "doubtful" }

  return answer;

};


// Suppose we wanted to randomly interject "-lol-" or "-omg-" into a random
// place in a string. For example:
//
//     randomInterject("this is a tweet");
//     //=> this is -omg- a tweet
//
// Notice that it may break into the middle of words as well.
//
//     randomInterject("hilarious, I'm having a great day");
//     //=> hil-lol-arious, I'm having a great day");
//
// This is a little tricky, so here are some tips. It may be helpful to break down
// this problem into two steps. First, you may want to write a function called
// interjection that accepts a number and two strings -- the interjection and the
// actual string.
//
//     interjectAt("interjection", 5, "hello world!");
//     //=> hello-interjection- world!
//
//     interjectAt("lol", 0, "this is a tweet");
//     //=> -lol-this is a tweet
//
//     interjectAt("omg", 15, "hello");
//     //=> the string doesn't have that many letters!
//
//     interjectAt(5, "omg", "hello");
//     //=> expected first arg to be a string, second arg to be a number and third arg to be a string
//
// You can interject by using two slices. For instance:
//
//     var str = "hello world!";
//     var beginning = str.slice(0,5);
//     var end = str.slice(5,str.length);
//     var strWithInterjection = beginning + "-lol-" + end;
//
// You just have to generalize this to an arbitrary index and wrap it in a function.

// 1 function solution
var interjectAt2 = function (string) {
  var word;

  randomIndex = Math.ceil(Math.random() * (string.length - 1) )

  if (randomIndex % 2 === 0) { word = "-lol-"}
  else { word = "-omg-"; }

  return string.slice(0, randomIndex) + word + string.slice(randomIndex);
};

//  2 functions solution
var interjectAt = function (intergaction, index, string) {

  var result;

  if (typeof intergaction !== "string" || typeof index !== "number" || typeof string !== "string") {
    throw "expected first arg to be a string, second arg to be a number and third arg to be a string";
  } else if (index >= string.length) {
    throw "the string doesn't have that many letters!";
  }

  return string.slice(0, index) + '-' + intergaction + '-' + string.slice(index);

}

// Now that you have a robust function to do your interjection, your actual
// `randomInterjection` function consists of generating a random message and a
// random location within the string, and then calling into the `interjectAt`
// function with the appropriate arguments.
var randomInterject = function (inputStr) {

  var word;

  if (typeof inputStr !== "string") {
    throw "Input should be a string!"
  }

  var randomIndex = Math.floor(Math.random() * (inputStr.length - 1))

  if (randomIndex % 2 === 0) { word = "-lol-" }
  else { word = "-omg-" }

  return interjectAt(word, randomIndex, inputStr)

};
