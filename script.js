// Basic JS

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

// Stand in Line (watch vid.)
/*
function nextInLine(arr, item) {
    arr.push(item);
    item = arr.shift();
    return item;
}
nextInLine([], 1);

const testArr = [1, 2, 3, 4, 5];

console.log('Before: ' + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log('After: ' + JSON.stringify(testArr));
*/

// Understanding Boolean Values
/*
function welcomeToBooleans() {

    return true;
}
*/

// Use Conditional Logic with If Statements
/*
function trueOrFalse(wasThatTrue) {
    if (wasThatTrue) {
        return 'Yes, that was true'
    }
    return 'No, that was false';
}
*/

// Comparison with the Equality Operator
/*
function testEqual(val) {
    if (val == 12) {
        return 'Equal';
    }
    return 'Not Equal';
}

testEqual(10);
*/

// Comparison with the Strict Equality Operator
/*
function testStrict(val) {
    if (val === 7) {
        return "Equal";
    }
    return "Not Equal";
}

testStrict(10);
*/

// Practice comparing different values
/*
function compareEquality(a, b) {
    if (a === b) {
        return "Equal";
    }
    return "Not Equal";
}

compareEquality(10, "10");
*/

// Comparison with the Inequality Operator
/*
function testNotEqual(val) {
    if (val != 99) {
        return "Not Equal";
    }
    return "Equal";
}

testNotEqual(10);
*/

// Comparison with the Strict Inequality Operator
/*
function testStrictNotEqual(val) {
    if (val !== 17) {
        return "Not Equal";
    }
    return "Equal";
}
testStrictNotEqual(10);
*/

// Comparison with the Greater Than Operator
/*
function testGreaterThan(val) {
    if (val > 100) {
        return "Over 100";
    }
    if (val > 10) {
        return "Over 10";
    }
    return "10 or Under";
}

testGreaterThan(10);
*/

// Comparison with the Greater Than Or Equal To Operator
/*
function testGreaterOrEqual(val) {
    if (val >= 20) {
        return "20 or Over";
    }
    if (val >= 10) {
        return "10 or Over";
    }
    return "Less than 10";
}
testGreaterOrEqual(10);
*/

// Comparison with the Less Than Operator
/*
function testLessThan(val) {
    if (val < 25) {
        return "Under 25";
    }
    if (val < 55) {
        return "Under 55";
    }
    return "55 or Over";
}
testLessThan(10);
*/

// Comparison with the Less Than Or Equal To Operator
/*
function testLessOrEqual(val) {
    if (val <= 12) {
        return "Smaller Than or Equal to 12";
    }
    if (val <= 24) {
        return "Smaller Than or Equal to 24";
    }
    return "More Than 24";
}
testLessOrEqual(10);
*/

// Comparisons with the Logical And Operator
/*
function testLogicalAnd(val) {
    if (val <= 50 && val >= 25) {
        return "Yes";
        }

    return "No";
}

testLogicalAnd(10);
*/

// Comparisons with the Logical Or Operator
/*
function testLogicalOr(val) {
    if (val > 20 || val < 10) {
        return "Outside";
    }
    return "Inside";
}
testLogicalOr(15);
*/

// Introducing Else Statements
/*
function testElse(val) {
    let result = "";
    if (val > 5) {
        result = "Bigger than 5";
    }   else {
        result = "5 or Smaller";
    }
    return result;
}

testElse(4);
*/

// Introducing Else If Statements
/*
function testElseIf(val) {
    if (val > 10) {
        return "Greater than 10";
    }   else if (val < 5) {
        return "Smaller than 5";
    }   else {
        return "Between 5 and 10";
    }
}

testElseIf(7);
*/

// Logical Order in If Else Statements
/*
function orderMyLogic(val) {
    if (val < 5) {
        return "Less than 5";
    }   else if (val < 10) {
        return "Less than 10";
    }   else {
        return "Greater than or equal to 10";
    }
}

orderMyLogic(7);
*/

// Chaining If Else Statements
/*
function testSize(num) {
    if (num < 5) {
        return "Tiny";
    }   else if (num < 10) {
        return "Small";
    }   else if (num < 15) {
        return "Medium";
    }   else if (num < 20) {
        return "Large";
    }   else if (num >= 20) {
        return "Huge";
    }
    return "Change Me";
}

testSize(7);
*/

