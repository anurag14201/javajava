var first = 5;
var secound = 7;
console.log(first, secound);

var temp = first;
first = secound;
secound = temp;
console.log(first, secound);

// array section
[first, secound] = [secound, first];
console.log(first, secound);
