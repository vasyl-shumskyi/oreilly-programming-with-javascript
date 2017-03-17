// simulation goes here

console.log("poker simulation");

var pokerSimulationProbability = function(hands) {

  var n;
  var handsArray = [];

  for (n = 1; n <= hands; n = n + 1) {
    handsArray.push(highestRank(dealHand()));
  }

  return handsArray.reduce(function(obj, value) {
     obj[value] = (obj[value] || 0) + 1 / hands * 100;       // % percentage (1/hands*100)
     return obj;
  }, {})

}

/*

> pokerSimulationProbability(100);

Object {
  bust: 49,
  two pair: 9,
  pair: 41,
  three of a kind: 1
}


> pokerSimulationProbability(1000000);

Object {
  bust: 50.16900000054191,
  flush: 0.19469999999999488,
  four of a kind: 0.024699999999999906,
  full house: 0.1428000000000006,
  pair: 42.176900000276596,
  royal flush: 0.0006000000000000001,
  straight: 0.4071999999999715,
  straight flush: 0.0011000000000000003,
  three of a kind: 2.106500000000021,
  two pair: 4.776500000002207
}