// Golf Code
/*
const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
    if (strokes == 1) {
        return names[0];
    }   else if (strokes <= par - 2) {
        return names[1];
    }   else if (strokes == par - 1) {
        return names[2];
    }   else if (strokes == par) {
        return names[3];
    }   else if (strokes == par + 1) {
        return names[4];
    }   else if (strokes == par + 2) {
        return names[5];
    }   else {
        return names[6];
    }
    return "Change Me";
}
golfScore(5, 4);
*/

// Selecting from Many Options with Switch Statements
/*
function caseInSwitch(val) {
    let answer = "";
    switch(val) {
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gamma";
            break;
        case 4:
            answer = "delta";
            break
    }

    return answer;
}

caseInSwitch(1);
*/

// Adding a Default Option in Switch Statements
/*
function switchOfStuff(val) {
    let answer = val;
    switch(answer) {
        case "a":
            answer = "apple";
            break;
        case "b":
            answer = "bird";
            break;
        case "c":
            answer = "cat";
            break;
        default:
            answer = "stuff"
    }
    return answer;
}

console.log(switchOfStuff(1));
*/

// Multiple Identical Options in Switch Statements
/*
function sequentialSizes(val) {
    let answer = val;
    switch(answer) {
        case 1:
        case 2:
        case 3:
            answer = "Low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "Mid";
            break;
        case 7:
        case 8:
        case 9:
            answer = "High";
            break;
    }
    return answer;
}

sequentialSizes(1);
*/

// Replacing If Else Chains with Switch
/*
function chainToSwitch(val) {
    let answer = "";
    // Only change code below this line

    switch(val) {
        case "bob":
            answer = "Marley";
            break;
        case 42:
            answer = "The Answer";
            break;
        case 1:
            answer = "There is no #1";
            break;
        case 99:
            answer = "Missed me by this much!";
            break;
        case 7:
            answer = "Ate Nine";
            break;
    }
    return answer;
  }
  
  chainToSwitch(7);
  */

// Returning Boolean Values from Functions
/*
function isLess(a, b) {
    return a < b;
}

isLess(10, 15);
*/

// Return Early Pattern for Functions (function exits at return statement without executing code below it)
/*
function abTest(a, b) {
    if (a < 0 || b < 0) {
        return
    }
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2, 2);
*/

// Counting Cards
/*
let count = 0;

function cc(card) {
    if (card >= 2 && card <= 6) {
        count = count + 1;
    }   else if (card >= 7 && card <= 9) {
        count = count + 0;
    }   else if (card == 10 || card == 'J' || card == 'Q' || card == 'K' || card == 'A') {
        count = count - 1
    }
    if (count > 0) {
        return count + " Bet";    
    }   else if (count <= 0) {
        return count + " Hold";
    }
    return "Change Me";
}

cc(2); cc(3); cc(7); cc('K'); cc('A');
*/

// Build JavaScript Objects
/*
const myDog = {
    "name": "Rocky",
    "legs": 4,
    "tails": 1,
    "friends": ["Rob", "Alex", "Stu"]
};
*/

// Accessing Object Properties with Dot Notation
/*
const testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
};

const hatValue = testObj.hat;
const shirtValue = testObj.shirt;
*/

// Accessing Object Properties with Bracket Notation (If the property of the object you are trying to access has a space in its name, you will need to use bracket notation. However, you can still use bracket notation on object properties without spaces.)
/*
const testObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
};

const entreeValue = testObj["an entree"];
const drinkValue = testObj["the drink"];
*/

// Accessing Object Properties with Variables
/*
const testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
};

const playerNumber = 16;
const player = testObj[playerNumber];
*/

// Updating Object Properties
/*
const myDog = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
};

myDog.name = "Happy Coder"
*/

// Add New Properties to a JavaScript Object
/*
const myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
  };
  
myDog.bark = "woof";
*/

// Delete Properties from a JavaScript Object
/*
const myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"],
    "bark": "woof"
};

delete myDog.tails
*/

