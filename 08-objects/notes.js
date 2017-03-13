// your notes here!
console.log("hello world!");
console.log("objects section");

////////////////////////////////////////////////////////
// 44. Objects - Overview & Basic Operations - Beginning Programming with JavaScript

// objects are just arrays where we can customize the index name
// [1] ~ ["age"]
// but objects unlike arrays don't have any ordering

// initialize the object:
var obj = {};

var card = {
  "rank" : "ten",
  "suit" : "spades"
}

console.log(card["rank"]);
// => "ten"
console.log(card.rank);
// => "ten"

n = { "1wrongKey" : "someValue"}
// console.log(n.1wrongKey);
// => VM669:1 Uncaught SyntaxError: Invalid or unexpected token

var greetings = {
  "spanish"   : "hola",
  "hawaiian"  : "aloha",
  "english"   : "hello",
  "french"    : "bonjour",
  "german"    : "hallo"
};

console.log(greetings["spanish"]);
console.log(greetings.french);

// we can use variables with keys
var language = "english";
console.log(greetings[language]);

// objects are mutable, so we can manipulate their values at runtime
// .i.e we can add additonal things or take things away

var card = {};
card["suit"] = "spades";
card.rank = "nine";
console.log(card);

var toCardString = function(card) {
    return card.rank + " of " + card.suit;
}

////////////////////////////////////////////////////////
// 45. Objects - The Relationship Between Objects and Arrays - Beginning Programming with JavaScript

// to itterate over keys
Object.keys(greetings);
// => ["spanish", "hawaiian", "english", "french", "german"]

Object.keys(greetings).forEach(function(greeting) {
  return console.log(greeting);
})
// spanish
// hawaiian
// english
// french
// german

// Array of objects

var cardHand = [
  { "suit":"spades", "rank":"ten" },
  { "suit":"diamonds", "rank":"ace" },
  { "suit":"hearts", "rank":"ten" },
  { "suit":"clubs", "rank":"two" },
  { "suit":"spades", "rank":"three" },
]

// get array of a suits

cardHand.map(function(card) {
  return card.suit;
});


////////////////////////////////////////////////////////
// 46. Objects - Complex Objects - Beginning Programming with JavaScript

var tweet = {
  "text": "this is an awesome tweet!",
  "created_at": "Mon Oct 20 14:06:17 +0000 2016",
  "source": "<a href='http://twitter.com' rel='nofollow'>Twitter Web Client</a>",
  "user": {
    "name": "Semmy Purewal",
    "screen_name": "semmypurewal",
    "followers_count": 483
  }
};

tweet.text
// => "this is an awesome tweet!"
tweet.user.name
// => "Semmy Purewal"

var user = {
  "name": "Semmy Purewal",
  "screen_name": "semmypurewal",
  "tweets": [
    "this is a tweet",
    "this is another tweet",
    "this is a third tweet"
  ]
}

user.tweets[0]
// => "this is a tweet"

user.tweets.forEach(function(tweet) {
  console.log(tweet);
});
// this is a tweet
// this is another tweet
// this is a third tweet

////////////////////////////////////////////////////////
// 47. Objects - Checking Object Types - Beginning Programming with JavaScript

var simpleTweet = {
//"text": "i am long tweet i am long tweet i am long tweet i am long tweet i am long tweet i am long tweet i am long tweet i am long tweet i am long tweet",
  "text": "this is an awesome tweet lol",
  "screen_name": "semmypurewal"
};

var isTweetWrong = function(tweet) {
  return  typeof tweet === "object"
};

isTweetWrong(simpleTweet)
// true
isTweetWrong({})
// true         <= expected false
isTweetWrong([])
// true        <= expected false

// We should validate the types of the values associated with keys we expect
var isTweetRight = function(tweet) {
  return  typeof tweet === "object" &&
          typeof tweet.text === "string" &&
          typeof tweet.screen_name === "string" &&
          tweet.text.length <= 140;               // <= additonal validation
};

isTweetRight(simpleTweet)
// true
isTweetRight({})
// false
isTweetRight([])
// false

//////////////////////////////////////////////////////
// START - Find key by value without itteration

var keyByValue = function(value) {

    var kArray = Object.keys(greetings);        // Creating array of keys
    var vArray = Object.values(greetings);      // Creating array of values
    var vIndex = vArray.indexOf(value);         // Finding value index

    return kArray[vIndex];                      // Returning key by value index
}


var greetings = {
	english   : "hello",
 	ukranian  : "привіт",
};


keyByValue("привіт");
// => "ukranian"

// END - Find key by value without itteration
