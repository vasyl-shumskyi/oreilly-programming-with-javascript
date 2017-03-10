// your notes here!
console.log("hello world!");
console.log("these are my array itterator notes");

/////////////////////////////////////////////////////
var sumForLoop = function(list) {

  var sum = 0;
  var index;

  for (index = 0; i < list.length; index = index + 1) {
    sum = sum + list[index];
  }

  return sum;
}

// Less error'ish, cause no need to maintain index variable and math
var sumForEach = function(list) {

  var sum = 0;

  list.forEach(function(element) {
    sum = sum + element;
  });

  return sum;
}

/////////////////////////////////////////////////////

// doubles([1,2,3,4,5])
//=> [2,4,6,8,10]

var doublesForLoop = function(array) {

  var resultArray = [];
  var i;

  for (i = 0; i < array.length; i = i + 1 ) {
      resultArray.push( array[i]*2 );
  }

  return resultArray;
};


var doublesForEach = function(array) {

  var newArray = [];

  array.forEach(function(element) {
    newArray.push(element*2);
  });

  return newArray;
}


var doublesMap = function(array) {

  var resultArray = array.map(function(element) {
    return element * 2;
  })

  return resultArray;
}


var doublesMap2 = function(array) {

  return array.map(function(element) {
    return element * 2;
  })

}

// Try outs

var numbers = [1,2,3,4,5,6,7,8,9,10];
numbers.map(function(number) {
    return Math.pow(number,3)
});



var thirdPower = function(array) {

  return array.map(function(element) {
    return element ** 3;
  });
}


var power = function(power, array) {

  return array.map(function(element) {
    return element ** power;
  });
}


// firstLetters(['gracie', 'loki', 'allie', 'layla'])
// => ['g','l','a','l']

var firstLetters = function(array) {

  return array.map(function(name) {
    return name[0];
  });
}

// Flip boolean values

var flipBool = function(array) {

  return array.map(function(value) {
    return !value;
  })
}

/////////////////////////////////////////////////

var range = function (max) {

  var result = [];
  var index;

  for (index=0; index <= max; index = index + 1) {
    result.push(index);
  }

  return result;
}


// FizBuzz problem
// => Multiples of 3 with the word 'Fizz',
// => Multiples of 5 with the word 'Buzz'
// => Multiples of both with the word 'FizzBuzz'

var FizzBuzz = function(max) {

  var number;

  return range(max).map(function(number) {
    if (number % 15 === 0) {
      number = 'FizzBuzz'
    } else if (number % 5 === 0) {
      number = 'Buzz'
    } else if (number % 3 === 0) {
      number = 'Fizz'
    }

    return number;

  });
}


//////////////////////////////////////////////

var data = [50,10,100,150,1000,1,2,8,1001,200,250];

var filter100 = data.filter(function(value) {
  return value >=100;
});


limit = 10;

var filterEven = range(limit).filter(function(value) {
  return value % 2 === 0;
})

// Try out
// Prime values < 50;
var range = function (max) {

  var result = [];
  var index;

  for (index=0; index <= max; index = index + 1) {
    result.push(index);
  }

  return result;
}


var isPrime = function(number) {

  if (typeof number !== "number") {
    throw "Input should be the number and be > 1";
  }

  var n;
  var result = true;

  if (number <= 1) {
    result = false;
  }

  for (n = 2; n < number && result; n = n + 1) {
    if (number % n === 0) {
      result = false;
    }
  }

  return result;
}


var primeFilter = function(limit) {
  return range(limit).filter(isPrime);
};

//////////////////////////////////////////////////

var sumReduce = function(array) {

  var result = array.reduce(function(sum, value) {
    return sum + value;
  });

  return result;
}

// Try out
var smallestReduceMath = function(array) {

  var result = array.reduce(function(smaller, value) {
    return Math.min(smaller, value);
  });

  return result;
}

var smallestReduceMath2 = function (array) {
  return array.reduce(function (smaller, value) {
    return Math.min(smaller, value);
  });
};

var smallestReduceIf = function(array) {

  var result = array.reduce(function(smaller, value) {
    if (value < smaller) { smaller = value; };
    return smaller;
  });

  return result;
}


var capitalize = function(string) {
  return string[0].toUpperCase() + string.slice(1);
}

var tweetsToParagraph = function(array) {

  return array.reduce(function(first, value) {
    return first + capitalize(value) + '. ';
  }, "");                                             // !!! set first = ""

}

//////////////////////////////////////////////////

var greeting = "hello world!"
greeting.split("");
// => ["h", "e", "l", "l", "o", " ", "w", "o", "r", "l", "d", "!"]

greeting.split("").forEach(function(letter) {
  console.log(letter);
})


var dogNames = "gracie,loki,dahlia,ally,layla";
dogNames.split(",");
// => ["gracie", "loki", "dahlia", "ally", "layla"]
dogNames.split(",").map(capitalize);
// => ["Gracie", "Loki", "Dahlia", "Ally", "Layla"]


var tweet = "this is a tweet";
tweet.split(" ");
// => ["this", "is", "a", "tweet"]

var array = ["this", "is", "a", "tweet"]
array.reduce(function(a, element) {
  return a + element + ' ';
}, "");
// =>  "this is a tweet "

var array = ["this", "is", "a", "tweet"]
array.join(" ");
// => "this is a tweet"
array.join(" -- ");
// => "this -- is -- a -- tweet"

"this is a tweet".split(" ").map(capitalize).join(" :: ");
// => "This :: Is :: A :: Tweet"