// Using Objects for Lookups
/*
function phoneticLookup(val) {
    let result = "";
    const lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
        "foxtrot": "Frank"
    };

    result = lookup[val];
    return result;
}

phoneticLookup("charlie");
*/

// Testing Objects for Properties
/*
function checkObj(obj, checkProp) {
    if (obj.hasOwnProperty(checkProp) == true) {
        return obj[checkProp];
    }   else {
        return "Not Found"
    }
    return "Change Me!";
}
*/

// Manipulating Complex Objects
/*
const myMusic = [
    {
        "artist": "Billy Joel",
        "title": "Piano Man",
        "release_year": 1973,
        "formats": [
            "CD",
            "8T",
            "LP"
        ],
        "gold": true
    },
    {
        "artist": "Jennifer Lopez",
        "title": "Tourist",
        "release_year": 1999,
        "formats": [
            "CD",
            "Cassette",
            "VHS"
        ],
        "gold": false
    }
];
*/

// Accessing Nested Objects
/*
const myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
};

const gloveBoxContents = myStorage.car.inside["glove box"];
*/

// Accessing Nested Arrays
/*
const myPlants = [
    {
      type: "flowers",
      list: [
        "rose",
        "tulip",
        "dandelion"
      ]
    },
    {
      type: "trees",
      list: [
        "fir",
        "pine",
        "birch"
      ]
    }
  ];
  
  const secondTree = myPlants[1].list[1];
*/

// Record Collection
/*
const recordCollection = {
    2548: {
        albumTitle: 'Slippery When Wet',
        artist: 'Bon Jovi',
        tracks: [
            'Let It Rock',
            'You Give Love a Bad Name'
        ]
    },
    2468: {
        albumTitle: '1999',
        artist: 'Prince',
        tracks: [
            '1999', 
            'Little Red Corvette'
        ]
    },
    1245: {
        artist: 'Robert Palmer',
        tracks: []
    },
    5439: {
        albumTitle: 'ABBA Gold'
    }
};

function updateRecords(records, id, prop, val) {
    if (val == "") {
        delete records[id][prop];
    }   else if (prop != "tracks") {
        records[id][prop] = val;
    }   else if (prop == "tracks" && records[id].hasOwnProperty(prop) == true) {
        records[id][prop].push(val);
    }   else if (prop == "tracks" && records[id].hasOwnProperty(prop) == false) {
        records[id][prop] = [val];
    }
    return records;
}

updateRecords(recordCollection, 5439, "artist", "ABBA");
updateRecords(recordCollection, 1245, "tracks", "Love Affair");
updateRecords(recordCollection, 2468, "tracks", "Vertigo");
updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me")

console.log(recordCollection[5439].tracks);
*/

// Iterate with JavaScript While Loops
/*
const myArray = [];
let i = 5;

while (i >= 0) {
    myArray.push(i);
    i--;
}

console.log(myArray);
*/

// Iterate with JavaScript For Loops (for (a; b; c), where a is the initialization statement, b is the condition statement, and c is the final expression.)
/*
const myArray = [];

for (let i = 1; i < 6; i++) {
    myArray.push(i);
}

console.log(myArray)
*/

// Iterate Odd Numbers With a For Loop
/*
const myArray = [];

for (let i = 1; i < 10; i += 2) {
    myArray.push(i);
}

console.log(myArray);
*/

// Count Backwards With a For Loop
/*
const myArray = [];

for (let i = 9; i > 0; i -= 2) {
    myArray.push(i);
}

console.log(myArray);
*/

// Iterate Through an Array with a For Loop
/*
const myArr = [2, 3, 4, 5, 6];
let total = 0;
for (let i = 0; i < myArr.length; i++) {
    total += myArr[i];
}

console.log(total);
*/

// Nesting For Loops
/*
function multiplyAll(arr) {
    let product = 1;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            product *= arr[i][j];
        }
    }
    return product;
}

console.log(multiplyAll([[1, 2], [3, 4], [5, 6, 7]]));
*/

// Iterate with JavaScript Do...While Loops (Do-While loop will always execute once without evaluating condition. Must initialize variable before loop or it will never end)
/*
const myArray = [];
let i = 10;

do {
    myArray.push(i);
    i++;
}   while (i < 5);

console.log(myArray);
console.log(i);
*/

