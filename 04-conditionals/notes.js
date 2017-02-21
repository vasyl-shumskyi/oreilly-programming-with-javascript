// your notes here!
console.log("hello world!");
console.log("these are my notes for section 4")

// getTagName("<p>")
// => p

// getTagName("</p>")
// => p

// getTagName("<article>")
// => article

// getTagName("</article>")
// => article

var getTagName = function (tag) {

  var result;

  if (tag.charAt(1) === "/" ) {
    result = tag.slice(2, tag.length - 1 );
  } else {
    result = tag.slice(1, tag.length - 1);
  }

  return result;

 }

 // improveTweet("hello world")
 // => hello world lol

 // improveTweet("this is funny lol")
 // => this is funny lol

 var improveTweet = function  (tweet) {

   var lol = ' lol';
   var result;

   if ( tweet.indexOf("lol") === -1 ) {
     result = tweet + lol;
   } else {
     result = tweet;
   }

   return result;
}


// simpler

var improveTweet2 = function  (tweet) {

  var result = tweet;

  if ( tweet.toLowerCase().indexOf("lol") === -1 ) {
    result = tweet + ' lol';
  }

  return result;
}


// cascaded if / else

var greetingByHour = function (hour) {
    var result;

    if (0 <= hour && hour <= 5) {
        result = "Wow, it's early!";
    } else if (5 < hour && hour <= 12) {
        result = "Good morning!";
    } else if (12 < hour && hour <= 17) {
        result = "Good afternoon!";
    } else if (17 < hour && hour <= 20) {
        result = "Good evenening!";
    } else if (20 < hour && hour <= 24) {
        result = "Shouldn't you be in bed?";
    } else {
          result = "Oh gosh, this is awkward - that's not a time.";
    }

    return result;
};

// Try out cascaded if / else

var awesomeTweet = function (tweet) {

    var result;
    length = tweet.length;


    if (0 < length && length < 50) {
        result = "Not great";
    } else if (50 <= length && length < 100) {
        result = "sorta-good";
    } else if (100 <= length && length <= 150) {
        result = "awesome";
    } else {
          result = "invalid tweet length";
    }

    return result + '|' + length;
};

// Nested if / else

var maxOfThree = function (a,b,c) {
  var result;

  if (a > b) {
    if (a > c) {
        result = a;
    } else {
        result = c;
    }
  } else {
      if (b > c) {
        result = b;
      } else {
        result = c;
      }
  }

  return result;
}

// nested if/else formated

var maxOfThree2 = function (a,b,c) {
  var result;

  if (a > b) {
      if  (a > c)     { result = a; }
      else            { result = c; }
  } else {
      if  (b > c)     { result = b; }
      else            { result = c; }
  }

  return result;
}

// nested to cascaded if / else

var maxOfThree3 = function (a,b,c) {

  var result;

  if      (a >= b && a >= c)  { result = a };
  else if (b >= a && b >= c)  { result = b };
  else                        { result = c };

  return result;

}

// nested if/else BAD alternative

var maxOfThree4 = function (a,b,c) {

  var result;

  if (a >= b && a >= c) { result = a };
  if (b >= a && b >= c) { result = b };
  if (c >= a && c >= b) { result = c };

  return result;

}
