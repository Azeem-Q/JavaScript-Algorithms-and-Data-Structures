// Comment Your JavaScript Code

// This is an in-line comment

/* This is a 
multi-line comment */

// Declare JavaScript Variables
/*
var myName;
*/

// Storing Values with the Assignment Operator
/*
var a;
a = 7;
*/

// Assigning the Value of One Variable to Another
/*
var a;
a = 7;
var b;
b = a;
*/

// Initializing Variables with the Assignment Operator
/*
var a = 9;
*/

// Declare String Variables
/*
var myFirstName = "Azeem";
var myLastName = "Qamar";
*/

// Understanding Uninitialized Variables
/*
var a = 5;
var b = 10;
var c = "I am a";

a = a + 1;
b = b + 5;
c = c + " String!";
*/

// Understanding Case Sensitivity in Variables
/*
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;
*/

// Explore Differences Between the var and let Keywords
/*
let catName = "Oliver";
let catSound = "Meow!";
*/

// Declare a Read-Only Variable with the const Keyword
/*
const FCC = "freeCodeCamp";
let fact = "is cool!";
fact = "is awesome!";

console.log(FCC, fact);
*/

// Add Two Numbers with JavaScript
/*
const sum = 10 + 10;
*/

// Subtract One Number from Another with JavaScript
/*
const difference = 45 - 33;
*/

// Multiply Two Numbers with JavaScript
/*
const product = 8 * 10;
*/

// Divide One Number by Another with JavaScript
/*
const quotient = 66 / 33;
*/

// Increment a Number with JavaScript
/*
let myVar = 87;

myVar = ++ myVar;

console.log(myVar)
*/

// Decrement a Number with JavaScript
/*
let myVar = 11;
myVar = -- myVar;

console.log(myVar)
*/

// Create Decimal Numbers with JavaScript
/*
let myDecimal = 5.7;
*/

// Multiply Two Decimals with JavaScript
/*
const product = 2.0 * 2.5;
*/

// Divide One Decimal by Another with JavaScript
/*
const quotient = 4.4 / 2.0;
*/

// Finding a Remainder in JavaScript
/*
const remainder = 11 % 3;
*/

// Compound Assignment With Augmented Addition
/*
let a = 3;
let b = 17;
let c = 12;

a += 12;
b += 9;
c += 7;
*/

// Compound Assignment With Augmented Subtraction
/*
let a = 11;
let b = 9;
let c = 3;

a -= 6;
b -= 15;
c -= 1
*/

// Compound Assignment With Augmented Multiplication
/*
let a = 5;
let b = 12;
let c = 4.6;

a *= 5;
b *= 3;
c *= 10;
*/

// Compound Assignment With Augmented Division
/*
let a = 48;
let b = 108;
let c = 33;

a /= 12;
b /= 4;
c /= 11;
*/

// Escaping Literal Quotes in Strings
/*
const myStr = "I am a \"double quoted\" string inside \"double quotes\".";
*/

// Quoting Strings with Single Quotes
/*
const myStr = '<a href="http://www.example.com" target="_blank">Link</a>';
*/

// Escape Sequences in Strings

/*
String Special Chars

Code	Output
\'	single quote
\"	double quote
\\	backslash
\n	newline
\r	carriage return
\t	tab
\b	word boundary
\f	form feed

*/
/*
const myStr = 'FirstLine\n\t\\SecondLine\nThirdLine';
console.log(myStr);
*/

// Concatenating Strings with Plus Operator
/*
const myStr = 'This is the start. ' + 'This is the end.';
*/

// Concatenating Strings with the Plus Equals Operator
/*
let myStr = 'This is the first sentence. ';
myStr += 'This is the second sentence.'
console.log(myStr)
*/

// Constructing Strings with Variables
/*
const myName = "Azeem";
const myStr = "My name is " + myName + ' and I am well';
*/

// Appending Variables to Strings
/*
const someAdjective = 'fun';
let myStr = 'Learning to code is ';
myStr += someAdjective;
*/

// Find the Length of a String
/*
let lastNameLength = 0;
const lastName = "Lovelace";
lastNameLength = lastName.length;
*/

// Use Bracket Notation to Find the First Character in a String
/*
let firstLetterOfLastName = "";
const lastName = "Lovelace";
firstLetterOfLastName = lastName[0];
console.log(firstLetterOfLastName);
*/

// Understand String Immutability
/*
let myStr = "Jello World";
myStr = 'Hello World';
*/

