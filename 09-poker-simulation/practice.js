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
var containsPair = function (array) {

  return array.map(function (value) {
    return value.rank;

  }).some(function (value, index, array) {
    return index !== array.lastIndexOf(value);
  });

};


// Returns true if the hand contains two-pair
var containsTwoPair = function(array) {

  return array.map(function (value) {
    return value.rank;

    }).some(function (value, index, array) {

        if (index !== array.lastIndexOf(value)) {

          array.splice(index, 1)
          array.splice(array.lastIndexOf(value), 1)

          return array.some(function (value, index, array) {
            return index !== array.lastIndexOf(value);
          });
        }

      })
}


// Returns true if the hand contains three-of-a-kind

var threeOfAKindObj = function (array) {

  return array.map(function(value) {
    return value.rank;

  }).reduce(function(obj, value) {
    obj[value] = ( obj[value] || 0 ) + 1;                               // The expression counts[x] || 0 returns the value of counts[x] if it is set, otherwise 0
//  obj[value] > 0 ? obj[value] = obj[value] + 1 : obj[value] = 1       // Will works as well

    return obj;
    }, {})
}

var containsThreeOfAKind = function (array) {

  var objValues = Object.values(threeOfAKindObj(array))

  return objValues.some(function (value) {
    return value === 3;
  })
}


// Returns true if the hand contains any kind of straight, including
// one where the ace is low
var containsStraight = function (array) {

// START - Mutating Ace
  var ranksAce;

  var rankArray = array.map(function (value) {
    return value.rank;
  })

  if (rankArray.indexOf("two") > -1 && rankArray.indexOf("ace") > -1) {
     ranksAce = ["ace"].concat(ranks).slice(0,-1)         // putting ["ace"] in the beginning of the array and remove it from end
  } else {
     ranksAce = ranks;
  }
// END - Mutating Ace

  return array.map(function(value, index, array) {
    return ranksAce.indexOf(value.rank);

  }).sort(function (a,b) { return a - b;                 // to sort number compareFunction() needed https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

  }).map(function (value, index) {

    //  [0,1,2,3,4]   indexes
    //  [5,6,7,8,9]   values
    //  [5,5,5,5,5]   difference

    return value - index;

  }).every(function(value, index, array) {
     return array[0] === value;                           // checking if all values are the same
  })

}

// Returns true if the hand contains a flush
var containsFlush = function (array) {

  return array.map(function (value) {
    return value.suit;
  }).every(function (value, index, array) {
     return array[0] === value;                            // checking if all values are the same
  })

};

// Returns true if the hand contains a full house
var containsFullHouse = function (array) {
  return containsTwoPair(array) && containsThreeOfAKind(array);       // !! containsTwoPair :) && ThreeOfAKind

};

// Returns true if the hand contains four-of-a-kind
var containsFourOfAKind = function (array) {

  var suitNumberObj = array.reduce(function (obj, value) {

    obj[value.rank] = (obj[value.rank] || 0) + 1;
    return obj;
  }, {})

  return Object.values(suitNumberObj).some(function (value) {
    return value === 4;
  });

};

// Returns true if the hand contains a straight-flush
var containsStraightFlush = function (array) {
  return containsStraight(array) && containsFlush(array);

};

// Returns true if the hand contains a royal-flush

var hasKing = function (array) {

  return array.map(function(value) {
    return value.rank;

  }).some(function (value) {
        return value === "king";
     })
}

var containsRoyalFlush = function (array) {
  return containsStraightFlush(array) && hasKing(array);

};

// Returns a string representing the highest rank a hand has. For
// example, if you send in a full-house, it will contain a pair and a
// three-of-a-kind as well, but a full-house is the highest rank
var highestRank = function (array) {

  var result;

  if        ( containsRoyalFlush(array) )     { result = "royal flush"
  } else if ( containsStraightFlush(array) )  { result = "straight flush"
  } else if ( containsFourOfAKind(array) )    { result = "four of a kind"
  } else if ( containsFullHouse(array) )      { result = "full house"
  } else if ( containsFlush(array) )          { result = "flush"
  } else if ( containsStraight(array) )       { result = "straight"
  } else if ( containsThreeOfAKind(array) )   { result = "three of a kind"
  } else if ( containsTwoPair(array) )        { result = "two pair"
  } else if ( containsPair(array) )           { result = "pair"
  } else if ( highCard(array) )               { result = "bust"
  }

  return result;
};
