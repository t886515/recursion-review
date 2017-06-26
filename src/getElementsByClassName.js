// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  // your code here
  // go through every node.classList()
  // while we are going through every element - we go through every node.childNodes
  var array = [];
  function recursion(node, className) {
    console.log(node.nodeType);
    if (node.classList) {
      if (node.classList.contains(className)) {
        array.push(node);
      }
      for (var i = 0; i < node.childNodes.length; i++) {
        recursion(node.childNodes[i], className);
      }
    }
    
  }
  recursion(document.body, className);
  console.log(array);
  return array; 
};