// Replace Loops using Recursion (recursive function calls itself inside its body. Recursive function must always have a condition to stop calling itself, otherwise, it will call itself indefinitely)
/*
function sum(arr, n) {
    if (n <= 0) {
        return 0;
    }   else {
        return sum(arr, n - 1) + arr[n - 1];
    }
}

console.log(sum([1, 5, 8, 10, 20, 30], 5));
*/

// Profile Lookup
/*
const contacts = [
    {
        firstName: "Akira",
        lastName: "Laine",
        number: "0543236543",
        likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
        firstName: "Harry",
        lastName: "Potter",
        number: "0994372684",
        likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
        firstName: "Sherlock",
        lastName: "Holmes",
        number: "0487345643",
        likes: ["Intriguing Cases", "Violin"],
    },
    {
        firstName: "Kristian",
        lastName: "Vos",
        number: "unknown",
        likes: ["Javascript", "Gaming", "Foxes"],
    },
];

function lookUpProfile(name, prop) {
    for (let i = contacts.length; i > 0; i--) {
        if (contacts[i - 1]["firstName"] != name) {
            continue;
        }   else if (contacts[i - 1]["firstName"] == name && contacts[i - 1].hasOwnProperty(prop) == true) {
            return contacts[i - 1][prop]; 
        }   else if (contacts[i - 1]["firstName"] == name && contacts[i - 1].hasOwnProperty(prop) == false) {
            return "No such property";
        }   
    }
    return "No such contact"
}

console.log(lookUpProfile("Akira", "likes"));
*/

// Generate Random Fractions with JavaScript
/*
function randomFraction() {
    return Math.random();
}

console.log(randomFraction());
*/

// Generate Random Whole Numbers with JavaScript
/*
function randomWholeNum() {
    return Math.floor(Math.random() * 10);
}

console.log(randomWholeNum());
*/

// Generate Random Whole Numbers within a Range
/*
function randomRange(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1) + myMin);
}

console.log(randomRange(1, 2));
*/

// Use the parseInt Function (parseInt converts string into integer)
/*
function convertToInteger(str) {
    return parseInt(str);
}

console.log(parseInt("56"));
*/

// Use the parseInt Function with a Radix
/*
function convertToInteger(str) {
    return parseInt(str, 2);
}

console.log(convertToInteger("10011"));
*/

// Use the Conditional (Ternary) Operator
/*
function checkEqual(a, b) {
    return a == b ? "Equal" : "Not Equal";
}

console.log(checkEqual(9, 9));
*/

// Use Multiple Conditional (Ternary) Operators
/*
function checkSign(num) {
    return (num === 0) ? "zero"
    : (num > 0) ? "positive"
    : "negative";
}

console.log(checkSign(-100));
*/

// Use Recursion to Create a Countdown
/*
function countdown(n) {
    if (n < 1) {
        return [];
    }   else {
        const countArr = countdown(n - 1);
        countArr.unshift(n);
        return countArr;
    }
}

console.log(countdown(10));
*/
/*
function countdown(n) {
    if (n < 1) {
        console.log('At the end of recursion. Creating and returning an empty array.');
        return [];
    }   else {
        const arr = countdown(n - 1);
        console.log("Got the following array back from the recursive call:");
        console.log(JSON.stringify(arr));
        arr.unshift(n);
        console.log("Prefixing it with " + n + " and returning the result:");
        console.log(JSON.stringify(arr));
        return arr;
    }
}

let result = countdown(5);

console.log(result);
*/

// Use Recursion to Create a Range of Numbers
/*
function rangeOfNumbers(startNum, endNum) {
    if (startNum > endNum) {
        return [];
    }   else {
        const arr = rangeOfNumbers(startNum + 1, endNum);
        arr.unshift(startNum);
        return arr;
    }      
}

console.log(rangeOfNumbers(1, 10));
*/

// JS ES6

// Compare Scopes of the var and let Keywords
/*
function checkScope() {
    let i = 'function scope';
    if (true) {
        let i = 'block scope';
        console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return i;
}

checkScope();
*/

