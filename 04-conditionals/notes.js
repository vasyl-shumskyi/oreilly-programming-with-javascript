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
