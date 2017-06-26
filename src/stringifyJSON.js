// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  // do a conditional statement for all data types
    // if it matches the data type convert into string
  // if it's an array or an obj recurse to stringifyJSON
  
  var newArray = [];

  if (typeof obj === 'string'){
    return  '"' + obj + '"';
  } else if (typeof obj === 'number' || typeof obj === 'boolean' || obj === null){
    return '' + obj;
  } else if (Array.isArray(obj)){
    //iterate through array
      //send each in array index to stringifyJSON
    //push every items in the new array
    //return newArray with '[' + newArray + ']'
    obj.forEach(function(items){
      newArray.push(stringifyJSON(items));
    
    });
    return '[' + newArray + ']';
     
  } else if (typeof obj === 'object'){
    var objArray = [];
    for(var key in obj){
      // if obj[key] is a function or undefifed 
        //return blank? 
      if (obj[key] === undefined || typeof obj[key] === 'function') {
        return '{}';
      }
      objArray.push(stringifyJSON(key) +':' + stringifyJSON(obj[key]));
      //key : obj[key]  
    }
    return '{' + objArray + '}';
  }

  
  
};