// Mutate an Array Declared with const
/*
const s = [5, 7, 2];
function editInPlace() {
    s[0] = 2;
    s[1] = 5;
    s[2] = 7;
    return console.log(s);
}

editInPlace();
*/

// Prevent Object Mutation
/*
let obj = {
    name:"FreeCodeCamp",
    review:"Awesome"
  };
  Object.freeze(obj);
  obj.review = "bad";
  obj.newProp = "Test";
  console.log(obj); 
*/
/*
function freezeObj() {
    const MATH_CONSTANTS = {
        PI: 3.14
    };
    Object.freeze(MATH_CONSTANTS);
    try {
        MATH_CONSTANTS.PI = 99;
    }   catch(ex) {
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}

const PI = freezeObj()

console.log(PI);
*/

// Use Arrow Functions to Write Concise Anonymous Functions

/* In JavaScript, we often don't need to name our functions, 
especially when passing a function as an argument to another 
function. Instead, we create inline functions. We don't need 
to name these functions because we do not reuse them anywhere 
else.

To achieve this, we often use the following syntax:

const myFunc = function() {
  const myVar = "value";
  return myVar;
}
ES6 provides us with the syntactic sugar to not have to 
write anonymous functions this way. Instead, you can use 
arrow function syntax:

const myFunc = () => {
  const myVar = "value";
  return myVar;
}
When there is no function body, and only a return value, 
arrow function syntax allows you to omit the keyword return 
as well as the brackets surrounding the code. This helps 
simplify smaller functions into one-line statements:

// const myFunc = () => "value";
// This code will still return the string value by default.

console.log(myFunc);
*/
/*
const magic = () => new Date();

console.log(magic);
*/

// Write Arrow Functions with Parameters

/*
Just like a regular function, you can pass arguments into an arrow function.

const doubler = (item) => item * 2;
doubler(4);
doubler(4) would return the value 8.

If an arrow function has a single parameter, the parentheses enclosing the parameter may be omitted.

const doubler = item => item * 2;
It is possible to pass more than one argument into an arrow function.

const multiplier = (item, multi) => item * multi;
multiplier(4, 2);
multiplier(4, 2) would return the value 8.
*/
/*
const myConcat = (arr1, arr2) => arr1.concat(arr2);

console.log(myConcat([1, 2], [3, 4, 5]));
*/

// Set Default Parameters for Your Functions
/*
const increment = (number, value = 1) => number + value;

console.log(increment(2));
*/

// Use the Rest Parameter with Function Parameters
/*
const sum = (...args) => {
    //const args = [x, y, z];
    return args.reduce((a, b) => a + b, 0);
}

console.log(sum(3, 5, 5, 10));
*/

// Use the Spread Operator to Evaluate Arrays In-Place (Spread operator (...) unpacks or spread the array)
/*
const arr = [6, 89, 3, 45];
console.log(...arr);

the spread operator only works in-place, like in an argument 
to a function or in an array literal. The following code 
will not work:

const spreaded = ...arr;


const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];

console.log(arr2);
*/

// Use Destructuring Assignment to Extract Values from Objects

/*
Destructuring assignment is special syntax introduced in ES6, 
for neatly assigning values taken directly from an object.

Consider the following ES5 code:

const user = { name: 'John Doe', age: 34 };

const name = user.name;
const age = user.age;
name would have a value of the string John Doe, and age would 
have the number 34.

Here's an equivalent assignment statement using the ES6 
destructuring syntax:

const { name, age } = user;
Again, name would have a value of the string John Doe, and 
age would have the number 34.

Here, the name and age variables will be created and assigned 
the values of their respective values from the user object. 
You can see how much cleaner this is.

You can extract as many or few values from the object as you 
want.

const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
};

const {today, tomorrow} = HIGH_TEMPERATURES;

console.log(today, tomorrow);
*/

// Use Destructuring Assignment to Assign Variables from Objects

