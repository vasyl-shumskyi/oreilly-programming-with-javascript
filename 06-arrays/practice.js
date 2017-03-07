///////////////////////////////////////////////////////////////
// helper functions that are used throughout
var isString2 = function (val) {
    return typeof val === "string";
};

var isHTMLElement2 = function (str) {
    var openTag = str.substring(str.indexOf("<") + 1, str.indexOf(">"));
    var closeTag = str.substring(str.lastIndexOf("</") + 2, str.lastIndexOf(">"));
    return str.charAt(0) === "<" && str.charAt(str.length - 1) === ">" && openTag === closeTag;
};
// ! str.substring(str.lastIndexOf("</") + 2, str.lastIndexOf(">"));
// ! str.charAt(0) === "<" && str.charAt(str.length - 1) === ">"

var getTagName2 = function (elt) {
    if (!isHTMLElement2(elt)) {
        throw "Error: Not an HTML Element!";
    }

    return elt.slice(1, elt.indexOf(">"));
};
///////////////////////////////////////////////////////////////

// Write a function called `containsTwice` that accepts a number and an array,
// and returns `true` if that number appears in the array twice, and `false`
// otherwise.
//
//     containsTwice(5, [1, 2, 3, 4, 5]);
//     //=> false
//
//     containsTwice("hello", [ "hello", "world", "hello" ]);
//     //=> true
//
//     containsTwice(true, [ true, false, false, true ]);
//     //=> true
//
//     containsTwice(10, [10, 10, 10, 10, 10]);
//     //=> false
//
var containsTwice = function (element, array) {

  var index;
  var counter = 0;
  var limit = 2;

  for (index=0; index < array.length; index = index + 1) {
    if (element === array[index]) {
      counter = counter + 1;
    };
  };

  return counter === limit;
};

///////////////////////////////////////////////////////////////
var containsTwice2 = function (value, array) {
    var count = 0;
    var i = 0;

    for (i = 0; i < array.length; i = i + 1) {
        if (array[i] === value) {
            count = count + 1;
        }
    }

    return count === 2;
};
///////////////////////////////////////////////////////////////


// Generalize the previous solution into a function called `containsNTimes` so
// that it can check for a value an arbitrary number of times.
//
//     containsNTimes(3, "hello", [ "hello", "hello", "hello" ]);
//     //=> true
//
//     containsNTimes(5, true, [ true, true, true, true, false ]);
//     //=> false
//
//     containsNTimes(0, 5, [ 1, 2, 3, 4, 5 ]);
//     //=> false
//
var containsNTimes = function (times, element, array) {

  var index;
  var counter = 0;

  for (index=0; index < array.length; index = index + 1) {
    if ( element === array[index] ) {
      counter = counter + 1;
    }
  }

  return counter === times;
};

///////////////////////////////////////////////////////////////
var containsNTimes2 = function (n, value, array) {
    var count = 0;
    var i = 0;

    for (i = 0; i < array.length; i = i + 1) {
        if (array[i] === value) {
            count = count + 1;
        }
    }

    return count === n;
};
///////////////////////////////////////////////////////////////



// Write a function called `atLeastOneEven` that returns `true` if at least one of
// the numbers in input array is even, false otherwise. It should throw an error if
// the argument is not an array.
//
//     atLeastOneEven([ 3, 5, 6, 7, 9 ]);
//     //=> true
//
//     atLeastOneEven([]);
//     //=> false
//
//     atLeastOneEven([ 101, 203, 401 ]);
//     //=> false
//
//     atLeastOneEven("hello");
//     //=> input should be an array!
//
var atLeastOneEven = function (array) {

  var index;
  var result = false;

  if ( !Array.isArray(array) ) {
    throw "input should be an array!";              // ! it's better to put throw before defining variables
  }

  for (index=0; index < array.length && result === false; index = index + 1) {
    if ( array[index] % 2 === 0 ) {
      result = true;
    };
  }

  return result;

};

