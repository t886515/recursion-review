// // this is what you would do if you were one to do things the easy way:
// // var parseJSON = JSON.parse;

// // but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  
  var index = 0;
  var element = json.charAt(index);

  function nextChar() {
    index += 1;
    element = json.charAt(index);
    return element;
  }
  
  function recursive() {
    if (element === '\"') {
      return getString(); 
    } else if (element >=0 && element <= 9 || element === '-') {
      return getNumber();
    } else if (element === 'n') {
      return isNull();
    } else if (element === 't' || element === 'f') {
      return isBool();
    } else if (element === '[') {
      return getArray();
    } //else if (element === '{') {
    // } else {
    // }
  }

  function getString() {
    var newString = '';
    nextChar();
    while (element !== '\"') {
      newString += element;
      nextChar();
    }
    return newString;
  }

  function getNumber() {
    var number = '';
    //function getInt() {
    while (element && (element >= 0 && element <= 9 || element === '-' || element === '.' || element === 'e')) {
      number += element;
      nextChar();
    }
    //could throw error if not a number
    return Number(number); 
  }

  function isNull() {
    var stringNull = json.slice(index, index+4);
    if (stringNull === 'null') {
      return null;
    }
  }
  function isBool() {
    if (element === 't') {
      var stringBool = json.slice(index, index+4);
      if (stringBool === 'true') {
        return true;
      }
    } else if (element === 'f') {
      var stringBool = json.slice(index, index+5);
      if (stringBool === 'false') {
        return false;
      }
    }
  }

  function getArray() {
  var array = [];

    function getEachEle() {
      nextChar();
      while (element && element !== ']') {
        if (element === ',') {
          nextChar();
        } else {
          array.push(recursive());
        }
      }
    }
    
    getEachEle();
    nextChar();
    if (element === ']') {
      getEachEle();
    }
    return array;
  }
  
  // function getObj() {
  //   var obj = {};
  //   //run recursion until it hits : or ,
  //     // when it hits : set previous value to key and pass it to obj
  //     // when it hits , set presvious recursion value to obj[key]
  //     // return obj
      
  //   function getEachObjElem() {
  //     nextChar();
  //     while (element && element !== ':') {
        
  //     }
  //   }  
  // }

  return recursive();
};

















// var parseJSON = function(json) {
//   var index = 0;
//   var element = json.charAt(index);
//   var escapes = {
//     'b': '\b',
//     'n': '\n',
//     't': '\t',
//     'r': '\r',
//     'f': '\f',
//     '\"': '\"',
//     '\\': '\\'
//   };
//   function next() {
//     index += 1;
//     element = json.charAt(index);
//     return element;
//   }
//   function recursive() {
//     if (element === '[') {
//       var array = [];
//       next();
//       while (element && element !== ']') {
//         if (element !== ',') {
//           array.push(recursive())
//         } else {
//           next();
//         }
//       }
//       return array;
//     } else if (element === '{') {
//       var object = {};
//       next();
//       while (element && element !== '}') {
//         if (element !== ',') {
//           var key = recursive();
//           console.log(element+'--');
//           next();
//           var value = recursive();
//           object[key] = value;
//         }
//         if (element === '}') {
//           return object;
//           next();
//           recursive();
//         }
//         next();
//       }
//       next();
//       return object;
      
//     } else if (element === '\"') {
//       var string = '';
//       next();
//       while (element) {
//         if (element === '\"') {
//           next();
//           return string;
//         }

//         if (element === '\\') {
//           string += escapes[element];
//         } else {
//           string += element;
//         }
//         next();
//       }
//     } else if (element === 't' || element === 'f') {
//       var bool = '';
//       if (element === 't') {
//         for (var x = 0; x >5; x++) {
//           bool += element;
//           next();
//         }
//         if (bool === 'true') {
//           return true;
//         } else {
//           console.log('bad bool');
//         }
//       } else if (element === 'f') {
//         for (var x = 0; x > 6; x++) {
//           bool += element;
//           next();
//         }
//         if (bool === 'false') {
//           return false;
//         } else {
//           console.log('bad bool');
//         }
//       }
//     } else if (element === 'n') {
//       var nully = '';
//       for (var x = 0; x < 5; x++) {
//         nully += element;
//         next();
//       }
//       if (nully === 'null') {
//         return null;
//       } else {
//         console.log('bad null');
//       }
//     } else {
//       if (element === '-' || (element && element >= 0 && element <= 9)) {
//         var number = '';
//         function getNumber() {
//           while(element && element >= 0 && element <= 9) {
//             number += element;
//             next();
//           }
//         }
//         if (element === '-') {
//           number += element;
//           next();
//         }
//         getNumber();
//         if (element === '.') {
//           number += element;
//           next();
//           getNumber();
//         }
//         if (element === 'e' || element === 'E') {
//           number +=element;
//           next();
//           if (element === '-' || element === '+') {
//             number += ch;
//             next();
//           }
//           getNumber();
//         }
//         if (!isNaN(Number(number))) {
//           return Number(number);
//         } else {
//           console.log('bad number');
//         }

//       } else {
//         console.log('bad JSON');
//       }
//     }
    
    
//   }
//   return recursive();
// };