// Use Bracket Notation to Find the Nth Character in a String
/*
const lastName = "Lovelace";
const thirdLetterOfLastName = lastName[2];
console.log(thirdLetterOfLastName);
*/

// Use Bracket Notation to Find the Last Character in a String
/*
const lastName = "Lovelace";
const lastLetterOfLastName = lastName[lastName.length - 1];
console.log(lastLetterOfLastName);
*/

// Use Bracket Notation to Find the Nth-to-Last Character in a String
/*
const lastName = "Lovelace";
const secondToLastLetterOfLastName = lastName[lastName.length - 2];
console.log(secondToLastLetterOfLastName);
*/

// Word Blanks
/*
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";
const wordBlanks = "A " + myAdjective + " " + myNoun + " " + myVerb + " away " + myAdverb + " after seeing an angry man holding a rifle.";
console.log(wordBlanks);
*/

// Store Multiple Values in one Variable using JavaScript Arrays
/*
const myArray = ['AQ', 10];
*/

// Nest one Array within Another Array
/*
const myArray = [['AQ', 10], ['MQ', 12]];
*/

// Access Array Data with Indexes
/*
const myArray = [50, 60, 70];
const myData = myArray[0];
*/

// Modify Array Data With Indexes
/*
const myArray = [18, 64, 99];
myArray[0] = 45;
*/

// Access Multi-Dimensional Arrays With Indexes
/*
const myArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14]
];
const myData = myArray[2][1];
*/

// Manipulate Arrays With push() (.push() insert element at an end of array)
/*
const myArray = [["John", 23], ["cat", 2]];
myArray.push(["dog", 3]);
*/

// Manipulate Arrays With pop() (.pop() removes last element of array)
/*
const myArray = [["John", 23], ["cat", 2]];
const removedFromMyArray = myArray.pop();
*/

// Manipulate Arrays With shift() (.shift() removes first element of array)
/*
const myArray = [["John", 23], ["dog", 3]];
const removedFromMyArray = myArray.shift();
*/

// Manipulate Arrays With unshift() (.unshift insert elements at the beginning of array)
/*
const myArray = [["John", 23], ["dog", 3]];
myArray.shift();
myArray.unshift(["Paul", 35]);
*/

// Shopping List
/*
const myList = [];
myList.push(
    ['Tissue Roll', 4], 
    ['Surf', 1], 
    ['Milkpak', 33], 
    ['Ketchup', 1], 
    ['Soap', 12], 
    ['Cooking Oil', 6]);
*/

// Write Reusable JavaScript with Functions
/*
function reusableFunction() {
    console.log('Hi World');
}
reusableFunction();
*/

// Passing Values to Functions with Arguments
/*
function functionWithArgs(val1, val2) {
    console.log(val1 + val2);
}
functionWithArgs(3, 9);
*/

// Return a Value from a Function with Return
/*
function timesFive(val) {
    return val * 5;
}
const answer = timesFive(8);
*/

// Global Scope and Functions
/*
// Declare the myGlobal variable below this line

let myGlobal = 10;

function fun1() {
    // Assign 5 to oopsGlobal here
    oopsGlobal = 5;
}

// Only change the code above this line

function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
        output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}
fun2();
*/

// Local Scope and Functions
/*
function myLocalScope() {
    let myVar = 5;
    console.log('inside myLocalScope', myVar);
}
myLocalScope();

console.log('outside myLocalScope', myVar);
*/

// Global vs. Local Scope in Functions (if both variables have same name, local variables inside function will take precedence over global variablels)
/*
const outerWear = 'T-Shirt';

function myOutfit() {
    let outerWear = 'sweater';
    return outerWear;
}
let answer = myOutfit();
console.log(answer);
*/

// Understanding Undefined Value returned from a Function (function return 'undefined' when return is not defined in function)
/*
let sum = 0;

function addThree() {
    sum = sum + 3;
}
function addFive() {
    sum = sum + 5;
}


addThree();
addFive();
*/

// Assignment with a Returned Value
/*
let processed = 0;

function processArg(num) {
    return (num + 3) / 5;
}
processed = processArg(7);
*/

// Stand in Line

function nextInLine(arr, item) {
    arr.push(3);
    return arr.shift();
}
nextInLine([], 'a');

const testArr = [1, 2, 3, 4, 5];

console.log('Before: ' + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log('After: ' + JSON.stringify(testArr));