///////////////////////////////////////////////////////////////
var atLeastOneEven2 = function (list) {
    if (!Array.isArray(list)) {
        throw "input should be an array!";
    }

    var result = false;
    var i;

    for (i = 0; i < list.length; i = i + 1) {       // no '&& result === false', iterating all array :)
        if (list[i] % 2 === 0) {
            result = true;
        }
    }

    return result;
};
///////////////////////////////////////////////////////////////


// Write a function called `allStrings` that accepts an array as an argument and
// returns `true` if all of the values in the array are strings. It should
// return false if they are not all strings, and throw an error if the input is
// not an array.
//
//     allStrings([ "these", "are", "all", "strings" ]); //=> true
//
//     allStrings([ "these", "are", "not", 5 ]); //=> false
//
//     allStrings([ ]); //=> true
//
//     allStrings("hello"); //=> input should be an array!
//
// Although the tests will not be checking for this, try to make your loop exit
// as soon as it finds a non-string entry in the array.
//
var allStrings = function (array) {

  var index;
  var result = true;

  if (!Array.isArray(array)) {
    throw "Input should be an array!"                   // ! it's better to put throw before defining variables
  };

  for (index=0; index < array.length && result; index = index + 1) {

    if (typeof array[index] !== "string") {
      result = false;
    }
  }

  return result;
};

///////////////////////////////////////////////////////////////
var isString2 = function (val) {
    return typeof val === "string";
};

var allStrings2 = function (list) {
    if (!Array.isArray(list)) {
        throw "input should be an array!";
    }

    var result = true;
    var i;

    for (i = 0; i < list.length && result === true; i = i + 1) {      // '&& result' is enough :)
        if (!isString2(list[i])) {
            result = false;
        }
    }

    return result;
};

///////////////////////////////////////////////////////////////

// Write a function that accepts two arrays, and returns true if any of the
// values in the first array appear twice in the second array. You might want to
// reuse the function `containsNTimes` or `containsTwice` from above. It should
// throw an error if either of the inputs are not arrays.
//
//
//     containsAnyTwice([1, 2], ["hello", 1, "world", 1]);
//     //=> true
//
//     containsAnyTwice([], ["always", "will", "return", "false"]);
//     //=> false
//
//     containsAnyTwice(["hello", "world"], ["hello", "hello", "world", "world"]);
//     //=> true
//
//     containsAnyTwice("hello", ["hello", "world"]);
//     //=> containsAnyTwice expects two arguments, both of which should be an array.
//
// Although the tests will not be checking for this, try to make your loop exit
// as soon as it finds an element in the first array that appears twice in the second
// array.
//
var containsAnyTwice = function (array1, array2) {

//if ( !Array.isArray(array1) &&  Array.isArray(array2) ) {            // Not(!) before each element!
  if ( !Array.isArray(array1) || !Array.isArray(array2) ) {
    throw "containsAnyTwice expects two arguments, both of which should be an array.";
  };

  var index;
  var result = false;
  var limit = 2;

  for (index=0; index < array1.length && !result; index = index + 1) {
    if ( containsNTimes(limit, array1[index], array2) ) {
      result = true;
    }
  }

  return result;

};

///////////////////////////////////////////////////////////////
var containsAnyTwice2 = function (values, array) {
    if (!Array.isArray(values) || !Array.isArray(array)) {
        throw "containsAnyTwice expects two arguments, both of which should be an array.";
    }

    var result = false;
    var i = 0;

    for (i = 0; i < values.length && result === false; i = i + 1) {           // '!result' is shorter than 'result === false' :)
        if (containsTwice2(values[i], array)) {
            result = true;
        }
    }

    return result;
};

///////////////////////////////////////////////////////////////