/*
Destructuring allows you to assign a new variable name when 
extracting values. You can do this by putting the new name 
after a colon when assigning the value.

Using the same object from the last example:

const user = { name: 'John Doe', age: 34 };
Here's how you can give new variable names in the assignment:

const { name: userName, age: userAge } = user;
You may read it as "get the value of user.name and assign it 
to a new variable named userName" and so on. The value of 
userName would be the string John Doe, and the value of 
userAge would be the number 34.


const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
};

const {today: highToday, tomorrow: highTomorrow} = HIGH_TEMPERATURES;

console.log(highToday, highTomorrow);
*/

// Use Destructuring Assignment to Assign Variables from Nested Objects
/*
const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
};

const { today: { low: lowToday, high: highToday }} = LOCAL_FORECAST;

console.log(lowToday, highToday);
*/

// Use Destructuring Assignment to Assign Variables from Arrays (comma is used to navigate the array index)
/*
let a = 8, b = 6;
[a, b] = [b, a];
console.log(a, b);
*/

// Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements
/*
const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function removeFirstTwo(list) {
    const [a, b, ...arr] = list;
    return arr;
}

const arr = removeFirstTwo(source);
console.log(arr);
*/

// Use Destructuring Assignment to Pass an Object as a Function's Parameters
/*
const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
};"

const half = ({max, min}) => (max + min) / 2;

console.log(half(stats));
*/

// Create Strings using Template Literals
/*
const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
    const failureItems = [];
    for (let i = 0; i < arr.length; i++) {
        failureItems.push(`<li class="text-warning">${arr[i]}</li>`);
    }
    return failureItems;
}

const failuresList = makeList(result.failure);

console.log(failuresList);
*/

// Write Concise Object Literal Declarations Using Object Property Shorthand
/*
const createPerson = (name, age, gender) => ({name, age, gender})

console.log(createPerson('Azeem', 33, "Male"));
*/

// Write Concise Declarative Functions with ES6
/*
const bicycle = {
    gear: 2,
    setGear(newGear) {
        this.gear = newGear;
    }
};

bicycle.setGear(3);
console.log(bicycle.gear);
*/

// Use class Syntax to Define a Constructor Function (Constructor Function act as a blueprint to define new functions quickly)(constructor method must be defined inside class)
/*
class Vegetable {
    constructor(name) {
        this.name = name;
    }
}

const carrot = new Vegetable('carrot');
console.log(carrot.name);
*/

// Use getters and setters to Control Access to an Object
/*
class Thermostat {
    constructor(f) {
        this._f = f;
    }   get temperature() {
            return (5 / 9) * (this._f - 32);
    }   set temperature(c) {
            return this._f = (c * 9) / 5 + 32;
    }
}   

const thermos = new Thermostat(76);
let temp = thermos.temperature;
console.log(temp);
thermos.temperature = 26;
temp = thermos.temperature;
console.log(temp);
*/

// Create a Module Script
/*
<script type="module" src="index.js"></script>
*/

// Use export to Share a Code Block
/*
const uppercaseString = (string) => {
    return string.toUpperCase();
}

const lowercaseString = (string) => {
    return string.toLowerCase();
}

export {uppercaseString, lowercaseString};
*/
// Reuse JavaScript Code Using import
/*
import {uppercaseString, lowercaseString} from './string_functions.js'
console.log(uppercaseString('asd'));
*/

// Use * to Import Everything from a File
/*
import * as stringFunctions from './string_functions.js';
*/

// Create an Export Fallback with export default
/*
export default function subtract(x, y) {
    return x - y;
}
*/

// Import a Default Export
/*
import subtract from './string_functions.js';
console.log(subtract(7, 4));
*/

// Create a JavaScript Promise
/*
const makeServerRequest = new Promise((resolve, reject) => {

});
*/

// Complete a Promise with resolve and reject
/*
const makeServerRequest = new Promise((resolve, reject) => {
    let responseFromServer = true;
    if (responseFromServer) {
        resolve('We got the data');
    }   else {
        reject('Data not received');
    }
});
*/

// Handle a Fulfilled Promise with then
/*
const makeServerRequest = new Promise((resolve, reject) => {
    let responseFromServer = true;
    if (responseFromServer) {
        resolve('We got the data');
    }   else {
        reject('Data not received');
    }
});

makeServerRequest.then(result => {
    console.log(result)
});
*/

