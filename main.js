// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**


// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
console.log(new Date)

const displayDate = () => {
  const currentDate = new Date()
  document.getElementById("display-element").innerHTML = currentDate;
}
 

// Write a JavaScript program to convert a number to a string.
let number = 121;
let text = number.toString();
console.log(text)


// Write a JavaScript program to convert a string to the number.

myString = '130' 
console.log(parseInt(myString))

// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
  // * Boolean 
  // * Null
  // * Undefined
  // * Number
  // * NaN
  // * String
  
  console.log(typeof 42);
  // expected output: "number"
  
  console.log(typeof 'cow moo');
  // expected output: "string"
  
  console.log(typeof true);
  // expected output: "boolean"
  
  console.log(typeof undeclaredVariable);
  // expected output: "undefined"
  
// Write a JavaScript program that adds 2 numbers together.
const sumOfTwoNumbers = (num1, num2) => {
  return num1 + num2;
}
console.log(sumOfTwoNumbers(4, 7));


// Write a JavaScript program that runs only when 2 things are true.
const andTrueTest = (w, q) => {
  if (w < 88 && q < 5) {console.log("it is very true")}
  else {console.log("It is super duper false")}
}

andTrueTest(89, 4)
// because we are using &&, both conditionals have to be true for the statement to be true. w has to be less than
// 88 and q has to be less than five. Q is less than five (4) but W is not less than 88 (89) so it is false and will
// return as "It is super duper false"


// Write a JavaScript program that runs when 1 of 2 things are true.
function trueTest(x, y) {
  if (x > 10 || y < 20) {
    console.log('yes!!!');}
 else {console.log('noooo way')}};

trueTest(2, 19)
// x = 2 , y = 19 
// since x isnt greater than 10 (2), however y is less than twenty (19), then it is going to return "yes!!!" because
// it is an OR statement so only one of these has to be true!

// Write a JavaScript program that runs when both things are not true.  

const untrue = (s, p) => {
  if (s != 5 && p != 7) {
    console.log("this is true")
  } else {console.log("this really isnt true")}
} 
// This function is stating that if the arguement for s does NOT equal five and the parameter for p does NOT equal seven, then it will
// return " This is true" but if s does equal five or p does equal 7 then it will return "this really isnt true"
untrue(6, 9)
// It returned "this is true" because s = 6 and NOT 5 and p=9 and NOT 7 :)