// In the previous problem, we determined whether or not an array contains any
// of a list of values exactly twice. In this problem, we'll actually return
// those values appearing twice.  Create a new function that returns an array of
// only the values from the first array that appear twice in the second array.
//
// For this problem, you'll create a new array, and you'll use its `push`
// function to add elements to the end. You'll most likely want to use the
// `containsTwice` function you created in the previous exercise.
//
// The difficulty here will be in avoiding duplicates. You may want to use the
// `indexOf` method of the resulting array to confirm that you're not adding a
// value a second time.
//
//     getValuesAppearingTwice(["hello", 1, "world", 1]);
//     //=> [ 1 ]
//
//     getValuesAppearingTwice(["always", "will", "return", "empty"]);
//     //=> []
//
//     getValuesAppearingTwice(["hello", "hello", "world", "world", "goodbye"]);
//     //=> [ "hello", "world" ]
//
//     getValuesAppearingTwice(["hello", "world", "goodbye"])
//     //=> []
//
var getValuesAppearingTwice = function (array) {

  var index;
  var newArray = [];

  for (index=0; index < array.length; index = index + 1) {

      var element = array[index];

      if ( containsTwice ( element, array ) && newArray.indexOf(element) === -1 ) {
          newArray.push(element);
      };
  };

  return newArray;
};

///////////////////////////////////////////////////////////////
var getValuesAppearingTwice2 = function (array) {
    var result = [];
    var i;

    for (i = 0; i < array.length; i = i + 1) {
        if (containsTwice2(array[i], array) && result.indexOf(array[i]) === -1) {
            result.push(array[i]);
        }
    }

    return result;
};
///////////////////////////////////////////////////////////////

// Using a standard `for` loop, along with the `push` function, write a function
// called `range` that accepts two numbers, `begin` and `end`, and returns an array
// that contains all of the integers starting at `begin` and ending at `end`
// (including `begin` and `end`). For example:
//
//     range(5,10);
//     //=> [5, 6, 7, 8, 9, 10]
//
//     range(0,3);
//     //=> [0, 1, 2, 3]
//
//     range(10,3);
//     //=> [10, 9, 8, 7, 6, 5, 4, 3]
//
// It should throw an error when either of the arguments are not numbers.
//
//     range("hello", "world");
//     //=> arguments to range must be numbers
//
var range = function (start, end) {

  if (typeof start !== "number" || typeof end !== "number") {
    throw "arguments to range must be numbers";
  }

  var n;
  var array = [];

  if (start < end) {
    for (n = start; n <= end; n = n + 1) {
      array.push(n);
    }
  } else {
    for (n = start; n >= end; n = n - 1) {
      array.push(n);
    }
  }

  return array;
};

///////////////////////////////////////////////////////////////
var range2 = function (numA, numB) {
    if (typeof numA !== "number" || typeof numB !== "number") {
        throw "arguments to range must be numbers";
    }

    var increment;
    var i;
    var result = [];

    if (numA <= numB) {
        // we're going up!
        increment = 1;
    } else {
        // we're going down!
        increment = -1;
    }

    // here we keep going, either up or down, until we hit
    // numB
    for (i = numA; i !== numB; i = i + increment) {                 // !!! i !== numB
        result.push(i);
    }

    // we'll skip numB in the above loop, so we'll push it here.    // !!!
    result.push(numB);

    return result;
};


///////////////////////////////////////////////////////////////


// Using the `isHTMLElement` and `getTagName` function from one of the previous
// sections, write a function called `mapToTags` that accepts an array of HTML
// elements and returns a new array that consists of only the tags associated with
// those HTML elements. It should throw an error if any of the elements are not
// HTML elements, or if the input is not an array.
//
//     mapToTags(["<p>this is a paragraph</p>", "<span>this is a span</span>", "<li>this is a list item</li>"]);
//     //=> ["p", "span", "li"]
//
//     mapToTags([]);
//     //=> []
//
//     mapToTags(["<p>this is a paragraph</p>", "this is a tweet"]);
//     //=> "this is a tweet" is not an HTML element!
//
//     mapToTags(5);
//     //=> wat?
//
//     mapToTags([ "not an html element" ]);
//     //=> all entries must be html elements!
//

var isHTMLElement = function (string) {

  openTag = string.slice(1, string.indexOf('>'));
  closeTag = string.slice(string.indexOf("/") + 1, string.length - 1);

  return openTag === closeTag;

};


