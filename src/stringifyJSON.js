// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  // create a final result string
  var result = '';

  // Helper functions

  var toString = function(value) {
    var convertedValue = '';
    if (( typeof value === 'string') || ( value === null ) || (typeof value === 'number') || (typeof value === 'boolean')) {
    //|| typeof value === 'number' || typeof value === 'boolean'
      convertedValue += value;
    } else {
      convertedValue += value;
    }
    return convertedValue;
  };
  // function for arrays
    // add brackets
    // loop through array
  var arrayToString = function (value) {
    var arrayString = '';
    for (var i = 0; i < value.length; i++) {
      if (i === value.length - 1) {
        arrayString += toString(value[i]);
      } else {
        arrayString += toString(value[i]) + ', ';
      }
    }
    return '[' + arrayString + ']';
  };
  // function for objects
    // add curly brackets

  // if object or array
    // if is an array, run array function
    // iterate over array
      // if not another array or object, invoke toString function
      // push string to result
  if (Array.isArray(obj) ) {
    // for (var i = 0; i < obj.length; i++) {
    //     if (i === obj.length - 1) {
    //       result += toString(obj[i]);
    //     } else {
    //       result += toString(obj[i]) + ', ';
    //     }
    //   } else if (Array.isArray(obj)) {
    //     stringifyJSON(obj);
    //   }
    result += arrayToString(obj);
  } else if (typeof obj = 'object') {

  } else {
    result += toString(obj);
  }

  // typeof obj[i] !== 'object' &&

    // if is an object, run object function

  // else

  // if it's a number, then covert to string and add to to result string
  // var toString = function(value) {
  //   var convertedValue = '';
  //   if ( typeof value === 'number' ) {
  //     result += Number.parseInt(value);
  //   }
  //   // if it's a string add to final result string
  //   if ( typeof value === 'string' ) {
  //     result += value;
  //   }

  //   if ( typeof value === 'boolean') {
  //     result += '"' + value + '"';
  //   }

    // if null
  //   if ( typeof value === null) {
  //     result += 'null';
  //   }
  //   return convertedValue;
  // };

  // revised toString


  // if is an array, run array function

  // if is an object, run object function


  // return '"' + final result string + '"'
  // var finalResult = toString(null);
  // console.log((finalResult));
  return '"' + result + '"';
};