// Handle a Rejected Promise with catch
/*
const makeServerRequest = new Promise((resolve, reject) => {
    let responseFromServer = false;
    if (responseFromServer) {
        resolve('We got the data');
    }   else {
        reject('Data not received');
    }
});

makeServerRequest.then(result => {
    console.log(result);
})  .catch(error => {
    console.log(error);
});
*/

// JS Regex

// Using the Test Method
/*
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString);

console.log(result);
*/

// Match Literal Strings
/*
let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/;
let result = waldoRegex.test(waldoIsHiding);

console.log(result);
*/

// Match a Literal String with Different Possibilities
/*
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/;
let result = petRegex.test(petString);

console.log(result);
*/

// Ignore Case While Matching
/*
let myString = "freeCodeCamp";
let fccRegex = /freecodecamp/i;
let result = fccRegex.test(myString);

console.log(result);
*/

// Extract Matches
/*
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/;
let result = extractStr.match(codingRegex);

console.log(result);
*/

// Find More Than the First Match
/*
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi;
let result = twinkleStar.match(starRegex);

console.log(result);
*/

// Match Anything with Wildcard Period
/*
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/;
let result = unRegex.test(exampleStr);

console.log(result);
*/

// Match Single Character with Multiple Possibilities
/*
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/ig;
let result = quoteSample.match(vowelRegex);

console.log(result);
*/

// Match Letters of the Alphabet
/*
let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi;
let result = quoteSample.match(alphabetRegex);

console.log(result);
*/

// Match Numbers and Letters of the Alphabet
/*
let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/gi;
let result = quoteSample.match(myRegex);

console.log(result);
*/

// Match Single Characters Not Specified
/*
let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou0-9]/gi;
let result = quoteSample.match(myRegex);

console.log(result);
*/

// Match Characters that Occur One or More Times
/*
let difficultSpelling = "Mississippi";
let myRegex = /s+/g;
let result = difficultSpelling.match(myRegex);

console.log(result);
*/

// Match Characters that Occur Zero or More Times
/*
let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!"
let chewieRegex = /Aa*/;    /*
let result = chewieQuote.match(chewieRegex);

console.log(result);
*/

// Find Characters with Lazy Matching
/*
let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/;
let result  = text.match(myRegex);

console.log(result);
*/

// Find One or More Criminals in a Hunt
/*
let str1 = 'C';
let str2 = 'CC';
let str3 = 'P1P5P4CCCcP2P6P3';
let str4 = 'P6P2P7P4P5CCCCCP3P1'
let str5 = ''
let str6 = 'P1P2P3'
let str7 = 'P2P1P5P4CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCP3'

let reCriminals = /C+/g;
let result = str7.match(reCriminals);

console.log(result);
*/

// Match Beginning String Patterns
/*
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/;
let result = calRegex.test(rickyAndCal);

console.log(result);
*/

// Match Ending String Patterns
/*
let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/;
let result = lastRegex.test(caboose);

console.log(result);
*/

// Match All Letters and Numbers
/*
let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g;
let result = quoteSample.match(alphabetRegexV2).length;

console.log(result);
*/

// Match Everything But Letters and Numbers
/*
let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g;
let result = quoteSample.match(nonAlphabetRegex).length;

console.log(result);
*/

// Match All Numbers
/*
let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g;
let result = movieName.match(numRegex).length;

console.log(result);
*/

// Match All Non-Numbers
/*
let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/g;
let result = movieName.match(noNumRegex).length;

console.log(result);
*/

// Restrict Possible Usernames

let username = "JackOfAllTrades";
let username2 = "JACK";
let username3 = "J";
let username4 = "Jo";
let username5 = "Oceans11";
let username6 = "RegexGuru";
let username7 = "007";
let username8 = "9"
let username9 = "A1"
let username10 = "BadUs3rnam3";
let username11 = "Z97";
let username12 = "c57bT3";
let username13 = "AB1"
let username14 = "J%4"
let userCheck = /(^[a-zA-Z][0-9]+$)/g       //^[a-zA-Z]{2,}|[\d]$|/;
let result = userCheck.test(username4);
let rcheck = username9.match(userCheck);

console.log(rcheck);
console.log(result);