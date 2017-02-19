// your notes here!
console.log("hello world!");
console.log("this is the types section!")

var isNumber = function (potentialNumber) {
  return typeof potentialNumber === "number";
};

var isPositiveNumber = function (number) {
  return isNumber(number) && number > 0;
};

var isYear = function(year) {
  return isPositiveNumber(year) && year <= 9999;
}

var isTweet = function (potentialTweet) {
  return potentialTweet.length <= 140;
}

var isTweetWithWord = function (tweet, word) {
  return isTweet(tweet) && tweet.indexOf(word) > -1;
}
