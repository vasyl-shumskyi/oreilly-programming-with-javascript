var suits = ["clubs", "diamonds", "hearts", "spades"];
var ranks = ["two", "three", "four", "five", "six", "seven", "eight",
             "nine", "ten", "jack", "queen", "king", "ace"];

// return true if the input is a suit, false otherwise.
var isSuit = function (suit) {

  return  suit === "clubs"    ||
          suit === "diamonds" ||
          suit === "hearts"   ||
          suit === "spades"
};

// return true if the input is a rank, false otherwise.
var isRank = function (rank) {

  return  rank === "two"      ||
          rank === "three"    ||
          rank === "four"     ||
          rank === "five"     ||
          rank === "six"      ||
          rank === "seven"    ||
          rank === "eight"    ||
          rank === "nine"     ||
          rank === "ten"      ||
          rank === "jack"     ||
          rank === "queen"    ||
          rank === "king"     ||
          rank === "ace"
};

// return true if the input is a card object, false otherwise.
var isCard = function (obj) {

  return  typeof obj === "object" &&
          isSuit(obj.suit)        &&
          isRank(obj.rank)
};

// return true if the input is a deck of cards (an array of 52 cards
// with no duplicates)

var hasDupsObjects = function(array) {

  return array.map(function(value) {
    return value.suit + value.rank

  }).some(function(value, index, array) {
       return array.indexOf(value) !== array.lastIndexOf(value);
     })
};


var isDeck = function (deck) {
  return  deck.length === 52 && !hasDupsObjects(deck);
};

// construct a deck of 52 cards that will pass the isDeck method
var createDeck = function () {
};

// fisher-yates shuffle
var shuffle = function () {
};

// return true if the input is an array of 5 valid cards
var isHand = function () {
};

// This function should return the first five cards from a shuffled
// deck.
var dealHand = function () {
};

// This function should accept two card objects, and return true if
// the first card is higher than the second one. The ordering is based
// on the rank first. If the rank of the first card is bigger than the
// rank of the second, the first is always bigger. If the rank is the
// same, then the suit is the tie breaker in this order: clubs,
// diamonds, hearts, spades. In this case, clubs is the lowest suit,
// and spades is the highest. If they are the same rank and suit then
// this function should return false since they are equal.
var isHigherThan = function () {
};

// This function is similar (though not the opposite) of the isHigher
// function.
var isLowerThan = function () {
};

// Use the isHigher function to find the highest card in an array
// of cards
var highCard = function () {
};

// Use the isLower function to find the lowest card in an array
// of cards
var lowCard = function () {
};

// Returns true if the hand contains a pair. Remember -- it returns
// true if the hand *contains* a pair, so if you send in two-pair or
// three-of-a-kind it should still return true. We'll account for that
// later.
var containsPair = function () {
};


// Returns true if the hand contains two-pair
var containsTwoPair = function () {
};

// Returns true if the hand contains three-of-a-kind
var containsThreeOfAKind = function () {
};

// Returns true if the hand contains any kind of straight, including
// one where the ace is low
var containsStraight = function () {
};

// Returns true if the hand contains a flush
var containsFlush = function () {
};

// Returns true if the hand contains a full house
var containsFullHouse = function () {
};

// Returns true if the hand contains four-of-a-kind
var containsFourOfAKind = function () {
};

// Returns true if the hand contains a straight-flush
var containsStraightFlush = function () {
};

// Returns true if the hand contains a royal-flush
var containsRoyalFlush = function () {
};

// Returns a string representing the highest rank a hand has. For
// example, if you send in a full-house, it will contain a pair and a
// three-of-a-kind as well, but a full-house is the highest rank
var highestRank = function () {
};