var getTagName = function (string) {

  var tag;

  if (isHTMLElement(string)) {
    tag = string.slice(1, string.indexOf('>'));
  } else {
    throw '"' + string + '" is not an HTML element!'
  }

  return tag;
}


var mapToTags = function (array) {

  if ( !Array.isArray(array) ) {
    throw "wat?"
  }

  var index;
  var tagArray = [];

  for (index = 0; index < array.length; index = index + 1) {
    tag = getTagName(array[index]);
    tagArray.push(tag);
  }

  return tagArray;
};

///////////////////////////////////////////////////////////////
var isHTMLElement2 = function (str) {
    var openTag = str.substring(str.indexOf("<") + 1, str.indexOf(">"));
    var closeTag = str.substring(str.lastIndexOf("</") + 2, str.lastIndexOf(">"));
    return str.charAt(0) === "<" && str.charAt(str.length - 1) === ">" && openTag === closeTag;
};
// ! str.substring(str.lastIndexOf("</") + 2, str.lastIndexOf(">"));
// ! str.charAt(0) === "<" && str.charAt(str.length - 1) === ">"


var getTagName2 = function (elt) {
    if (!isHTMLElement2(elt)) {
        throw "Error: Not an HTML Element!";
    }

    return elt.slice(1, elt.indexOf(">"));
};


var mapToTags2 = function (htmlElements) {
    if (!Array.isArray(htmlElements)) {
        throw "wat?";
    }

    var tags = [];
    var i;

    for (i = 0; i < htmlElements.length; i = i + 1) {
        if (!isHTMLElement2(htmlElements[i])) {
            throw "'" + htmlElements[i] + "' is not an HTML Element";
        }
        tags.push(getTagName2(htmlElements[i]));
    }

    return tags;
};
///////////////////////////////////////////////////////////////


// Write a function called `filterToLol` which accepts an array of tweets and
// returns an array that consists only of those that contain `lol` (upper, lower,
// or mixed-case). It should throw an error if the input is not an array or if any
// of the elements are not strings.
//
//     filterToLol(["hello world!", "this is a tweet lol", "this is a tweet omg"]);
//     //=> ["this is a tweet lol"]
//
//     filterToLol(["lol", "LOL", "LoL", "omg", "lollerskates"]);
//     //=> ["lol", "LOL", "LoL", "lollerskates"]
//
//     filterToLol(["omg", "this is a tweet"]);
//     //=> []
//
//     filterToLol(5);
//     //=> no can do.
//
//     filterToLol(["this is a string", false, 5]);
//     //=> all entries must be strings!
//

var containsWord = function (string) {

  if (typeof string !== "string") {
    throw "all entries must be strings!";
  }

  var result = false;
  var word = 'lol';
  var stringL = string.toLowerCase();

  if (stringL.indexOf(word) !== -1) {
    result = true;
  };

  return result;
}

var filterToLol = function (array) {

  if (!Array.isArray(array)) {
    throw "no can do."
  }

  var index;
  var wordArray = [];

  for (index=0; index < array.length; index = index + 1) {
    var element = array[index];

    if( containsWord(element) ) {
      wordArray.push(element)
    }
  }
  return wordArray;
};

///////////////////////////////////////////////////////////////
var isString2 = function (val) {
    return typeof val === "string";
};


var allStrings2 = function (list) {
    if (!Array.isArray(list)) {
        throw "input should be an array!";
    }

    var result = true;
    var i;

    for (i = 0; i < list.length && result === true; i = i + 1) {
        if (!isString2(list[i])) {
            result = false;
        }
    }

    return result;
};

var filterToLol2 = function (list) {
    if (!Array.isArray(list)) {
        throw "no can do.";
    }

    if (!allStrings2(list)) {
        throw "all entries must be strings!";
    }

    var result = [];
    var i;

    for (i = 0; i < list.length; i = i + 1) {
        if (list[i].toLowerCase().indexOf("lol") > -1) {
            result.push(list[i]);
        }
    }

    return result;
};
///////////////////////////////////////////////////////////////
