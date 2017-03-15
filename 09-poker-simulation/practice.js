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

  var deck = [];

  suits.forEach(function(suit) {
      ranks.forEach(function(rank) {
        card = {};                          // we need to null card, otherwise last card values will overwrite all deck cards!
        card["suit"] = suit;
        card["rank"] = rank;
        deck.push(card);
    });
  });

  return deck;
};

// fisher-yates shuffle
// Algorithm:
// https://bost.ocks.org/mike/shuffle/
// https://www.youtube.com/watch?v=tLxBwSL3lPQ

var shuffle = function (deck) {

  var index1;

  for (index1 = deck.length - 1; index1 >= 0; index1 = index1 - 1) {

    var card1 = deck[index1];
    var index2 = Math.floor( Math.random() * index1 );
    var card2 = deck[index2];

    if (index1 !== index2) {
      deck[index1] = card2;
      deck[index2] = card1;
    }
  }

  return deck;
};

// return true if the input is an array of 5 valid cards
var isHand = function (array) {

  return  Array.isArray(array) &&
          array.length === 5 &&
          array.every(function(value) { return isCard(value) })
};

// This function should return the first five cards from a shuffled
// deck.

var dealHand = function (array) {
  return shuffle(createDeck()).slice(0, 4);
}

/*
// Long solution
var dealHand = function (array) {

  var i;
  var number = 5;
  var five = [];
  var deck = shuffle(createDeck())

  for (i = 0; i < number; i = i + 1) {
    five.push(deck[i])
  }

  return five;
};
*/



// This function should accept two card objects, and return true if
// the first card is higher than the second one. The ordering is based
// on the rank first. If the rank of the first card is bigger than the
// rank of the second, the first is always bigger. If the rank is the
// same, then the suit is the tie breaker in this order: clubs,
// diamonds, hearts, spades. In this case, clubs is the lowest suit,
// and spades is the highest. If they are the same rank and suit then
// this function should return false since they are equal.
var isHigherThan = function (card1, card2) {

    if (card1.rank === card2.rank && card1.suit === card2.suit) {
      return false;
    }

    var result;

    if (ranks.indexOf(card1.rank) > ranks.indexOf(card2.rank)) {
      result = true;
    } else if (ranks.indexOf(card1.rank) === ranks.indexOf(card2.rank) && suits.indexOf(card1.suit) > suits.indexOf(card2.suit)) {
      result = true;
    } else {
      result = false;
    }

    return result;
};

// This function is similar (though not the opposite) of the isHigher         // Not the opposite?
// function.
var isLowerThan = function (card1, card2) {
  return !isHigherThan(card1, card2)
};

// Use the isHigher function to find the highest card in an array
// of cards
var highCard = function (array) {

  return array.reduce(function (highest, current) {
    return isHigherThan(current, highest) ? current : highest
  })
};

// Use the isLower function to find the lowest card in an array
// of cards
var lowCard = function (array) {

  return array.reduce(function(lowest, current) {
    return isLowerThan(lowest, current) ? lowest : current;
  })
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
